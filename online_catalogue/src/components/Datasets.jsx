import React from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import DatasetsTable from './DatasetsTable.jsx';
import { domains, units, metaFeaturesMLC, fusekiReqURL } from './dataOptions.js'
import { hasERROR, disableNewMapping, getFilteredDatasetsByText, getFilteredDatasetsByDomain, getFilteredDatasetsByUnit, formatResArrayWithFilter, formatResArrayWithFilterMeta } from './utils.js'
import { getDatasetsWithFilter, getDatasetsWithoutFilter, getDatasetsWithFilterMeta } from './createQueries.js'
import { Add, Delete } from '@mui/icons-material';
import { Grid, Tooltip, FormControlLabel, Button, TextField, Typography, FormLabel, FormControl, RadioGroup, Box } from '@mui/material';
import { AddMappingButton, CustomRadio, ExamplQueryButton, CustomTextField, CustomCard, CustomCircularProgress, CustomDeleteButton, BackgroundGrid, CustomAutocomplete, CustomSwitch } from './theme.js'



class DatasetsPage extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      datasets: [],
      showFilters: 'none',
      selectedDomains: [],
      selectedUnits: [],
      textToFilter: "",
      numberOfDescriptiveFeatures: "",
      numberOfTargetFeatures: "",
      descriptiveRangeError: false,
      targetRangeError: false,
      mappings: [],
      missingValuesSpec: 'both',
      filteredDatasetsByDomain: [],
      filteredDatasetsByText: [],
      filteredDatasetsByUnit: [],
      query: "",
      metaQuery: "",
      metaFeaturesPlotData: undefined,
      selectedMetaFeatures: [],
      dsNames: [],
      scatterPlotData: undefined,
    }
  }

  componentDidMount() {
    this.getAllDatasetsQuery()
    this.getAllMetaQuery()
  }

  handleRangeDescriptive(value) {
    this.setState({
      numberOfDescriptiveFeatures: value,
      descriptiveRangeError: hasERROR(value)
    })
  }

  handleRangeTarget(value) {
    this.setState({
      numberOfTargetFeatures: value,
      targetRangeError: hasERROR(value)
    })
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

  removeSelectedMapping = function (selected_mapping) {
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

  setDefaultQuery(queryNumber) {
    switch (queryNumber) {
      case 1: {
        this.setState({
          selectedDomains: ["Text", "Bioinformatics"],
          selectedUnits: [],
          textToFilter: "",
          numberOfDescriptiveFeatures: "",
          numberOfTargetFeatures: "",
          descriptiveRangeError: false,
          targetRangeError: false,
          mappings: [],
          missingValuesSpec: 'both',
        })
        break
      }
      case 2: {
        this.setState({
          selectedDomains: [],
          selectedUnits: [],
          textToFilter: "",
          numberOfDescriptiveFeatures: "",
          numberOfTargetFeatures: "",
          descriptiveRangeError: false,
          targetRangeError: false,
          mappings: [{ key: "DefaultAccuracy", range: '>0.3', id: 0, error: false }],
          missingValuesSpec: 'withoutMissing',

        })
        break
      }
      case 3: {
        this.setState({
          selectedDomains: [],
          selectedUnits: [],
          textToFilter: "Arabic,yahoo",
          numberOfDescriptiveFeatures: "",
          numberOfTargetFeatures: "",
          descriptiveRangeError: false,
          targetRangeError: false,
          mappings: [],
          missingValuesSpec: 'both'
        })
        break
      }
      case 4: {
        this.setState({
          selectedDomains: [],
          selectedUnits: [],
          textToFilter: "",
          numberOfDescriptiveFeatures: "<30",
          numberOfTargetFeatures: ">10",
          descriptiveRangeError: false,
          targetRangeError: false,
          mappings: [],
          missingValuesSpec: 'both'
        })
        break
      }
      default: {
        break
      }
    }
  }

  getAllDatasetsQuery() {
    var query = getDatasetsWithoutFilter()
    var fuseki_req = fusekiReqURL + encodeURIComponent(query)
    axios.get(fuseki_req)
      .then(response => {
        var newArray = [];
        if (response.data.results.bindings !== undefined) {
          response.data.results.bindings.forEach(element => {
            newArray.push({
              datasetLabel: element.datasetLabel.value.split(":")[1].split("-MLC")[0],
              numInstances: element.numInstances.value,
              numTargets: element.numTargets.value,
              numDescriptive: element.numDescriptive.value,
              hasMissingValues: element.hasMissingValues.value,
              dsetInstance: element.dsetInstance.value
            })
          });
          this.setState({ datasets: newArray })
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  getAllMetaQuery() {
    this.setState({
      metaQuery: getDatasetsWithFilterMeta(this.state.mappings, this.state.missingValuesSpec, this.state.numberOfDescriptiveFeatures, this.state.numberOfTargetFeatures),
    }, () => {
      this.executeMetaQueryWithFilter();
    })
  }


  handleSubmitClick() {
    this.setState({
      datasets: [],
      metaFeaturesPlotData: undefined,
      scatterPlotData: undefined,
      filteredDatasetsByDomain: getFilteredDatasetsByDomain(this.state.selectedDomains),
      filteredDatasetsByUnit: getFilteredDatasetsByUnit(this.state.selectedUnits),
      filteredDatasetsByText: getFilteredDatasetsByText(this.state.textToFilter),
      query: getDatasetsWithFilter(this.state.mappings, this.state.missingValuesSpec, this.state.numberOfDescriptiveFeatures, this.state.numberOfTargetFeatures),
      metaQuery: getDatasetsWithFilterMeta(this.state.mappings, this.state.missingValuesSpec, this.state.numberOfDescriptiveFeatures, this.state.numberOfTargetFeatures),
    }, () => {
      this.executeQueryWithFilter();
      this.executeMetaQueryWithFilter();
    })
  }

  executeQueryWithFilter() {
    axios.get(fusekiReqURL + encodeURIComponent(this.state.query))
      .then(response => {
        if (response.data.results.bindings !== undefined)
          this.setState({
            datasets: formatResArrayWithFilter(response.data, this.state.filteredDatasetsByDomain, this.state.filteredDatasetsByText, this.state.filteredDatasetsByUnit),
          })
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }



  executeMetaQueryWithFilter() {
    axios.get(fusekiReqURL + encodeURIComponent(this.state.metaQuery))
      .then(response => {
        if (response.data.results.bindings !== undefined) {
          let newDict = formatResArrayWithFilterMeta(response.data, this.state.filteredDatasetsByDomain, this.state.filteredDatasetsByText, this.state.filteredDatasetsByUnit)
          let newSelected = this.getSelectedFeatures(this.state.mappings)
          this.setState({
            metaFeaturesPlotData: newDict['metaFeaturesPlotData'],
            dsNames: newDict['dsNames'],
            selectedMetaFeatures: newSelected
          }, () => {
            this.populateMetaFeaturesData()
          })
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  populateMetaFeaturesData() {
    var array = [];
    this.state.selectedMetaFeatures.forEach(metaFeature => {
      array.push(
        {
          x: this.state.dsNames,
          y: this.state.metaFeaturesPlotData[metaFeature],
          mode: this.state.metaFeaturesPlotData[metaFeature].length < 4 ? 'lines+markers' : 'lines',
          type: 'scatter',
          name: metaFeature
        }
      )
    });
    this.setState({ scatterPlotData: array })
  }

  getSelectedFeatures(mappings) {
    var newArray = [];
    if (mappings.length === 0) {
      return ['Average examples per labelset', "Proportion of numeric attributes with outliers"];
    }
    else {
      mappings.forEach(mapping => {
        newArray.push(String(mapping.key));
      });
    }
    return newArray;
  }


  render() {
    const { theme } = this.props; // Access the theme
    return (
      <React.Fragment >
        <BackgroundGrid container justifyContent="center" alignItems="center" spacing={0}>
          <Grid item xs={12} md={10} xl={8}>
            <br /> <br /> <br /> <br />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <FormControlLabel sx={{ color: theme => theme.palette.text.primary }} control={
              <CustomSwitch sx={{ m: 2, ml: 2 }} onChange={(value) => { (value.target.checked === true) ? this.setState({ showFilters: '' }) : this.setState({ showFilters: 'none' }) }} />
            } label="Filter datasets" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <CustomCard sx={{ display: this.state.showFilters }}>
              <Grid container justifyContent="center" alignItems="center" spacing={1} >
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item={2} sx={{ mr: 2, ml: 2 }}>
                  <Tooltip title="List datasets from the Text and Bioinformatics domains.">
                    <ExamplQueryButton variant='contained' onClick={() => this.setDefaultQuery(1)} >
                      <Typography variant='button'>  Example filter 1 </Typography>
                    </ExamplQueryButton>
                  </Tooltip>
                </Grid>
                <Grid item={2} sx={{ mr: 2, ml: 2 }}>
                  <Tooltip title="List datasets without missing values with Default Accuracy larger than 0.3.">
                    <ExamplQueryButton variant='contained' onClick={() => this.setDefaultQuery(2)} >
                      <Typography variant='button'>  Example filter 2 </Typography>
                    </ExamplQueryButton>
                  </Tooltip>
                </Grid>
                <Grid item={2} sx={{ mr: 2, ml: 2 }}>
                  <Tooltip title="List datasets that contain the word 'Arabic' or 'yahoo' in their description.">
                    <ExamplQueryButton variant='contained' onClick={() => this.setDefaultQuery(3)} >
                      <Typography variant='button'>  Example filter 3 </Typography>
                    </ExamplQueryButton>
                  </Tooltip>
                </Grid>
                <Grid item={2} sx={{ mr: 2, ml: 2 }}>
                  <Tooltip title="List datasets with more than 10 targets and less than 30 descriptive features.">
                    <ExamplQueryButton variant='contained' onClick={() => this.setDefaultQuery(4)} >
                      <Typography variant='button'>  Example filter 4 </Typography>
                    </ExamplQueryButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={12}>
                  {/* <br /> */}
                </Grid>
                <Grid item xs={10}>
                  <CustomAutocomplete
                    multiple={true}
                    options={domains}
                    value={this.state.selectedDomains}
                    renderInput={(params) => <TextField {...params} variant='outlined' label={"Select domain(s)"} />}
                    onChange={(event, value) => { this.setState({ selectedDomains: value }); }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <CustomAutocomplete
                    multiple={true}
                    options={units}
                    size='xs'
                    value={this.state.selectedUnits}
                    renderInput={(params) => <TextField {...params} variant='outlined' label={"Select unit(s) of analysis"} />}
                    onChange={(event, value) => { this.setState({ selectedUnits: value }); }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <CustomTextField
                    label="Text search"
                    multiline
                    minRows={2}
                    placeholder="Keywords search e.g., classification, image, protein"
                    variant="outlined"
                    fullWidth
                    size="md"
                    value={this.state.textToFilter}
                    onChange={(event, value) => { this.setState({ textToFilter: event.target.value }); }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant='h6' >Filter datasets by meta features</Typography>
                </Grid>
                {this.state.mappings.map((mapping, index) => (
                  <Grid item xs={10} key={mapping.id}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <CustomAutocomplete
                          multiple={false}
                          options={metaFeaturesMLC}
                          value={mapping.key}
                          renderInput={(params) => <TextField {...params} required variant='outlined' label={"Select meta feature"} />}
                          onChange={(event, value) => { this.handleChangeSelectedMappingKey(value, mapping) }}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <CustomTextField
                          label='Add range'
                          variant='outlined'
                          fullWidth={true}
                          required
                          value={mapping.range}
                          onChange={(event) => this.handleChangeSelectedMappingRange(event.target.value, mapping)}
                          error={mapping.error}
                          helperText={mapping.error ? "Invalid format or range not specified." : ''}
                          // InputLabelProps={{ shrink: true }}
                          placeholder="e.g. 10, 5-10, >5, <=5"
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <CustomDeleteButton fullWidth={true} variant='contained' onClick={() => this.removeSelectedMapping(mapping)}>
                          <Delete />
                        </CustomDeleteButton>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={10}>
                  <AddMappingButton variant='text' onClick={() => this.addNewMapping()} disabled={disableNewMapping(this.state.mappings)} startIcon={<Add />} >
                    Add meta-feature
                  </AddMappingButton>
                </Grid>
                <Grid item xs={5}>
                  <CustomTextField
                    label='Enter number of descriptive features'
                    variant='outlined'
                    fullWidth={true}
                    value={this.state.numberOfDescriptiveFeatures}
                    onChange={(event) => this.handleRangeDescriptive(event.target.value)}
                    error={this.state.descriptiveRangeError}
                    helperText={this.state.descriptiveRangeError && "Please enter a valid range."}
                    FormHelperTextProps={{ style: { minHeight: '3em' } }}
                    placeholder="e.g. 10, 5-10, >5, <=5"
                  />
                </Grid>
                <Grid item xs={5}>
                  <CustomTextField
                    label='Enter number of labels'
                    variant='outlined'
                    fullWidth={true}
                    value={this.state.numberOfTargetFeatures}
                    onChange={(event, value) => this.handleRangeTarget(value)}
                    error={this.state.targetRangeError}
                    helperText={this.state.targetRangeError && "Please enter a valid range."}
                    // InputLabelProps={{ shrink: true }}
                    placeholder="e.g. 10, 5-10, >5, <=5"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Box display="flex" alignItems="center">
                    <FormControl>
                      <FormLabel sx={{
                        color: theme => theme.palette.text.primary, '&.Mui-focused': {
                          color: theme => theme.palette.text.primary, // Keep the color the same even when focused
                        }
                      }} id="demo-radio-buttons-group-label">Missing values:</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={this.state.missingValuesSpec}
                        row
                        onChange={(event) => { this.setState({ missingValuesSpec: event.target.value }) }}
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="both" control={<CustomRadio />} label="both" />
                        <FormControlLabel value="withoutMissing" control={<CustomRadio />} label="without missing" />
                        <FormControlLabel value="withMissing" control={<CustomRadio />} label="with missing" />

                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={5} lg={3} sx={{ m: 2, mb: 3 }}>
                  <Button fullWidth={true} color='secondary' variant='contained' disabled={this.state.targetRangeError || this.state.descriptiveRangeError || disableNewMapping(this.state.mappings)} onClick={() => this.handleSubmitClick()} >
                    <Typography variant='button' > Filter </Typography>
                  </Button>
                </Grid>

              </Grid>
            </CustomCard>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <br /> <br />
          </Grid>
          {this.state.scatterPlotData !== undefined ? <Grid item xs={12} md={10} xl={8} >
            <CustomCard >
              <Grid container>
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item xs={12}>
                  <CustomAutocomplete
                    multiple={true}
                    options={metaFeaturesMLC}
                    value={this.state.selectedMetaFeatures}
                    renderInput={(params) => <TextField {...params} required variant='outlined' label={"Select meta feature"} color='secondary' />}
                    onChange={(event, value) => { this.setState({ selectedMetaFeatures: value }, () => { this.populateMetaFeaturesData() }) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Plot
                    data={this.state.scatterPlotData}
                    config={{ displayModeBar: false }}
                    useResizeHandler={true}
                    layout={{
                      autosize: true,
                      height: 600,
                      margin: {
                        b: 180
                      },
                      paper_bgcolor: 'rgba(0,0,0,0)', // Dark background for the overall plot area
                      plot_bgcolor: 'rgba(0,0,0,0)',  // Same dark color for the plotting area
                      font: {
                        color: theme.palette.text.primary  // Light color for text for contrast
                      },
                      xaxis: {
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
                    style={{ width: "100%" }}
                  />
                  <br /><br />
                </Grid>
              </Grid>
            </CustomCard>

          </Grid> :
            <Grid container>
              <Grid item xs={12}>
              <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                    <CustomCircularProgress /><br/>
                    <Typography sx={{ color: theme.palette.text.primary }}>Loading meta-features...</Typography>
                  </Box>
                </div>
              </Grid>
            </Grid>
          }
          <Grid item xs={12} md={10} xl={8}>
            {this.state.datasets.length > 0 ? <DatasetsTable datasets={this.state.datasets} /> : <Grid container>
              <Grid item xs={12}>
                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                    <CustomCircularProgress /> <br/>
                    <Typography sx={{ color: theme.palette.text.primary }}>Loading datasets...</Typography>
                  </Box>
                </div>
              </Grid>
            </Grid>}

          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <br /> <br /> <br />
          </Grid>
        </BackgroundGrid >
      </React.Fragment >
    )
  }
}
export default DatasetsPage;