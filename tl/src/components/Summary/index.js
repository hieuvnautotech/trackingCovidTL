import React from 'react'
import Grid from "@material-ui/core/Grid";
import LineChart from '../Charts/LineCharts'
import HighMaps from "../Charts/HighMap";
import { useState, useEffect } from "react";
import { getMapDataByCountryId } from "../apis";


export default function Summary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
    if (selectedCountryId) {
      import(
        `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}}-all.geo.json`
      ).then((res) => {
        setMapData(res);
      });
    }
  }, [selectedCountryId]);
  return (
    <div style={{ height: "500px", marginTop: 10 }}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData} />
        </Grid>
      </Grid>
    </div>
  );
}
