import React from 'react';
import { Grid, Typography } from '@mui/material';
import { BackgroundGrid } from './theme';

const PageNotFound = ({theme}) => {
  return (
    <BackgroundGrid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item style={{
        textAlign: 'center',
        alignItems: 'center',
        color: theme.palette.text.primary
      }}>
        <Typography variant="h2">
          404 - Not Found
        </Typography>
        <Typography variant="h6" >
          The page you're looking for doesn't exist.
        </Typography>
      </Grid>
    </BackgroundGrid>
  );
};

export default PageNotFound;