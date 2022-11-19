import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HighlightCard from './HighLightCard'

export default function HighLight({ report }) {
  
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "số ca khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "số ca tử vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12} key={item.type }>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
