import React from 'react'
import '../css/Details.css'
import {Route } from 'react-router-dom'

import ParkNav from '../components/park/ParkNav'
import ParkInfo from '../components/park/ParkInfo'
import ParkOverview from './ParkOverview'
import ParkCamping from './ParkCamping'

import { Grid, Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'



const ParkDetails = ({history, location, match, park, savedParks, handleUnsavePark, handleSaveParks}) => {
    return (
        <Grid container>
            <Grid item>
                <Button
                size="large"
                variant="text"
                startIcon={<ArrowBackIosIcon/>}
                onClick={history.goBack}>
                    Go Back
                </Button>
            </Grid>

            <Grid item container className="park-details" id="park-details">
                <Grid item className="details-left" xs={12} sm={12} md={3}>
                    <ParkNav
                    state={park.states}
                    name={park.fullName}
                    history={history}
                    page={location.pathname}
                    />

                    <ParkInfo
                    hours={park.operatingHours[0]}
                    address={park.addresses}
                    directionsUrl={park.directionsUrl}
                    />
                </Grid>


                <Route path={`${match.path}/overview`}>
                    <ParkOverview
                    savedParks={savedParks}
                    handleUnsavePark={handleUnsavePark}
                    handleSaveParks={handleSaveParks}
                    park={park}
                        />
                </Route>
                <Route path={`${match.path}/camping`}>
                    <ParkCamping
                    parkcode={park.parkCode} 
                    longitude={park.longitude}
                    latitude={park.latitude}
                    
                    />
                </Route>

                
            </Grid>

        </Grid>
    )
}

export default ParkDetails
