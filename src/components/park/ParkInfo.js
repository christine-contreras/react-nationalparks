import React from 'react'
import { Grid, Typography, Button, List, ListItem } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const ParkInfo = ({hours, address, directionsUrl}) => {

    const validAddress = address.find(a => a.type === "Physical")

    return (
        <Grid item className="details-info background-2 text-light">
            <Typography variant="h6" component="h3" gutterBottom>
                Park Information
            </Typography>

            <Typography variant="subtitle1" component="p" className="padding-top">
                Hours
            </Typography>
            <Typography variant="body2" gutterBottom>
                {hours.description}
            </Typography>
            <List className="hours">
                <ListItem>Monday: {hours.standardHours.monday}</ListItem>
                <ListItem>Tuesday: {hours.standardHours.tuesday}</ListItem>
                <ListItem>Wednesday: {hours.standardHours.wednesday}</ListItem>
                <ListItem>Thursday: {hours.standardHours.thursday}</ListItem>
                <ListItem>Friday: {hours.standardHours.friday}</ListItem>
                <ListItem>Saturday: {hours.standardHours.saturday}</ListItem>
                <ListItem>Sunday: {hours.standardHours.sunday}</ListItem>
            </List>

            <Typography variant="subtitle1" component="p" className="padding-top">
                Location
            </Typography>
            <List className="address">
                <ListItem>{validAddress.line1}</ListItem>
                {validAddress.line2 ? 
                <ListItem>{validAddress.line2}</ListItem>
                : null
                 }
                 {validAddress.line3 ? 
                <ListItem>{validAddress.line3}</ListItem>
                : null
                 }
                <ListItem>{validAddress.city}, {validAddress.stateCode} {validAddress.postalCode}</ListItem>
            </List>

            <div className="padding-top">
            <Button
            href={directionsUrl}
            target="_blank"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}>
                Park Directions
            </Button>
            </div>



        </Grid>
    )
}


export default ParkInfo