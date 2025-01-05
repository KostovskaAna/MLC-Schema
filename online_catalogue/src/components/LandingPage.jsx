import React from 'react';
import logo from '../img/logo_text_large.svg';
import dataset_logo from '../img/dataset.svg';
import algorithm_logo from '../img/algorithm.svg';
import metafeature_logo from '../img/metafeature.svg';
import experiment_logo from '../img/experiment.svg';
import ana_img from '../img/akostovska.png';
import jasmin_img from '../img/jbogatiovski.png';
import pance_img from '../img/ppanov.png';
import saso_img from '../img/sdzeroski.png';
import dragi_img from '../img/dkocev.png';
import compare_img from '../img/compare_white.svg'
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material'
import { LinkLandingBrowse } from './theme.js';


class LandingPage extends React.Component {

  handleLinkClick = (event, newValue) => {
    event.stopPropagation();
    console.log("new", newValue);
    this.props.onLinkClick(newValue);
  };

  render() {
    const { theme } = this.props; // Access the theme
    return (
      <React.Fragment>
        <Grid container spacing={0} style={{ height: '95vh', backgroundColor: theme.palette.primary.dark }} alignItems="center" justifyContent="center">
          <Grid item xs={12} style={{ height: '15%' }}>
          </Grid>
          <Grid item xs={12} style={{
            // height: '80%',
            textAlign: 'center',
            alignItems: 'center',
          }}>
            <img src={logo} alt="" style={{ width: '40vw' }}></img>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} style={{
            textAlign: 'center',
            alignItems: 'center',
            // backgroundColor: '#246fb5',
            // color: 'white'
          }}>
            <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ bgcolor: theme.palette.lightgray.main }}>
              <Grid item xs={12} md={8} xl={8}>
                <br /> <br />
                <h1>BenchMLC reposository offers access to a wide range of
                  <a href='https://www.go-fair.org/fair-principles/' target="_blank" rel="noopener noreferrer" style={{
                    textDecoration: 'none',
                    color: theme.palette.blue.light
                  }}> FAIR</a>
                  , multi-label classification benchmarking data.
                </h1>
                <br /> <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{}}>
          <Grid item xs={12} style={{
            textAlign: 'center',
            // alignItems: 'center',
            // backgroundColor: '#f5f5f5'
          }}>
            <br /><br />
            {/* <Typography style={{ fontSize: 35 }}><strong>Access to: </strong></Typography> */}
            <br />
            <Grid container spacing={0} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={10} xl={8}>
                <Grid container spacing={0} alignItems="center" justifyContent="center">
                  <Grid item xs={8} md={3}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={dataset_logo} alt="" style={{ maxWidth: '100%', padding: '10px' }}></img>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography >
                            <a style={{ fontSize: 30, textDecoration: 'none', fontWeight: 'bold', color: theme.palette.primary.light }} onClick={(e) => this.handleLinkClick(e, 'datasets')} href="#/Datasets">
                              89 <br />datasets
                            </a>
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={3}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={experiment_logo} alt="" style={{ maxWidth: '100%', padding: '10px' }}></img>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography >
                            <a style={{ fontSize: 30, textDecoration: 'none', fontWeight: 'bold', color: theme.palette.primary.light }} onClick={(e) => this.handleLinkClick(e, 'experiments')} href="#/Experiments">
                              1092 <br />experiments
                            </a>
                            {/* <LinkLandingBrowse to="#/Experiments">1092 <br />experiments</LinkLandingBrowse> */}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={3}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={algorithm_logo} alt="" style={{ maxWidth: '100%', padding: '10px' }}></img>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography >
                            <a style={{ fontSize: 30, textDecoration: 'none', fontWeight: 'bold', color: theme.palette.primary.light }} onClick={(e) => this.handleLinkClick(e, 'methods')} href="#/Methods">
                              26 <br />methods
                            </a>
                            {/* <LinkLandingBrowse to="#/Methods">26 <br />methods</LinkLandingBrowse> */}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={3}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={metafeature_logo} alt="" style={{ maxWidth: '100%', padding: '10px' }}></img>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography >
                            <a style={{ fontSize: 30, textDecoration: 'none', fontWeight: 'bold', color: theme.palette.primary.light }} onClick={(e) => this.handleLinkClick(e, 'metafeatures')} href="#/Metafeatures">
                              62 <br />metafeatures
                            </a>
                            {/* <LinkLandingBrowse to="#/Metafeatures">62 <br />metafeatures</LinkLandingBrowse> */}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
                <br /><br />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid container spacing={0} sx={{ backgroundColor: theme.palette.primary.light }}>
          <Grid item xs={12} style={{
            textAlign: 'center',
            alignItems: 'center',
            // backgroundColor: '#212121',
            // color: 'white'
          }}>
            <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ color: theme.palette.text.primary }}>
              <Grid item xs={12} md={2}> </Grid>
              <Grid item xs={12} md={8}>
                <h1>Analysis of experimental data</h1>
              </Grid>
              <Grid item xs={12} md={2}> </Grid>
              <Grid item xs={12} md={5}> </Grid>
              <Grid item xs={8} md={2} style={{ alignItems: 'center' }}>
                <img src={compare_img} alt="" style={{ width: '80%', padding: '10px' }}></img>
              </Grid>
              <Grid item xs={12} md={5}> </Grid>
              <Grid item xs={12} md={2}>
                <Button variant="contained" sx={{ backgroundColor: theme.palette.blue.light, '&:hover': { backgroundColor: theme.palette.blue.main } }}>
                  {/* <Link to='/Analyse' style={{ textDecoration: 'none', color: theme.palette.text.primary }}>Analyse</Link> */}
                  <a style={{ fontSize: 15, textDecoration: 'none', fontWeight: 'bold', color: theme.palette.text.primary }} onClick={(e) => this.handleLinkClick(e, 'analyse')} href="#/Analyse">
                    Analyse
                  </a>
                </Button>
                <br /> <br /> <br />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{}}>
          <Grid item xs={12} style={{
            textAlign: 'center',
            alignItems: 'center',
            // backgroundColor: '#BDBDBD'
          }}>
            <br /><br />
            <Typography style={{ fontSize: 35 }}><strong>Meet the team </strong></Typography>
            <br />
            <Grid container spacing={0} alignItems="center" justifyContent="center">
              <Grid item xs={12} xl={8}>
                <Grid container spacing={0} alignItems="center" justifyContent="center">
                  <Grid item xs={8} md={2}>
                    <div className='landing-div'>
                      <Grid container spacing={0} style={{}}>
                        <Grid item xs={12}>
                          <img src={ana_img} alt="" style={{ width: '100%' }}></img>
                        </Grid>
                        <Grid container style={{ minHeight: 156 }} alignItems="center" justifyContent="center">
                          <Grid item xs={12}>
                            <Typography fontSize={20}><strong>Ana Kostovska</strong> </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}>Jožef Stefan Institute </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}><a href='mailto:ana.kostovska@ijs.si'
                              style={{ textDecoration: 'none', color: theme.palette.blue.light, fontWeight: 'bold' }}>ana.kostovska@ijs.si</a></Typography>
                          </Grid>
                        </Grid>


                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={2}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={dragi_img} alt="" style={{ width: '100%' }}></img>
                        </Grid>
                        <Grid container style={{ minHeight: 156, alignItems: 'center' }}>
                          <Grid item xs={12}>
                            <Typography fontSize={20}><strong>Dragi  Kocev</strong> </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}>Jožef Stefan Institute </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}><a href='mailto:dragi.kocev@ijs.si'
                              style={{ textDecoration: 'none', color: theme.palette.blue.light, fontWeight: 'bold' }}>dragi.kocev@ijs.si</a></Typography>
                          </Grid>
                        </Grid>

                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={2}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={pance_img} alt="" style={{ width: '100%' }}></img>
                        </Grid>
                        <Grid container style={{ minHeight: 156, alignItems: 'center' }}>
                          <Grid item xs={12}>
                            <Typography fontSize={20}><strong>Panče Panov</strong> </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}>Jožef Stefan Institute </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}><a href='mailto:pance.panov@ijs.si'
                              style={{ textDecoration: 'none', color: theme.palette.blue.light, fontWeight: 'bold' }}>pance.panov@ijs.si</a></Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={2}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={jasmin_img} alt="" style={{ width: '100%' }}></img>
                        </Grid>
                        <Grid container style={{ minHeight: 156, alignItems: 'center' }}>
                          <Grid item xs={12}>
                            <Typography fontSize={20}><strong>Jasmin  <br /> Bogatinovski</strong> </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}>Technical University Berlin</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}><a href='mailto:jasmin.bogatinovski@tu-berlin.de'
                              style={{ textDecoration: 'none', color: theme.palette.blue.light, fontWeight: 'bold' }}>jasmin.bogatinovski@tu-berlin.de</a></Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={8} md={2}>
                    <div className='landing-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <img src={saso_img} alt="" style={{ width: '100%' }}></img>
                        </Grid>
                        <Grid container style={{ minHeight: 156 }} alignItems="center" justifyContent="center">
                          <Grid item xs={12}>
                            <Typography fontSize={20}><strong>Sašo Džeroski</strong> </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}>Jožef Stefan Institute </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography fontSize={16}><a href='mailto:saso.dzeroski@ijs.si'
                              style={{ textDecoration: 'none', color: theme.palette.blue.light, fontWeight: 'bold' }}>saso.dzeroski@ijs.si</a></Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
                <br /><br />
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={12} style={{
            textAlign: 'center',
            alignItems: 'center',
            // backgroundColor: '#246fb5',
            // color: 'white'
          }}>
            <Grid container spacing={0} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={8} xl={8}>
                <br /> <br />

                <br /> <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>




      </React.Fragment >
    )
  }
}

export default LandingPage;