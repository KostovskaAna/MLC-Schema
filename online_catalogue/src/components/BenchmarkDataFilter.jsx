import React from 'react';
import { evaluationMeasureListTrainTest, evaluationMeasureListFolds, virtuosoReqURL } from './dataOptions.js'
import { disableNewMapping, getList, hasERROR } from './utils.js'
import { getDatasetsQuery, getMethodsQuery } from './createQueries.js'
import PerformanceDataTable from './PerformanceDataTable.jsx';
import { Add, Delete } from '@mui/icons-material';
import { Button, TextField, Grid, Typography, FormControlLabel } from '@mui/material';
import { CustomAutocomplete, CustomSwitch, CustomCard, BackgroundGrid, CustomDeleteButton, AddMappingButton } from './theme.js'


class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mappings: [],
			showFilters: 'none',
			datasetList: [],
			selectedDatasets: [],
			methodsList: [],
			selectedMethods: [],
			dataType: 'train / test results',
			selectedFolds: [],
			evaluationMeasureList: evaluationMeasureListTrainTest
		}
	}

	componentDidMount() {
		this.getDatasets()
		this.getMethods()
	}

	getDatasets = () => {
		getList(virtuosoReqURL, getDatasetsQuery()).then((value) => { this.setState({ datasetList: value }) });
	}

	getMethods = () => {
		getList(virtuosoReqURL, getMethodsQuery()).then((value) => { this.setState({ methodsList: value }) });
	}

	addNewMapping() {
		let newMappings = this.state.mappings
		newMappings.push(
			{
				"key": "",
				"range": "",
				"id": this.state.mappings.length === 0 ? 0 : this.state.mappings[this.state.mappings.length - 1].id + 1,
				"error": false
			}
		)
		this.setState({
			mappings: newMappings,
		})
	}

	removeSelectedMapping(selected_mapping) {
		let newMappings = []
		for (let i = 0; i < this.state.mappings.length; i++) {
			let mapping = this.state.mappings[i]
			if (mapping.id !== selected_mapping.id) {
				newMappings.push(mapping)
			}
		}
		this.setState({
			mappings: newMappings,
		})
	};

	handleChangeSelectedMappingKey(value, selected_mapping) {
		let mappings_arr = this.state.mappings
		mappings_arr.forEach((mapping) => {
			if (mapping.id === selected_mapping.id) {
				mapping.key = value
			}
		})
		this.setState({ mappings: mappings_arr })
	}

	handleChangeSelectedMappingRange(value, selected_mapping) {
		let mappings_arr = this.state.mappings
		mappings_arr.forEach((mapping) => {
			if (mapping.id === selected_mapping.id) {
				mapping.range = value
				mapping.error = hasERROR(value)
			}
		})
		this.setState({
			mappings: mappings_arr
		})
	}


	render() {
		const { theme } = this.props; // Access the theme
		return (
			<React.Fragment>
				<BackgroundGrid container justifyContent="center" alignItems="center" spacing={0}>
					<Grid item xs={12} md={10} xl={7}>
						<br /> <br /> <br /> <br />
					</Grid>
					<Grid item xs={12} md={10} xl={7}>
						<FormControlLabel sx={{ color: theme => theme.palette.text.primary }} control={
							<CustomSwitch sx={{ m: 2, ml: 2 }} onChange={(value) => { (value.target.checked === true) ? this.setState({ showFilters: '' }) : this.setState({ showFilters: 'none' }) }} />
						} label="Filter datasets" />
					</Grid>
					<br />
					<Grid item xs={12} md={10} xl={7}>
						<CustomCard sx={{ display: this.state.showFilters }}>
							<Grid container justifyContent="center" alignItems="center" spacing={1}>
								<Grid item xs={12} sm={10} xl={8}>
									<Grid container justifyContent="center" alignItems="center" spacing={1}>
										<Grid item xs={12}>
											<br /> <br /> <br />
										</Grid>
										<Grid item xs={10} md={6}>
											<CustomAutocomplete
												multiple={false}
												options={["train / test results", "CV results", "CV results aggregated accross folds"]}
												value={this.state.dataType}
												renderInput={(params) => <TextField {...params} variant='outlined' label="Data type" />}
												onChange={(event, value) => {
													this.setState({
														dataType: value,
														evaluationMeasureList: value === "train / test results" ? evaluationMeasureListTrainTest : evaluationMeasureListFolds,
														selectedDatasets:  ['Arabic200']
													});
												}}
											/>
										</Grid>
										<Grid item xs={10} md={6}>
											<CustomAutocomplete
												multiple={true}
												options={["1", "2", "3"]}
												disabled={this.state.dataType !== 'CV results'}
												value={this.state.selectedFolds}
												renderInput={(params) => <TextField {...params} variant='outlined' label="Folds" />}
												onChange={(event, value) => { this.setState({ selectedFolds: value }); }}
											/>
										</Grid>
										<Grid item xs={10} md={6}>
											<CustomAutocomplete
												multiple={true}
												options={this.state.dataType === 'train / test results' ? this.state.datasetList : this.state.datasetList.splice(1)}
												value={this.state.selectedDatasets}
												renderInput={(params) => <TextField {...params} variant='outlined' label={"Datasets"} />}
												onChange={(event, value) => { this.setState({ selectedDatasets: value }); }}
											/>
										</Grid>
										<Grid item xs={10} md={6}>
											<CustomAutocomplete
												multiple={true}
												options={this.state.dataType === 'train / test results' ? this.state.methodsList : this.state.methodsList.splice(1)}
												value={this.state.selectedMethods}
												renderInput={(params) => <TextField {...params} variant='outlined' label="Methods" />}
												onChange={(event, value) => { this.setState({ selectedMethods: value }); }}
											/>
										</Grid>
										<Grid item xs={10} md={12}>
											<br />
											<Typography variant='h6'>Evaluation measure filters</Typography>
										</Grid>
										{this.state.mappings.map((mapping, index) => (
											<Grid item xs={10} md={12} key={mapping.id}>
												<Grid container spacing={1} alignItems="center">
													<Grid item xs={12} md={6}>
														<CustomAutocomplete
															multiple={false}
															options={this.state.evaluationMeasureList}
															value={mapping.key}
															renderInput={(params) => <TextField {...params} required variant='outlined' label={"Select meta feature"} />}
															onChange={(event, value) => { this.handleChangeSelectedMappingKey(value, mapping) }}
														/>
													</Grid>
													<Grid item xs={9} md={5}>
														<TextField
															label='Add range'
															variant='outlined'
															fullWidth={true}
															required
															value={mapping.range}
															onChange={(event) => this.handleChangeSelectedMappingRange(event.target.value, mapping)}
															error={mapping.error}
															helperText={mapping.error ? "Invalid format or range not specified." : ''}
															placeholder="e.g. 10, 5-10, >5, <=5"
														/>
													</Grid>
													<Grid item xs={3} md={1}>
														<CustomDeleteButton variant='contained' fullWidth={true} onClick={() => this.removeSelectedMapping(mapping)} >
															<Delete />
														</CustomDeleteButton>
													</Grid>
												</Grid>
											</Grid>
										))}
										<Grid item xs={10} md={12} >
											<AddMappingButton variant='text' onClick={() => this.addNewMapping()} disabled={disableNewMapping(this.state.mappings)}
												startIcon={<Add />} >
												Add evalutation measure
											</AddMappingButton>
										</Grid>
										<Grid item xs={5} lg={3} sx={{ m: 2, mb: 4 }}>
											<Button fullWidth={true} color='secondary' variant='contained' onClick={() => this.callPerformanceDataTableMethod()} disabled={disableNewMapping(this.state.mappings)} >
												<Typography variant='button'> Submit </Typography>
											</Button>
										</Grid>

									</Grid>
								</Grid>
							</Grid>
						</CustomCard>
					</Grid>
					<Grid item xs={12} md={10} xl={7}>
						<PerformanceDataTable
							setFilter={click => this.callPerformanceDataTableMethod = click}
							dataType={this.state.dataType}
							selectedFolds={this.state.selectedFolds}
							selectedDatasets={this.state.selectedDatasets}
							selectedMethods={this.state.selectedMethods}
							selectedEvaluationMeasures={this.state.mappings}
							evaluationMeasureList={this.state.evaluationMeasureList}
							theme={theme}
						/>
					</Grid>
					<Grid item xs={12} md={10} xl={8}>
						<br /> <br /> <br />
					</Grid>
				</BackgroundGrid>
			</React.Fragment>
		);
	}
}

export default Body;