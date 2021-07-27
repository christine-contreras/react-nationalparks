import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import ParkCard from '../components/ParkCard'

export default function ParksContainer({title, parkState, parks, handleSaveParks, handleUnsavePark, page, savedParks}) {
    const stateNames = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    }

    const renderStateName = (parkAbbreviation) => {
        return stateNames[parkAbbreviation]
    }

    //function to check if park is saved or not (NOT WORKING)
    const checkIfParkIsSaved = (checkPark) => {
        savedParks.map(park => park.id === checkPark.id)
    }

    return (
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center" >
            <Grid container item
            direction="column"
            justifyContent="center"
            alignItems="center" >
            <Typography variant="h3" component="h2" color="secondary" gutterBottom>
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
                page={page}
                key={park.id}
                parkIsSaved={checkIfParkIsSaved(park)}
                parkInfo={park}/>)}
            </Grid>

        </Grid>
    )
}
