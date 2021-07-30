import React from 'react'
import { renderPhoneNumber } from '../../renderPhoneNumber'
import { Grid, Divider, Typography, List, ListItem, Button, Tooltip, IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const ParkAbout = ({info, url, contactInfo, image, parkIsSaved, handleUnsavePark, handleSaveParks, parkInfo}) => {

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

            <Grid container
            alignItems="center"
            justifyContent="space-between">
                <Grid item>
                    <Typography variant="h3" component="h2" color="secondary" className="padding-top-lg">
                    About Park
                    </Typography>
                    <Typography variant="h4" component="p">
                    <span className="subtitle">Summary</span>
                    </Typography>
                </Grid>

                <Grid item>
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
                </Grid>
            </Grid>
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
            
            
            <div style={imageStyle} className="image-hidden-xs"></div>
        </Grid>
    )
}

export default ParkAbout