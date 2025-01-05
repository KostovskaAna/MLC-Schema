import React from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import GetApp from '@mui/icons-material/GetApp';
import { Grid, Typography } from '@mui/material';
import { StyledPaper, StyledPaperTitleTypography, StyledPaperContentTypography, BackgroundGrid, CustomCard } from './theme.js';
// import { Creator } from './Creator.js'
import PageNotFound from './PageNotFound';
import DescriptiveFeaturesTable from './DescriptiveFeaturesTable';
import MetafeatureTable from './MetafeatureTable';
import { dataset_domain, dataset_unit } from './dataOptions.js'


class Creator {
    constructor(n, u) {
      this.url = "";
      this.name = n;
      this.url = u;
    }
  }

class Dataset extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url_valid: true,
			description: "",
			identifier: [],
			keywords: "",
			license: "",
			sameAs: [],
			creators: [],
			targetDistributionData: [],
			descriptiveFeaturesData: [],
			metaFeaturesData: [],
			dataset: window.location.hash.split('/')[2] === undefined ? '' : [window.location.hash.split('/')[2]],
			reqURL: "http://semantichub.ijs.si/fuseki/MLC-datasets/query?query=",
		}
	}

	componentDidMount() {
		// Add event listener for the hashchange event
		window.addEventListener('hashchange', this.handleHashChange);

		// Check the initial hash value and update the state accordingly
		this.handleHashChange();

	}

	componentWillUnmount() {
		// Remove the event listener when the component unmounts
		window.removeEventListener('hashchange', this.handleHashChange);
	}

	handleHashChange = () => {
		// Check the current hash value and update the state accordingly
		// const hashValue = window.location.hash;
		const hash = window.location.hash;
		const segments = hash.split('/');

		this.setState({
			dataset: segments[2] === undefined ? "NA" : segments[2],

		})

		// get the list of valid datasets
		this.checkDatasetURL()

		// load all semantic annotations
		this.getProvenance()
		this.getTargetDistribution()
		this.getDescriptiveFeatures()
		this.getMetaFeatures()


	};

	getMetaFeatures() {
		var query = `
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			SELECT distinct ?mfLabel ?mfValue
			WHERE {
				?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
				?dsetInstance rdf:type ?dsetClass .
				?dsetInstance rdfs:label ?datasetLabel1 .
				BIND(REPLACE(?datasetLabel1, "dset:", "") AS ?datasetLabel2)
				BIND(REPLACE(?datasetLabel2, "-MLC-supervised", "") AS ?datasetLabel)
				FILTER (?datasetLabel = "`+ this.state.dataset + `")
				?dsetInstance <http://purl.obolibrary.org/obo/RO_0000086> ?mfInstance .
				?mfInstance <http://www.ontodm.com/OntoDT#OntoDT_0000240> ?mfValue .
				?mfInstance <http://ontodm.com/SemanticAnnotation#typeName> ?mfLabel .
			}`

		var fuseki_req = this.state.reqURL + encodeURIComponent(query)
		axios.get(fuseki_req)
			.then(response => {
				if (response.data.results.bindings !== undefined) {
					var metaFeaturesData = this.formatMetaFeaturesData(response.data)
					this.setState({
						metaFeaturesData: metaFeaturesData
					})
					console.log(metaFeaturesData)
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});


	}

	formatResult = function (num) {
		if (isNaN(num)) {
			return NaN;
		}
		else if (Number(num) % 1 !== 0) {
			//decimal
			return Number(num).toFixed(5);
		}
		else {
			//whole number 
			return Number(num);
		}
	}

	formatMetaFeaturesData = function (res) {
		var newArray = [];
		res.results.bindings.forEach(element => {
			newArray.push({
				mfLabel: element.mfLabel.value,
				mfValue: this.formatResult(element.mfValue.value)
			})

		});
		return newArray;
	}

	getDescriptiveFeatures() {
		var query = `
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
			SELECT ?featureName ?featureType ?featureCharacteristic
			WHERE {
				?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
				?dsetInstance rdf:type ?dsetClass .
				?dsetInstance rdfs:label ?datasetLabel1 .
				BIND(REPLACE(?datasetLabel1, "dset:", "") AS ?datasetLabel2)
				BIND(REPLACE(?datasetLabel2, "-MLC-supervised", "") AS ?datasetLabel)
				FILTER (?datasetLabel = "`+ this.state.dataset + `")
				
				?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
				?dsInstance <http://www.obofoundry.org/ro/ro.owl#has_part> ?dTypeInstance. 
				?dTypeInstance <http://www.ontodm.com/OntoDT/OntoDT_80000000> ?descFCInstance. 
				?descFCInstance rdf:type ?descFCClass .
				?descFCClass rdfs:subClassOf <http://www.ontodm.com/OntoDT#OntoDT_47a7dfda_6531_4182_b5e7_c275c9861f34> .
				?descFCInstance <http://ontodm.com/OntoDT#OntoDT_0000010> ?descDtypeInstance.
				?descDtypeInstance <http://www.ontodm.com/OntoDT/OntoDT_80000000> ?featureFCInstance. 
				?featureFCInstance <http://ontodm.com/OntoDT#OntoDT_0000010> ?featureInstance.
				?featureInstance <http://ontodm.com/SemanticAnnotation#featureName> ?featureName. 
				?featureInstance <http://ontodm.com/SemanticAnnotation#featureType> ?featureType.
				?featureInstance <http://ontodm.com/SemanticAnnotation#featureCharacteristics> ?featureCharacteristic. 
			}
		`

		var fuseki_req = this.state.reqURL + encodeURIComponent(query)
		axios.get(fuseki_req)
			.then(response => {
				if (response.data.results.bindings !== undefined) {
					var descriptiveFeaturesData = this.formatFeatureArray(response.data)
					this.setState({
						descriptiveFeaturesData: descriptiveFeaturesData
					})
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}

	formatFeatureArray = function (res, type) {
		var newArray = [];
		res.results.bindings.forEach(element => {
			var type = element.featureType.value;
			if (type === "numeric") {
				newArray.push({
					featureName: element.featureName.value,
					featureType: element.featureType.value,
					featureCharacteristic: element.featureCharacteristic.value.split(","),

				})
			} else
				if (type === "nominal") {
					var parts = element.featureCharacteristic.value.split(",")
					var labels = [];
					var values = [];
					parts.forEach(part => {
						var temp = part.split("=");
						labels.push(temp[0].trim());
						values.push(temp[1]);
					});

					newArray.push({
						featureName: element.featureName.value,
						featureType: element.featureType.value,
						featureLabeles: labels,
						featureValues: values
					})
				}
		});
		return newArray;
	}

	getTargetDistribution() {
		var query = `
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
			SELECT distinct ?cha
			WHERE {
				?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
				?dsetInstance rdf:type ?dsetClass .
				?dsetInstance rdfs:label ?datasetLabel1 .
				BIND(REPLACE(?datasetLabel1, "dset:", "") AS ?datasetLabel2)
				BIND(REPLACE(?datasetLabel2, "-MLC-supervised", "") AS ?datasetLabel)
				FILTER (?datasetLabel = "`+ this.state.dataset + `")

				?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
				?dsInstance <http://www.obofoundry.org/ro/ro.owl#has_part> ?dTypeInstance. 
				?dTypeInstance <http://www.ontodm.com/OntoDT/OntoDT_80000000> ?targFCInstance. 
				?targFCInstance rdf:type ?targFCClass .
				?targFCClass rdfs:subClassOf <http://www.ontodm.com/OntoDT#OntoDT_8c7ab50e_e725_47f8_be3e_b14b257f8bbe> .
				?targFCInstance <http://ontodm.com/OntoDT#OntoDT_0000010> ?targDtypeInstance. 
				?targDtypeInstance <http://www.ontodm.com/OntoDT/OntoDT_80000004> ?targetDiscreteDT.
				?targDtypeInstance <http://ontodm.com/SemanticAnnotation#featureCharacteristics> ?cha.
			}`

		var fuseki_req = this.state.reqURL + encodeURIComponent(query)
		axios.get(fuseki_req)
			.then(response => {
				var results = response.data.results.bindings;
				if (results !== undefined) {
					this.setState({
						targetDistributionData: this.formatTargetArray(results)
					})
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}

	formatTargetArray(res) {
		var xArray = [];
		var yArray = [];
		res.forEach(element => {
			var temp = element.cha.value;
			var labels = temp.split(";");
			labels.forEach(label => {
				var parts1 = label.split(":");
				xArray.push(parts1[0]);
				yArray.push(parts1[1].split(",")[0].split("=")[1]);
			});
		})
		var data = [{
			x: xArray,
			y: yArray,
			type: 'bar',
			// marker: {
			// 	color: 'green' // Change this to your desired color
			//   }
		}]
		return data;
	}


	getProvenance() {
		var query = `
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX schema: <https://schema.org/>
			SELECT ?name ?keywords ?description ?license (group_concat(DISTINCT ?sameAsInstance; separator =',') as ?sameAs) (group_concat(DISTINCT ?identifierInstance; separator =',') as ?identifier)
			WHERE {
				?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
				?dsetInstance rdf:type ?dsetClass .
				?dsetInstance rdfs:label ?datasetLabel1 .
				?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
				BIND(REPLACE(?datasetLabel1, "dset:", "") AS ?datasetLabel2)
				BIND(REPLACE(?datasetLabel2, "-MLC-supervised", "") AS ?datasetLabel)
				FILTER (?datasetLabel = "`+ this.state.dataset + `")

				?dsetInstance schema:name ?name .
				?dsetInstance schema:keywords ?keywords .
				?dsetInstance schema:description ?description.
				?dsetInstance schema:license ?license.
				?dsetInstance schema:sameAs ?sameAsInstance.
				?dsetInstance schema:identifier ?identifierInstance.
			}
			group by ?name ?keywords ?description ?license
		`

		var fuseki_req = this.state.reqURL + encodeURIComponent(query)
		axios.get(fuseki_req)
			.then(response => {
				var results = response.data.results.bindings[0];
				if (results !== undefined) {
					this.setState({
						description: results.description.value,
						identifier: results.identifier.value.split(','),
						keywords: results.keywords.value,
						license: results.license.value,
						sameAs: results.sameAs.value.split(',')
					})
					this.getDatasetCreators()
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}

	getDatasetCreators() {
		var query =
			`
			PREFIX schema: <https://schema.org/>	
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			SELECT ?creatorName ?creatorURL
			WHERE { 
				?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
				?dsetInstance rdf:type ?dsetClass .
				?dsetInstance rdfs:label ?datasetLabel1 .
				?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
				BIND(REPLACE(?datasetLabel1, "dset:", "") AS ?datasetLabel2)
				BIND(REPLACE(?datasetLabel2, "-MLC-supervised", "") AS ?datasetLabel)
				FILTER (?datasetLabel = "`+ this.state.dataset + `")
				?dsetInstance schema:creator ?creator .
				?creator schema:name ?creatorName.
				?creator schema:url ?creatorURL.
			}
		  `
		var fuseki_req = this.state.reqURL + encodeURIComponent(query)
		axios.get(fuseki_req)
			.then(response => {
				var creatorsArray = []
				var creators = response.data.results.bindings;
				if (creators !== undefined) {
					creators.forEach(creator => {
						var creator_el = new Creator(creator.creatorName.value, creator.creatorURL.value);
						creatorsArray.push(creator_el);
					})
					this.setState({
						creators: creatorsArray
					})
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}


	checkDatasetURL() {
		var query = `
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			SELECT DISTINCT ?datasetLabel 
			WHERE {
			?dsetInstance rdf:type ?dsetClass .
			?dsetClass rdfs:subClassOf <http://www.ontodm.com/OntoDM-core/OntoDM_000144> .
			?dsetInstance rdfs:label ?datasetLabel1 .
			?dsInstance <http://purl.obolibrary.org/obo/IAO_0000136> ?dsetInstance .
			BIND(REPLACE(?datasetLabel1, "dset:", "") AS ?datasetLabel2)
			BIND(REPLACE(?datasetLabel2, "-MLC-supervised", "") AS ?datasetLabel)
			}
			order by ?datasetLabel
		
		`

		var fuseki_req = this.state.reqURL + encodeURIComponent(query)


		axios.get(fuseki_req)
			.then(response => {
				var results = response.data.results.bindings;
				if (results !== undefined && results.length > 0) {
					var list = []
					results.forEach(result => {
						list.push(result.datasetLabel.value)
					})
					this.setState({
						url_valid: list.includes(this.state.dataset)
					})
				}
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}

	render() {
		const { theme } = this.props; // Access the theme

		return (
			<BackgroundGrid>
				{!this.state.url_valid && <PageNotFound />}
				{this.state.url_valid &&
					<Grid container justifyContent="center" alignItems="center" spacing={2}>
						<Grid item xs={12}>
							<br /> <br /> <br /> <br />
						</Grid>
						<Grid item xs={12} md={10} xl={8}>
							<StyledPaper>
								<StyledPaperTitleTypography variant="h5">&nbsp;&nbsp;&nbsp;{this.state.dataset} </StyledPaperTitleTypography>
								<StyledPaperContentTypography variant="body2" >
									{this.state.description !== "" && this.state.description} <br />  <br />
									<Typography variant="body2">
										<span style={{ color: theme.palette.secondary.main }}>Domain: </span>
										<span style={{ color: theme.palette.text.primary }}>
											{dataset_domain[this.state.dataset]}
										</span>
									</Typography>
									<Typography variant="body2">
										<span style={{ color: theme.palette.secondary.main }}>Unit: </span>
										<span style={{ color: theme.palette.text.primary }}>
											{dataset_unit[this.state.dataset]}
										</span>
									</Typography>

									{this.state.keywords !== "" && (
										<Typography variant="body2">
											<span style={{ color: theme.palette.secondary.main }}>Keywords: </span>
											<span style={{ color: theme.palette.text.primary }}>
												{this.state.keywords}
											</span>
										</Typography>
									)}
									{this.state.license !== 'na' && (
										<React.Fragment>
											<span style={{ color: theme.palette.secondary.main }}>License: </span> <a style={{ color: theme.palette.text.primary }}  href={this.state.license} target="_blank" rel="noopener noreferrer">{this.state.license}</a>
											<br />
										</React.Fragment>
									)}
									{this.state.license === 'na' && (
										<Typography variant="body2">
											<span style={{ color: theme.palette.secondary.main }}>License: </span>
											<span style={{ color: theme.palette.text.primary }}>
												not provided
											</span>
										</Typography>
									)}

									{this.state.sameAs.length > 0 && (
										<React.Fragment>
											<span style={{ color: theme.palette.secondary.main }}>Same as: </span>
											{this.state.sameAs.map((sameAsElement, index) => (
												<span key={index}>
													<a style={{ color: theme.palette.text.primary }} href={sameAsElement} target="_blank" rel="noopener noreferrer" itemprop="sameAs">{sameAsElement}</a>
													{index !== this.state.sameAs.length - 1 && <span>, </span>}
												</span>
											))}
											<br />
										</React.Fragment>
									)}
									{this.state.identifier.length > 0 && (
										<React.Fragment>
											<span style={{ color: theme.palette.secondary.main }}>Identifier: </span>
											{this.state.identifier.map((identifierElement, index) => (
												<span key={index}>
													<a style={{ color: theme.palette.text.primary }} href={identifierElement} target="_blank" rel="noopener noreferrer" itemprop="sameAs">{identifierElement}</a>
													{index !== this.state.identifier.length - 1 && <span>, </span>}
												</span>
											))}
											<br />
										</React.Fragment>
									)}
									{this.state.creators.length > 0 && (
										<React.Fragment>
											<span style={{ color: theme.palette.secondary.main }}>Creator(s): </span>
											{this.state.creators.map((creatorElement, index) => (
												<span key={index}>

													<a style={{ color: theme.palette.text.primary }} href={creatorElement.url} target="_blank" rel="noopener noreferrer" itemprop="sameAs">{creatorElement.name}</a>
													{index !== this.state.creators.length - 1 && <span>, </span>}
												</span>
											))}
											<br />
										</React.Fragment>
									)}
									{this.state.dataset !== '' && (
										<React.Fragment>
											<br />
											<Typography style={{ display: 'flex', alignItems: 'center' }}>
												<GetApp style={{ marginRight: '10px' }} />
												Download:
											</Typography>
											<span style={{ color: theme.palette.secondary.main }}>Meta-features calculated on the train dataset: </span>
											<a style={{ color: theme.palette.text.primary }} href={"./assets/data_download/metaFeaturesJsonFiles/" + this.state.dataset + "_train.json"} download={this.state.dataset + '_train.json'} role="button" >{this.state.dataset + "_train.json"}</a>
											<br></br>
											<span style={{ color: theme.palette.secondary.main }}>Meta-features calculated on the test dataset: </span>
											<a style={{ color: theme.palette.text.primary }} href={"./assets/data_download/metaFeaturesJsonFiles/" + this.state.dataset + "_test.json"} download={this.state.dataset + '_test.json'} role="button" >{this.state.dataset + "_test.json"}</a>
											<br></br>
											<span style={{ color: theme.palette.secondary.main }}>RDF annotations:  </span>
											<a style={{ color: theme.palette.text.primary }} href={"./assets/data_download/annotations/" + this.state.dataset + ".rdf"} download={this.state.dataset + '.rdf'} role="button" >{this.state.dataset + ".rdf"}</a>
										</React.Fragment>
									)}
									{this.state.dataset !== '' && this.state.license !== 'na' && (
										<React.Fragment>
											<br />
											<span style={{ color: theme.palette.secondary.main }}> {this.state.dataset} train dataset: </span><a style={{ color: theme.palette.text.primary }} href={"assets/data_download/MLC-Datasets/" + this.state.dataset + "/" + this.state.dataset + "_train.arff"} download={this.state.dataset + '_train.arff'} role="button" >{this.state.dataset + "_train.arff"}</a>
											<br />
											<span style={{ color: theme.palette.secondary.main }}>{this.state.dataset} test dataset: </span><a style={{ color: theme.palette.text.primary }} href={"assets/data_download/MLC-Datasets/" + this.state.dataset + "/" + this.state.dataset + "_test.arff"} download={this.state.dataset + '_test.arff'} role="button" >{this.state.dataset + "_test.arff"}</a>
										</React.Fragment>
									)}

								</StyledPaperContentTypography>
							</StyledPaper>


						</Grid>
						<Grid item xs={12} md={10} xl={8}>

							{this.state.targetDistributionData.length > 0 && (
								<div>
									<br />
									<CustomCard >

										<Plot
											data={this.state.targetDistributionData}
											// config={{ displayModeBar: false }}
											layout={{
												title: 'Label Distribution',
												height: 500,
												paper_bgcolor: 'rgba(0,0,0,0)', // Dark background for the overall plot area
												plot_bgcolor: 'rgba(0,0,0,0)',  // Same dark color for the plotting area
												font: {
													color: theme.palette.text.primary  // Light color for text for contrast
												},
												xaxis: {
													type: 'category',
													automargin: true,
													gridcolor: theme.palette.dimgray.main,  // Slightly lighter grid lines for visibility
													tickcolor: theme.palette.text.primary   // Light color for the axis ticks
												},
												yaxis: {
													gridcolor: theme.palette.dimgray.main,  // Slightly lighter grid lines for visibility
													tickcolor: theme.palette.text.primary   // Light color for the axis ticks
												},
												legend: {
													bgcolor: 'rgba(0,0,0,0)',  // Optional: make legend background transparent
													font: {
														color: theme.palette.text.primary   // Light color for legend text
													}
												}
											}}
											useResizeHandler={true}
											style={{ width: "100%" }}
										/>
									</CustomCard>
								</div>


							)}
						</Grid>
						<Grid item xs={12} md={10} xl={8}>
							<DescriptiveFeaturesTable theme = {theme} data={this.state.descriptiveFeaturesData}></DescriptiveFeaturesTable>
						</Grid>
						<Grid item xs={12} md={10} xl={8}>
							<MetafeatureTable data={this.state.metaFeaturesData}></MetafeatureTable>
						</Grid>
						<Grid item xs={12} md={10} xl={8}>
							<br /> <br />
						</Grid>

					</Grid>
				}
			</BackgroundGrid>
		)
	}
}

export default Dataset; 