import React from 'react';
import { CustomLink, CustomCircularProgress, CustomCard } from './theme.js'
import { Box, Tooltip, Typography } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { GridToolbarContainer, GridToolbarExport, DataGrid } from '@mui/x-data-grid';
import http from 'stream-http';
import { virtuosoReqURL } from './dataOptions.js'
import { getPerformanceQueryTrainTest, getPerformanceQueryFolds, getPerformanceQueryFoldsAggregated } from './createQueries.js';
import { createFilterString, parseTunedParameters } from './utils.js'

class PerformanceDataTable extends React.Component {
	constructor(props) {
		super(props);
		this.filterData = this.filterData.bind(this);
		this.state = {
			selectedDatasets: props.selectedDatasets,
			selectedMethods: props.selectedMethods,
			selectedFolds: props.selectedFolds,
			selectedEvaluationMeasures: props.selectedEvaluationMeasures,
			evaluationMeasureList: props.evaluationMeasureList,
			dataType: props.dataType,

			spreadSheetRows: [],
			spreadSheetColumns: [],
			loadingData: "flex",
		};
	}

	componentDidMount() {
		this.props.setFilter(this.filterData)
		this.getDataFromQuery()
	}

	filterData() {
		this.setState({
			selectedDatasets: this.props.selectedDatasets,
			selectedMethods: this.props.selectedMethods,
			selectedFolds: this.props.selectedFolds,
			selectedEvaluationMeasures: this.props.selectedEvaluationMeasures,
			evaluationMeasureList: this.props.evaluationMeasureList,
			dataType: this.props.dataType,

			loadingData: "flex",
		}, () => {
			this.getDataFromQuery()
		});

	}

	getData = (query) => {
		const options = {
			path: virtuosoReqURL + encodeURIComponent(query),
			method: 'GET',
			headers: { 'Accept': 'application/json' }
		};

		http.get(options, (resp) => {
			let data = '';
			// A chunk of data has been received.
			resp.on('data', (chunk) => {
				data += chunk;
			});

			// The whole response has been received. 
			resp.on('end', () => {
				var list = []
				var id = 1
				data = JSON.parse(data)
				for (let i = 0; i < data.results.bindings.length; i++) {
					var record = data.results.bindings[i];

					// parse evaluation measures in dictionary 
					var evaluation_measures_dict = {}
					for (let j = 0; j < record.EvaluationMeasures.value.split(";").length; j++) {
						let element = record.EvaluationMeasures.value.split(";")[j]
						let k = element.split(":")[0]
						let v = parseFloat(element.split(":")[1])
						evaluation_measures_dict[k] = v
					}

					var record_dict = {
						dataset: record.datasetLabel.value,
						algorithm: record.Algorithm.value,
						model: record.model.value,
						evaluationMeasures: evaluation_measures_dict
					};

					var includeRecord = true
					for (let j = 0; j < this.state.selectedEvaluationMeasures.length; j++) {
						let selectedEvaluationMeasure = this.state.selectedEvaluationMeasures[j]
						let measure = selectedEvaluationMeasure.key
						if (measure !== '') {
							let range = selectedEvaluationMeasure.range
							let value = record_dict.evaluationMeasures[measure]
							if (range.match(/^>=[0-9.]+$/)) {
								includeRecord = value >= parseFloat(range.substr(2));
							} else if (range.match(/^>[0-9.]+$/)) {
								includeRecord = value > parseFloat(range.substr(1));
							} else if (range.match(/^<=[0-9.]+$/)) {
								includeRecord = value <= parseFloat(range.substr(2));
							} else if (range.match(/^<[0-9.]+$/)) {
								includeRecord = value < parseFloat(range.substr(1));
							} else if (range.match(/^[0-9.]+$/)) {
								includeRecord = value === parseFloat(range);
							} else if (range.match(/^[0-9.]+-[0-9.]+$/)) {
								const range_v = range.split('-').map(Number);
								range_v.sort((a, b) => a - b);
								includeRecord = value >= range_v[0] && value <= range[1];
							}
						}
						if (includeRecord === false)
							break
					}

					if (this.state.dataType === 'CV results') {
						record_dict['parameters'] = parseTunedParameters(record);
						record_dict['fold'] = record.Fold.value.substr(record.Fold.value.length - 11, 1);
					}
					else if (this.state.dataType === 'CV results aggregated accross folds') {
						record_dict['parameters'] = parseTunedParameters(record);
						record_dict['fold'] = "1, 2, 3"
					}

					if (includeRecord) {
						record_dict.id = id++
						for (const measure in evaluation_measures_dict)
							record_dict[measure] = evaluation_measures_dict[measure]
						list.push(record_dict);
					}
				}

				this.setState({
					spreadSheetRows: list,
					spreadSheetColumns: this.createColumnsArray(),
					loadingData: "none",
				})
			}).on("error", (err) => {
				console.log(err)
			});
		})
	}

