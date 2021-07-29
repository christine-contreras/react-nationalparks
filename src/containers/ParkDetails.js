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

    //function to check if park is saved or not 
    checkIfParkIsSaved = (checkPark) => {
        return this.props.savedParks.find(park => park.id === checkPark.id)
    }

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

                    <ParkAbout
                    info={this.props.park.description}
                    url={this.props.park.url}
                    contactInfo={this.props.park.contacts}
                    image={this.props.park.images[0]}
                    parkIsSaved={this.checkIfParkIsSaved(this.props.park)}
                    handleUnsavePark={this.props.handleUnsavePark}
                    handleSaveParks={this.props.handleSaveParks}
                    parkInfo={this.props.park}
                     />

                    <Grid item
                    xs={12} sm={12} md={4}
                    className="relative details-right">
                        <ParkFees
                        image={this.props.park.images[1]}
                        fees={this.props.park.entranceFees}/>

                        <Grid item container className="details-activities">
                            <ParkActivities activities={this.props.park.activities}/>

                            <ParkWeather address={this.props.park.addresses} description={this.props.park.weatherInfo}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default ParkDetails
