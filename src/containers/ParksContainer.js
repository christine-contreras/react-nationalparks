import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import ParkCard from '../components/ParkCard'
import { renderStateName } from '../renderStateName'

const ParksContainer = ({title, parkState, parks, handleSaveParks, handleUnsavePark, handleSelectPark, history, savedParks}) => {

    //function to check if park is saved or not 
    const checkIfParkIsSaved = (checkPark) => {
        return savedParks.find(park => park.id === checkPark.id)
    }

    return (
        <Grid container
        id="results"
        direction="column"
        justifyContent="center"
        alignItems="center" >
            <Grid container item
            direction="column"
            justifyContent="center"
            alignItems="center" >
            <Typography variant="h3" component="h2" color="secondary" className="center" gutterBottom>
                <span className="subtitle">{renderStateName(parkState)}</span>
                {title}
            </Typography>
            </Grid>

            <Grid container item
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            spacing={6} >
                {parks.map(park => <ParkCard
                handleSaveParks={handleSaveParks}
                handleUnsavePark={handleUnsavePark}
                handleSelectPark={handleSelectPark}
                history={history}
                key={park.id}
                parkIsSaved={checkIfParkIsSaved(park)}
                parkInfo={park}/>)}
            </Grid>

        </Grid>
    )
}

export default ParksContainer