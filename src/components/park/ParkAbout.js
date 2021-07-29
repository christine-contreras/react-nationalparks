import React from 'react'
import { renderPhoneNumber } from '../../renderPhoneNumber'
import { Grid, Divider, Typography, List, ListItem, Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

export default function ParkAbout({info, url, contactInfo, image}) {

    const imageStyle = {
        width: "100%",
        height: "55%",
        position: "absolute",
        left: 0,
        bottom: 0,
        background: `url(${image.url}) no-repeat center`,
        backgroundSize: 'cover',
        zIndex: -1
      }

    return (
        <Grid item
        xs={12} sm={12} md={5}
        className="details-about">
            <Divider className="background-3" />

            <div>
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
                
                <ListItem><span className="strong">Tel:</span>&nbsp; {renderPhoneNumber(contactInfo.phoneNumbers[0].phoneNumber)}</ListItem>

                : null
                }
                {contactInfo.emailAddresses ?
                
                <ListItem><span className="strong">Email:</span>&nbsp; {contactInfo.emailAddresses[0].emailAddress}</ListItem>
                
                : null
                }

            </List>

            <div className="padding-top">
                <Button
                href={url}
                target="_blank"
                variant="contained"
                size="large"
                color="primary"
                endIcon={<ArrowForwardIosIcon />}>
                    View Park Website
                </Button>
            </div>
            </div>
            
            <div style={imageStyle} className="image-hidden-xs"></div>
        </Grid>
    )
}
