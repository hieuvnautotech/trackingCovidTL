import React from 'react'
import {Card, Grid, Typography, CardContent} from '@material-ui/core'
import HighlightCard from './HighlightCard'
export default function Highlight({report}) {
  const data = report && report.length? report[report.length -1] : []

  const summary = [
    {
      title: 'số ca nhiễm',
      count: data.Confirmed,
      type: 'confirmed',
    },
    {
      title: 'số ca khỏi',
      count: data.Recovered,
      type: 'confirmed',
    },
    {
      title: 'số ca tử vong',
      count: data.Deaths,
      type: 'death',
    },
  ]

  return (
    // <div>highlight</div>
    <Grid container spacing={3}>
      {summary.map(item =>(
        <Grid item sm={4} xs={12}>
          <HighlightCard title={item.title} count={item.count} type={item.type}/>

        </Grid>
      
      ))
      }
        

    </Grid>
  )
}