	createColumnsArray() {
		let columns = [
			{ field: 'id', headerName: '', width: 20, },
			{ field: 'dataset', headerName: 'Dataset', width: 200, renderCell: (data) => (<CustomLink target="_blank" rel="noopener noreferrer" to={`/Dataset/${data.value}`}>{data.value}</CustomLink>) },
			// { field: 'algorithm', headerName: 'Method', width: 200, renderCell: (data) => (<CustomLink target="_blank" rel="noopener noreferrer" to={`/Method/${data.value}`}>{data.value}</CustomLink>) },
			{ field: 'algorithm', headerName: 'Method', width: 200, renderCell: (data) => (<span>{data.value}</span> )},
			{ field: 'model', headerName: 'Model', width: 100, renderCell: (params) => (<Tooltip title={params.row.model}><span>{<Add />}</span></Tooltip>), }
		];

		if (this.state.dataType !== 'train / test results') {
			columns.push({ field: 'parameters', headerName: 'Tuned Parameters', width: 400 });
			columns.push({ field: 'fold', headerName: 'Fold', width: 150 });
		}

		for (let i = 0; i < this.state.evaluationMeasureList.length; i++)
			columns.push({ field: this.state.evaluationMeasureList[i], width: 250 });
		return columns
	}

	getDataFromQuery() {
		const datasetFilterString = createFilterString(this.state.selectedDatasets, '?datasetLabel');
		const methodFilterString = createFilterString(this.state.selectedMethods, '?Algorithm');
		const foldsFilterString = createFilterString(this.state.selectedFolds, '?Fold');

		var query = ""
		if (this.state.dataType === 'train / test results')
			query = getPerformanceQueryTrainTest(datasetFilterString, methodFilterString)
		else if (this.state.dataType === 'CV results')
			query = getPerformanceQueryFolds(foldsFilterString, datasetFilterString, methodFilterString)
		else if (this.state.dataType === 'CV results aggregated accross folds')
			query = getPerformanceQueryFoldsAggregated(datasetFilterString, methodFilterString)
		this.getData(query)
	}

	render() {
		const { theme } = this.props; // Access the theme
		return (
			<React.Fragment>
				{this.state.spreadSheetRows.length > 0 ?
					<div>
						<br />
						<CustomCard>
							<DataGrid
								rows={this.state.spreadSheetRows}
								columns={this.state.spreadSheetColumns}
								disableColumnMenu={false}
								components={{
									Toolbar: () => {
										return (
											<GridToolbarContainer>
												<GridToolbarExport color='secondary' variant='contained' printOptions={{ disableToolbarButton: true }} style={{ marginBottom: 5 }} />
											</GridToolbarContainer>
										);
									},
								}}
							/>
						</CustomCard>
						<br /><br />

					</div>
					:
					<div style={{ display: this.state.loadingData, justifyContent: 'center', alignItems: 'center' }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
							<br /><br />
							<CustomCircularProgress /><br />
							<Typography sx={{ color: theme.palette.text.primary }}>Loading data...</Typography>
							<br />
							<br />
						</Box>
					</div>

				}



			</React.Fragment>
		);
	}
}
export default PerformanceDataTable;