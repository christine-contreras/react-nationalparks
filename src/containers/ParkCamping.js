import React, { Component } from 'react'
import CampingMap from '../components/park/CampingMap'
import CampingInfo from '../components/park/CampingInfo'
import { Grid } from '@material-ui/core'
const apiKey = process.env.REACT_APP_API_PARKS

export class ParkCamping extends Component {
    state = {
        campgrounds: [],
        selectedCampground: null
    }

    componentDidMount() {
        
        fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${this.props.parkcode}=&api_key=${apiKey}&limit=500`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                campgrounds: json.data
            })
        })
    }

    handleCampgroundClick = (campground) => {
        this.setState({
            selectedCampground: campground
        })
    }

    handleCampgroundWindowClick = () => {
        this.setState({
            selectedCampground: null
        })
    }
    render() {
        return (
            <>
            <Grid item
            xs={12} sm={12} md={this.state.selectedCampground ? 6 : 9}
            className="details-map">
                <CampingMap
                longitude={parseInt(this.props.longitude)}
                latitude={parseInt(this.props.latitude)}
                campgrounds={this.state.campgrounds}
                selectedCampground={this.state.selectedCampground}
                handleCampgroundClick={this.handleCampgroundClick}
                handleCampgroundWindowClick={this.handleCampgroundWindowClick}
                 />
            </Grid>

            {this.state.selectedCampground && (
                <CampingInfo campground={this.state.selectedCampground}/>
            )}
            </>
        )
    }
}

export default ParkCamping
