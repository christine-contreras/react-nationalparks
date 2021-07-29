import React from 'react'
import { Grid, Typography } from '@material-ui/core'


export default function ParkFees({image, fees}) {

    const imageStyle = {
        width: "100%",
        height: "55%",
        minHeight: 500,
        position: "relative",
        left: 0,
        top: 0,
        background: image.url ? `url(${image.url}) no-repeat center` : '#A38B74',
        backgroundSize: 'cover',
        zIndex: -1,
        display: 'flex',
        alignItems: 'flex-end'
      }

    return (
        <Grid item container style={imageStyle}>
            <Grid item  className="details-fees text-light">
                <Typography variant="h6" component="h3" gutterBottom>
                    Entrance Fees
                </Typography>

                <Typography gutterBottom>
                    <span className="strong">Cost: ${fees[0].cost}</span>
                </Typography>

                <Typography>
                    {fees[0].description}
                </Typography>
            </Grid>
        </Grid>
    )
}
