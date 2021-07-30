import React, { Component } from 'react'
import '../css/Details.css'
import {Route } from 'react-router-dom'

import ParkNav from '../components/park/ParkNav'
import ParkInfo from '../components/park/ParkInfo'
import ParkOverview from './ParkOverview'
import ParkCamping from './ParkCamping'

import { Grid, Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

export class ParkDetails extends Component {
    render() {
        return (
            <Grid container>
                <Grid item>
                    <Button
                    size="large"
                    variant="text"
                    startIcon={<ArrowBackIosIcon/>}
                    onClick={this.props.history.goBack}>
                        Go Back
                    </Button>
                </Grid>

                <Grid item container className="park-details">
                    <Grid item className="details-left" xs={12} sm={12} md={3}>
                        <ParkNav
                        state={this.props.park.states}
                        name={this.props.park.fullName}
                        history={this.props.history}
                        page={this.props.location.pathname}
                        />

                        <ParkInfo
                        hours={this.props.park.operatingHours[0]}
                        address={this.props.park.addresses}
                        directionsUrl={this.props.park.directionsUrl}
                        />
                    </Grid>


                    <Route path={`${this.props.match.path}/overview`}>
                        <ParkOverview
                        savedParks={this.props.savedParks}
                        handleUnsavePark={this.props.handleUnsavePark}
                        handleSaveParks={this.props.handleSaveParks}
                        park={this.props.park}
                            />
                    </Route>
                    <Route path={`${this.props.match.path}/camping`}>
                        <ParkCamping
                        parkcode={this.props.park.parkCode} 
                        longitude={this.props.park.longitude}
                        latitude={this.props.park.latitude}
                        
                        />
                    </Route>

                    
                </Grid>

            </Grid>
        )
    }
}

export default ParkDetails
