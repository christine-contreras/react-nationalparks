import React from 'react'
import { Grid, Typography, Button, List, ListItem } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

export default function CampingInfo({campground}) {
    return (
        <Grid item
            xs={12} sm={12} md={3}
            className="details-camping background-2 text-light">
            <Typography variant="h6" component="h3" gutterBottom>
                Campground Information
            </Typography>

            {
                campground.operatingHours && (
                    <>
                    <Typography variant="subtitle1" component="p" className="padding-top">
                        Hours
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {campground.operatingHours[0].description}
                    </Typography>
                    </>
                )
                
            }

            {
                campground.fees && (
                    campground.fees.map(fee => {
                        return (
                            <div key={fee.title}>
                                <Typography variant="subtitle1" component="p" className="padding-top">
                                {fee.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {fee.description}
                            </Typography>
                            <List className="hours">
                                <ListItem><span class="strong">Cost: ${fee.cost}</span></ListItem>
                            </List>
                            </div>
                        )
                    })
                )
            }




            <Typography variant="subtitle1" component="p" className="padding-top">
                Reservations
            </Typography>
            <Typography variant="body2">
                {campground.reservationInfo}
            </Typography>
            <List className="hours">
                <ListItem>First Come: {campground.numberOfSitesFirstComeFirstServe} Spots</ListItem>
                <ListItem>Reserved: {campground.numberOfSitesReservable} Spots</ListItem>
            </List>

            {campground.reservationUrl && (
                <div className="padding-top">
                <Button
                href={campground.reservationUrl}
                target="_blank"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIosIcon />}>
                    Reserve Spot
                </Button>
                </div>
            )
                
            }



            <Typography variant="subtitle1" component="p" className="padding-top">
                Directions
            </Typography>
            <Typography variant="body2" gutterBottom>
                {campground.directionsOverview}
            </Typography>

            <div className="padding-top">
            <Button
            href={campground.directionsUrl}
            target="_blank"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}>
                Directions
            </Button>
            </div>


        </Grid>
    )
}
