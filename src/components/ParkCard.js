import React from 'react'
import '../css/ParkCard.css'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Tooltip, IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'


const ParkCard = ({parkInfo, handleSaveParks, handleUnsavePark, handleSelectPark, history, parkIsSaved}) => {

    const viewParkButtonClick = () => {
        handleSelectPark(parkInfo)
        history.push('/park-details/overview')
    }

    return (
        <Grid
        item
        container
        justifyContent="center"
        alignItems="stretch"
        xs={12} sm={12} md={6}>
            <Card className="card" elevation={0}>
                <CardMedia
                image={parkInfo.images[0].url}
                />

                <CardContent align="left">
                    <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                    {parkInfo.fullName}
                    </Typography>
                    <Typography variant="caption" component="p" color="secondary">
                        {parkInfo.description.slice(0, 200).concat('...')}
                    </Typography>

                </CardContent> 
                <CardActions className="card-actions">
                    { parkIsSaved === undefined ?
                    <Tooltip title="Save Park" arrow>
                        <IconButton color="primary"
                        onClick={() => handleSaveParks(parkInfo)}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="Remove Park" arrow>
                    <IconButton color="primary"
                    onClick={() => handleUnsavePark(parkInfo)}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    </Tooltip>
                    }

                    <Button
                    variant="text"
                    size="large"
                    color="primary"
                    endIcon={<TrendingFlatIcon />}
                    onClick={viewParkButtonClick}
                    >
                        View Park 
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    )
}

export default ParkCard