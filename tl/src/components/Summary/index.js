import React from 'react'
import Grid from "@material-ui/core/Grid";
import LineChart from '../Charts/LineCharts'

export default function Summary() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={ []} />
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
      </Grid>
    </div>
  );
}
