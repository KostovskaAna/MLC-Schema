import React from 'react';
import http from 'stream-http';
import Plot from 'react-plotly.js';
import { evaluationMeasureListTrainTest, virtuosoReqURL, Methods_v2 } from './dataOptions.js'
import { getDatasetsQuery, getPlotQueryTrainTest } from './createQueries.js';
import { processDataBoxViolinPlot, processDataRadarPlot, getList, processDataHeatmapPlot, processScatterMeasuresData, processScatterMethodsData } from './utils.js'
import { Box, AccordionSummary, AccordionDetails, Typography, TextField, Grid, Accordion } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

import { CustomAutocomplete, CustomCircularProgress, CustomCard, BackgroundGrid, CustomAccordion } from './theme.js'




class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datasetList: [],
            boxPlotData: undefined,
            violinPlotData: undefined,
            heatmapPlotData: undefined,
            radarPlotData: undefined,
            scatterPlotDataMethods: undefined,
            scatterPlotDataMeasures: undefined,
            selectedEvaluationMeasure: "accuracy example-based",
            selectedDataset: "ABPM",
            selectedEvaluationMeasuresDataset: ['accuracy example-based', 'AUPRC'],
            selectedMethods: ['Ada300', 'BPNN', 'BR'],


        };
    }

    componentDidMount() {
        this.getDatasets()

    }

    setUpQuery = (selectedMeasure, typeOfPlot) => {
        var orderString = "";
        var filterDatasetsString = "";
        var selectedEvaluationMeasures = "";


        if (typeOfPlot === "heatmap") {
            orderString = "ucase(?datasetLabel) ?Algorithm"
            selectedEvaluationMeasures = `Filter(?evaluationMeasureClassLabel in ("${selectedMeasure}")) .`;
        }
        else if (typeOfPlot === "radar") {
            orderString = '?evaluationMeasureClassLabel ?Algorithm';
            filterDatasetsString = `Filter(?datasetLabel in ("${this.state.selectedDataset}"))`;
            if (selectedMeasure.length > 0)
                selectedEvaluationMeasures = `Filter(?evaluationMeasureClassLabel in (${selectedMeasure.map(measure => `"${measure}"`).join(', ')})) .`;
        }
        else {
            orderString = '?Algorithm ucase(?datasetLabel)'
            selectedEvaluationMeasures = `Filter(?evaluationMeasureClassLabel in ("${selectedMeasure}")) .`;
            if (typeOfPlot === "rankingPt2") {
                orderString = 'ucase(?datasetLabel) ?Algorithm'
            }
        }

        var query = getPlotQueryTrainTest(selectedEvaluationMeasures, filterDatasetsString, "", orderString)
        this.getData(query, typeOfPlot)
    }

    setUpQueryScatter(typeOfPlot) {
        var orderString = "";
        var filterDatasetsString = "";
        var selectedEvaluationMeasures = "";
        var selectedMethods = "";

        if (typeOfPlot === "scatterMeasures") {
            filterDatasetsString = `Filter(?datasetLabel in ("${this.state.selectedDataset}"))`;
            orderString = "?evaluationMeasureClassLabel ?Algorithm"
            if (this.state.selectedEvaluationMeasuresDataset.length > 0)
                selectedEvaluationMeasures = `Filter(?evaluationMeasureClassLabel in (${this.state.selectedEvaluationMeasuresDataset.map(measure => `"${measure}"`).join(', ')})) .`;
        }
        else if (typeOfPlot === "scatterMethods") {
            filterDatasetsString = `Filter(?datasetLabel in ("${this.state.selectedDataset}"))`;
            orderString = "?Algorithm ?evaluationMeasureClassLabel"
            if (this.state.selectedMethods.length > 0)
                selectedMethods = `Filter(?Algorithm in (${this.state.selectedMethods.map(method => `"${method}"`).join(', ')})) .`;
        }
        var query = getPlotQueryTrainTest(selectedEvaluationMeasures, filterDatasetsString, selectedMethods, orderString)
        this.getData(query, typeOfPlot)
    }



    getData = (query, typeOfPlot) => {
        const options = {
            path: virtuosoReqURL + encodeURIComponent(query),
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        };

        http.get(options, (resp) => {
            let data = '';
            resp.on('data', (chunk) => data += chunk);
            resp.on('end', () => {
                data = JSON.parse(data)
                switch (typeOfPlot) {
                    case 'box':
                        this.setState({
                            boxPlotData: processDataBoxViolinPlot(data, 'box'),
                        });
                        break;
                    case 'violin':
                        this.setState({
                            violinPlotData: processDataBoxViolinPlot(data, 'violin')
                        })
                        break;
                    case 'radar':
                        this.setState({
                            radarPlotData: processDataRadarPlot(data)
                        })
                        break;
                    case 'heatmap':
                        this.setState({
                            heatmapPlotData: processDataHeatmapPlot(data, this.state.selectedEvaluationMeasure)
                        })
                        break
                    case 'scatterMeasures':
                        this.setState({
                            scatterPlotDataMeasures: processScatterMeasuresData(data, this.state.scatterMeasuresSelectedDataset, this.state.scatterMeasuresSelectedMeasures)
                        })
                        break
                    case 'scatterMethods':
                        this.setState({
                            scatterPlotDataMethods: processScatterMethodsData(data, this.state.scatterMethodsSelectedDataset, this.state.selectedMethods)
                        })
                        break
                    default:
                        console.log("default")
                }
            });
        })
            .on("error", (err) => {
                console.log(err)
            });
    }

    updateMethodComparisonPlots(selectedEvaluationMeasures) {
        this.setUpQuery(selectedEvaluationMeasures, 'box');
        this.setUpQuery(selectedEvaluationMeasures, 'violin');
        this.setUpQuery(selectedEvaluationMeasures, 'heatmap');
    }

    getDatasets = () => {
        getList(virtuosoReqURL, getDatasetsQuery()).then((value) => {
            this.setState({ datasetList: value }, () => {
                this.setUpQuery(this.state.selectedEvaluationMeasure, 'box');
                this.setUpQuery(this.state.selectedEvaluationMeasure, 'violin');
                this.setUpQuery(this.state.selectedEvaluationMeasure, 'heatmap')
                this.setUpQuery(this.state.selectedEvaluationMeasuresDataset, 'radar');
                this.setUpQueryScatter('scatterMeasures')
                this.setUpQueryScatter('scatterMethods')
            })
        });
    }

    render() {
        const { theme } = this.props; // Access the theme
        const plotLayout = {
            autosize: true,
            height: 600,
            margin: {
                // l: 0,
                r: 0,
                b: 100,
                t: 40
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
        }

        const scatterplotLayout = {
            autosize: true,
            height: 600,
            margin: {
                l: 40,
                r: 40,
                b: 100,
                t: 40
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
        }

        const heatmapLayout = {
            xaxis: { title: 'Methods' },
            yaxis: { title: 'Ranks' },
            autosize: true,
            height: 600,
            margin: {
                l: 50,
                r: 0,
                b: 100,
                t: 40
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
        };
        return (
            <React.Fragment>
                <BackgroundGrid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} md={10} xl={8}>
                        <br /> <br /> <br /> <br /> <br /> <br />
                    </Grid>
                    <Grid item xs={12} md={10} xl={8}>
                        <Typography style={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                            <InfoIcon style={{ marginRight: '10px' }} />
                            Explore and interactively analyse the MLC experiment data on the train / test splits.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={10} xl={8}>
                        {/*  box plot */}
                        <CustomAccordion defaultExpanded={true} TransitionProps={{ unmountOnExit: true }}>
                            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>Comparative Analysis of Method Performance Across All Datasets by Evaluation Metrics</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={1} alignItems="center" justifyContent="center">
                                    <Grid item xs={12} md={10} xl={8}>
                                        <Grid container justifyContent="center" alignItems="center" spacing={1}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                            <Grid item xs={10} md={8}>
                                                <CustomAutocomplete
                                                    value={this.state.selectedEvaluationMeasure}
                                                    options={evaluationMeasureListTrainTest}
                                                    disableClearable
                                                    renderInput={(params) => <TextField {...params} variant='outlined' label={"Evaluation measure"} />}
                                                    onChange={(event, value) => {
                                                        this.setState({ selectedEvaluationMeasure: value, boxPlotData: undefined, violinPlotData: undefined, heatmapPlotData: undefined },
                                                            () => { this.updateMethodComparisonPlots(this.state.selectedEvaluationMeasure) });
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} style={{ minWidth: 600, overflowX: 'auto' }}>
                                                {this.state.boxPlotData !== undefined ?
                                                    <div>
                                                        <br /><br />
                                                        <Typography>
                                                            Boxplots showing the performance of 26 MLC methods on test data across the different datasets, as evaluated by the <spam style={{ color: theme.palette.secondary.main }}>selected measure</spam>. Each boxplot illustrates the central tendency and dispersion, highlighting the median and the interquartile range.
                                                        </Typography>
                                                        <Plot data={this.state.boxPlotData} useResizeHandler={true} layout={plotLayout} style={{ width: "100%" }} />

                                                    </div>
                                                    :
                                                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                                                            <CustomCircularProgress /><br />
                                                            <Typography sx={{ color: theme.palette.text.primary }}>Loading boxplot data...</Typography>
                                                            <br />
                                                        </Box>
                                                    </div>
                                                }
                                            </Grid>
                                            <Grid item xs={12} style={{ minWidth: 600, overflowX: 'auto' }}>
                                                {this.state.violinPlotData !== undefined ?
                                                    <div>
                                                        <Typography>Violin plots displaying the performance of 26 MLC methods on test data across different datasets, as evaluated by the <spam style={{ color: theme.palette.secondary.main }}>selected measure</spam>. Each violin plot reveals the distribution density and range of performance.</Typography>
                                                        <Plot data={this.state.violinPlotData} useResizeHandler={true} layout={plotLayout} style={{ width: "100%" }} />

                                                    </div>
                                                    :
                                                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                                                            <CustomCircularProgress /><br />
                                                            <Typography sx={{ color: theme.palette.text.primary }}>Loading violin plot data...</Typography>
                                                            <br />
                                                        </Box>
                                                    </div>
                                                }
                                            </Grid>
                                            <Grid item xs={12} style={{ minWidth: 600, overflowX: 'auto' }}>
                                                {this.state.heatmapPlotData !== undefined ?
                                                    <div>
                                                        <Typography>The heatmap illustrates the performance rankings of 26 MLC methods on test dataacross different datasets, as evaluated by the <spam style={{ color: theme.palette.secondary.main }}>selected measure</spam>. The x-axis lists methods, the y-axis shows ranks, and cell colors indicate the absolute frequency of each method achieving the rank. Color shades shift from blue to red, with red denoting higher frequencies, visually representing each method's performance and ranking consistency.</Typography>
                                                        <Plot data={this.state.heatmapPlotData} useResizeHandler={true} layout={heatmapLayout} style={{ width: "100%" }} />

                                                    </div>
                                                    :
                                                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                                                            <CustomCircularProgress /><br />
                                                            <Typography sx={{ color: theme.palette.text.primary }}>Loading heatmap data...</Typography>
                                                            <br />
                                                        </Box>
                                                    </div>
                                                }
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </CustomAccordion>
                    </Grid>



                    <Grid item xs={12} md={10} xl={8}>
                        <CustomAccordion defaultExpanded={true} TransitionProps={{ unmountOnExit: true }}>
                            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>Comparative Analysis of Method Performance for a Selected Dataset</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={1} alignItems="center" justifyContent="center">
                                    <Grid item xs={12} md={10} xl={8}>
                                        <Grid container justifyContent="center" alignItems="center" spacing={1}>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>
                                            <Grid item xs={10} md={8}>
                                                <CustomAutocomplete
                                                    value={this.state.selectedDataset}
                                                    options={this.state.datasetList}
                                                    disableClearable
                                                    renderInput={(params) => <TextField {...params} variant='outlined' label={"Dataset"} />}
                                                    onChange={(event, value) => {
                                                        this.setState({ selectedDataset: value, radarPlotData: undefined, scatterPlotDataMethods: undefined, scatterPlotDataMethods: undefined }, () => {
                                                            this.setUpQuery(this.state.selectedEvaluationMeasuresDataset, 'radar');
                                                            this.setUpQueryScatter('scatterMethods');
                                                            this.setUpQueryScatter('scatterMeasures');
                                                        });
                                                    }
                                                    } />
                                            </Grid>


                                            <Grid item xs={12} style={{ minWidth: 600, overflowX: 'auto' }}>
                                                {this.state.radarPlotData !== undefined ?
                                                    <Grid container justifyContent="center" alignItems="center" spacing={1}>
                                                        <Grid item xs={12}>
                                                            <br /><br /><br />
                                                        </Grid>
                                                        <Grid item xs={12} >
                                                            <Typography>Radar chart depicting the performance of 26 MLC methods on test data for a <spam style={{ color: theme.palette.secondary.main }}>selected dataset</spam> evaluated across various <spam style={{ color: theme.palette.secondary.main }}>selected measures</spam>. Each axis represents a different measure, and each method's performance is shown as a line. This chart allows for quick comparison of methods across multiple evaluation criteria.</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <br />
                                                        </Grid>
                                                        <Grid item xs={10} md={8}>
                                                            <CustomAutocomplete
                                                                value={this.state.selectedEvaluationMeasuresDataset}
                                                                options={evaluationMeasureListTrainTest}
                                                                multiple={true}
                                                                disableClearable
                                                                renderInput={(params) => <TextField {...params} variant='outlined' label={"MLC measures"} />}
                                                                onChange={(event, value) => {
                                                                    this.setState({ selectedEvaluationMeasuresDataset: value, radarPlotData: undefined, scatterPlotDataMethods: undefined },
                                                                        () => {
                                                                            this.setUpQuery(this.state.selectedEvaluationMeasuresDataset, 'radar');
                                                                            this.setUpQueryScatter('scatterMeasures');
                                                                        }
                                                                    );
                                                                }
                                                                } />
                                                        </Grid>
                                                        <Plot data={this.state.radarPlotData} useResizeHandler={true} layout={plotLayout} style={{ width: "100%" }} />
                                                    </Grid>
                                                    :
                                                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                                                            <CustomCircularProgress />
                                                            <Typography sx={{ color: theme.palette.text.primary }}>Loading radar plot data...</Typography>
                                                        </Box>
                                                    </div>
                                                }
                                            </Grid>

                                            {/* <Grid item xs={12} >
                                                {this.state.scatterPlotDataMeasures !== undefined ?
                                                    <div>
                                                        <Typography>Radar:</Typography>
                                                        <Plot data={this.state.scatterPlotDataMeasures} useResizeHandler={true} layout={scatterplotLayout} style={{ width: "100%" }} />
                                                    </div>
                                                    :
                                                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                                                            <CustomCircularProgress />
                                                            <Typography sx={{ color: theme.palette.text.primary }}>Loading scatter plot data...</Typography>
                                                        </Box>
                                                    </div>
                                                }
                                            </Grid> */}


                                            <Grid item xs={12} style={{ minWidth: 600, overflowX: 'auto' }}>
                                                {this.state.scatterPlotDataMethods !== undefined ?
                                                    <Grid container justifyContent="center" alignItems="center" spacing={1}>
                                                        <Grid item xs={12}>
                                                            <br /><br /><br />
                                                        </Grid>
                                                        <Grid item xs={12} >
                                                            <Typography>Scatter plot displaying the performance of <spam style={{ color: theme.palette.secondary.main }}>selected MLC methods</spam> on a <spam style={{ color: theme.palette.secondary.main }}>selected dataset</spam>, with each method represented as a distinct trace. The x-axis enumerates all 20 MLC evaluation measures, while the y-axis indicates the performance of the methods for each measure. </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <br />
                                                        </Grid>
                                                        <Grid item xs={10} md={8}>
                                                            <CustomAutocomplete
                                                                value={this.state.selectedMethods}
                                                                options={Methods_v2}
                                                                multiple={true}
                                                                disableClearable
                                                                renderInput={(params) => <TextField {...params} variant='outlined' label={"MLC methods"} />}
                                                                onChange={(event, value) => {
                                                                    this.setState({ selectedMethods: value, scatterPlotDataMethods: undefined },
                                                                        () => {
                                                                            this.setUpQueryScatter('scatterMethods');
                                                                        }
                                                                    );
                                                                }
                                                                } />
                                                        </Grid>
                                                        <Plot data={this.state.scatterPlotDataMethods} useResizeHandler={true} layout={scatterplotLayout} style={{ width: "100%" }} />
                                                    </Grid>
                                                    :
                                                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2, alignItems: 'center' }}>
                                                            <CustomCircularProgress />
                                                            <Typography sx={{ color: theme.palette.text.primary }}>Loading scatter plot data...</Typography>
                                                        </Box>
                                                    </div>
                                                }
                                            </Grid>



                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </CustomAccordion>
                    </Grid>

                    <Grid item xs={12} md={10} xl={7}>
                        <br /> <br /> <br /> <br /> <br /> <br />
                    </Grid>
                </BackgroundGrid>
            </React.Fragment>
        )
    }
}
export default Compare;
