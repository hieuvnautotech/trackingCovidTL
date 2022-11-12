import React from 'react'
import {Card, Grid, Typography, CardContent} from '@material-ui/core'
export default function Highlight() {
  return (
    // <div>highlight</div>
    <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <Card>
            <CardContent>
              <Typography component="p" variant="body2">Số Ca Mắc</Typography>
              <Typography component="span" variant="body2">3000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
        <Card>
            <CardContent>
              <Typography component="p" variant="body2">Số Ca Khỏi</Typography>
              <Typography component="span" variant="body2">3000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
        <Card>
            <CardContent>
              <Typography component="p" variant="body2">Số Ca Tử Vong</Typography>
              <Typography component="span" variant="body2">3000</Typography>
            </CardContent>
          </Card>
        </Grid>

    </Grid>
  )
}
