import React from 'react'
import '../css/ParkCard.css'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Tooltip, IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

export default function ParkCard({parkInfo, handleSaveParks, handleUnsavePark, page, parkIsSaved}) {
    return (
        <Grid
        item
        container
        justifyContent="center"
        alignItems="center" 
        xs={12} sm={12} md={6}>
            <Card className="card" elevation={0}>
                <CardMedia
                image={parkInfo.images[0].url}
                />
                <CardContent align="left">
                     <Typography variant="h5" component="h3" gutterBottom>
                     {parkInfo.fullName}
                    </Typography>
                    <Typography variant="caption" component="p">
                        {parkInfo.description.slice(0, 200).concat('...')}
                    </Typography>

                </CardContent> 
                <CardActions>
                    { parkIsSaved === undefined ?
                     <Tooltip title="Save Park" arrow>
                        <IconButton color="primary"
                        onClick={() => handleSaveParks(parkInfo)}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="Save Movie" arrow>
                    <IconButton color="secondary"
                    onClick={() => handleUnsavePark(parkInfo)}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    </Tooltip>
                    }


                    {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleParks(parkInfo)}
                    >
                        {page === "/saved" ? "Remove Park" : "Save Park"}
                    </Button> */}
                </CardActions>
            </Card>
        </Grid>
    )
}
