import React from 'react';
import { AppBar, Grid, Typography } from '@mui/material';

class Footer extends React.Component {

        render() {
                return (
                        <React.Fragment>
                                <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 100 }}>
                                        <AppBar position="static" sx={{ bgcolor: 'primary.light' }}>
                                                <Grid
                                                        container
                                                        direction="column"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        style={{ minHeight: 50 }} // Set a minimum height for the footer
                                                >
                                                        <Typography variant="body1" component="div">
                                                                Copyright © Jožef Stefan Institute 2023
                                                        </Typography>
                                                </Grid>
                                        </AppBar>
                                </div>
                        </React.Fragment>
                )
        }
}

export default Footer;