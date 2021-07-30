import React from 'react'
import ParkAbout from '../components/park/ParkAbout'
import ParkFees from '../components/park/ParkFees'
import ParkActivities from '../components/park/ParkActivities'
import ParkWeather from '../components/park/ParkWeather'

import { Grid } from '@material-ui/core'

const ParkOverview = ({park, handleUnsavePark, handleSaveParks, savedParks}) => {

     //function to check if park is saved or not 
     const checkIfParkIsSaved = (checkPark) => {
        return savedParks.find(park => park.id === checkPark.id)
    }
    return (
        <>
        <ParkAbout
        info={park.description}
        url={park.url}
        contactInfo={park.contacts}
        image={park.images[Math.floor(Math.random() * park.images.length)]}
        parkIsSaved={checkIfParkIsSaved(park)}
        handleUnsavePark={handleUnsavePark}
        handleSaveParks={handleSaveParks}
        parkInfo={park}
            />

        <Grid item
        xs={12} sm={12} md={4}
        className="relative details-right">
            <ParkFees
            image={park.images[Math.floor(Math.random() * park.images.length)]}
            fees={park.entranceFees}/>

            <Grid item container className="details-activities">
                <ParkActivities activities={park.activities}/>

                <ParkWeather address={park.addresses} description={park.weatherInfo}/>
            </Grid>
        </Grid>  
        </>
    )
}

export default ParkOverview