import React from 'react';
import Grid from 'material-ui/Grid';

const Main = props =>
  (<Grid container justify="center" align="center">
    <Grid item xs={6} sm={4}>
      img here
    </Grid>
    <Grid item xs={6} sm>
      text here
    </Grid>
  </Grid>);
