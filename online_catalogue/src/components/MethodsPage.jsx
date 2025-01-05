import React from 'react';
import { Methods_dict } from './dataOptions'
import { BackgroundGrid, MethodPaper } from './theme'
import { Grid, Typography, Button, Card, CardActions, CardContent, CardHeader, Box } from '@mui/material';
import { Link, Person } from '@mui/icons-material';

class MethodsPage extends React.Component {

  render() {
    const { theme } = this.props; // Access the theme
    return (
      <React.Fragment>
        <BackgroundGrid container justifyContent="center" alignItems="center" spacing={2} >
          <Grid item xs={12}>
            <br /><br /><br /><br /><br /><br />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Grid container alignItems="center" justifyContent="center" spacing={3}>
              {Methods_dict.map(method => (
                <Grid item xs={11} md={4}>
                  <Card sx={{ backgroundColor: theme.palette.primary.light, }}>
                    <CardHeader title={method.Abbreviation} sx={{ color: theme.palette.secondary.main, backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09))' }} />
                    <CardContent sx={{ minHeight: '139px' }}>
                      <Typography variant='body1'>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                          Method name: {method.name}
                        </Box></Typography>
                      <br />
                      <Typography variant="body1">
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                          Authors: {method.authors}
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button size="small"  target="_blank" rel="noopener noreferrer" 
                        sx={{ color: theme.palette.text.primary, backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07))', padding: '10px', margin: '7px' }}
                        href={method.paperLink}>
                        <Link></Link>&nbsp;Link to Paper</Button>
                    </CardActions>
                  </Card>

                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <br /><br /><br /><br />
          </Grid>

        </BackgroundGrid>


      </React.Fragment>
    )
  }
}

export default MethodsPage;