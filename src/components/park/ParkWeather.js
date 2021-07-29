import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import FilterDramaIcon from '@material-ui/icons/FilterDrama'
import OpacityIcon from '@material-ui/icons/Opacity'
import AcUnitIcon from '@material-ui/icons/AcUnit'
const apiKey = process.env.REACT_APP_API_WEATHER

export class ParkWeather extends Component {
    state = {
        temp: null,
        tempDetails: null
    }

    componentDidMount(){
        const validAddress = this.props.address.find(a => a.type === "Physical")

        fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&units=f&query=${validAddress.postalCode}`)
        .then(res => res.json())
        .then(json => {
  
            this.setState({
                temp: json.current.temperature,
                tempDetails: json.current.weather_descriptions[0]
            })
        })
    }

    renderWeatherIcon = (description) => {
        let icon 

        switch(description) {
            case "Partly cloudy":
            case "Cloudy":
            case "Overcast":
            case "Fog":
                icon = <FilterDramaIcon />
                break
            case "Mist":
            case "Patchy rain possible":
            case "Patchy light drizzle":
            case "Light drizzle":
            case "Patchy light rain":
            case "Light rain":
            case "Moderate rain at times":
            case "Moderate rain":
            case "Heavy rain at times":
            case "Heavy rain":
            case "Light freezing rain":
            case "Thundery outbreaks possible":
            case "Patchy freezing drizzle possible":
            case "Freezing drizzle":
            case "Heavy freezing drizzle":
            case "Rain":
                icon = <OpacityIcon />
                break
            case "Patchy snow possible":
            case "Patchy sleet possible":
            case "Blowing snow":
            case "Blizzard":
            case "Freezing fog":
                icon = <AcUnitIcon />
                break
            default:
                icon = <WbSunnyOutlinedIcon />
        }

        return icon
    }

    render() {
        return (
            <Grid item className="details-activity-item item-2 background-2 text-light">
                <Typography variant="h6" component="h2" className="center" gutterBottom>
                    Current Weather
                </Typography>

                <div className="weather-icon">
                    {this.renderWeatherIcon(this.state.tempDetails)}
                </div>

                <div className="center">
                    <Typography className="padding-top" variant="h5" component="p">
                        {this.state.temp}&#8457;
                    </Typography>
                    <Typography variant="subtitle1">
                        {this.state.tempDetails}
                    </Typography>
                </div>

                <Typography className="padding-top-lg">
                    {this.props.description.split('.').slice(0,3).join('.')}
                </Typography>
             </Grid>
        )
    }
}

export default ParkWeather