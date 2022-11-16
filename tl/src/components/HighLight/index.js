import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


export default function HighLight({report}) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <Card>
            <CardContent>
              <Typography>Số ca mắc</Typography>
              <Typography>3000</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card>
            <CardContent>
              <Typography component="p" variant="body2">
                Số ca khỏi
              </Typography>
              <Typography component="span" variant="body2">
                3000
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card>
            <CardContent>
              <Typography component="p" variant="body2">
                Số ca tử vong
              </Typography>
              <Typography component="span" variant="body2">
                3000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
