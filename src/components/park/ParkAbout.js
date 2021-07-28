import React from 'react'
import { Grid, Divider, Typography, List, ListItem } from '@material-ui/core'
import { SignalCellularNullRounded } from '@material-ui/icons'

export default function ParkAbout({info, url, contactInfo, image}) {
    return (
        <Grid item className="details-about">
            <Divider className="background-3" />

            <Typography variant="h3" component="h2" color="secondary" className="padding-top-lg">
                About Park
            </Typography>
            <Typography variant="h4" component="p">
             <span className="subtitle">Summary</span>
            </Typography>
            <Typography className="color-3 padding-top">
                {info}
            </Typography>

            <List className="hours color-1">
                {contactInfo.phoneNumbers ?
                
                <ListItem>Tel: {contactInfo.phoneNumbers[0].phoneNumber}</ListItem>

                : null
                }
                {contactInfo.emailAddresses ?
                
                <ListItem>Email: {contactInfo.emailAddresses[0].emailAddress}</ListItem>
                
                : null
                }

            </List>
        </Grid>
    )
}
