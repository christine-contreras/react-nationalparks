import React, { Component } from 'react'
import '../css/Details.css'
import ParkNav from '../components/park/ParkNav'
import ParkInfo from '../components/park/ParkInfo'
import ParkAbout from '../components/park/ParkAbout'
import ParkFees from '../components/park/ParkFees'
import ParkActivities from '../components/park/ParkActivities'
import ParkWeather from '../components/park/ParkWeather'

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

                <Grid item className="park-details">
                    <ParkNav
                    name={this.props.park.fullName}
                    history={this.props.history}
                    page={this.props.location.pathname}
                    state={this.props.park.states}
                    />

                    <ParkInfo
                    hours={this.props.park.operatingHours[0]}
                    address={this.props.park.addresses}
                    directions={this.props.park.directionsInfo}
                    directionsUrl={this.props.park.directionsUrl}
                    />

                    <ParkAbout
                    info={this.props.park.description}
                    url={this.props.park.url}
                    contactInfo={this.props.park.contacts}
                    image={this.props.park.images[0]}
                     />

                    <ParkFees />

                    <ParkActivities />

                    <ParkWeather />
                </Grid>

            </Grid>
        )
    }
}

export default ParkDetails
