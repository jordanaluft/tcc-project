import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core/';

function Progress() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <CircularProgress />
    </Grid>
  );
}

export default Progress;
