import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core'
const apiKey = process.env.REACT_APP_API_MAPS

const containerStyle = {
  width: '100%',
  height: '100%'
}

export class CampingMap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={apiKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: this.props.latitude, lng: this.props.longitude}}
          zoom={8}
        >
          {
            this.props.campgrounds.length !== 0 
            ?
            this.props.campgrounds.map(campground => {
              
              return (
                <Marker key={campground.id}
                position={{lat: parseInt(campground.latitude), lng: parseInt(campground.longitude)}}
                onClick={() => this.props.handleCampgroundClick(campground)}

              />
              )
            })
            : null 
          }

          {
            this.props.selectedCampground && (
              <InfoWindow
              position={{lat: parseInt(this.props.selectedCampground.latitude), lng: parseInt(this.props.selectedCampground.longitude)}}
              onCloseClick={this.props.handleCampgroundWindowClick}
              >
                <Card elevation={0} className="info-window">
                  {this.props.selectedCampground.images.length !== 0 ?
                  <CardMedia
                  image={this.props.selectedCampground.images[0].url}
                  />
                  : null
                   }
                   <CardContent>
                    <Typography variant="h6" component="p" color="secondary" gutterBottom>
                      {this.props.selectedCampground.name}
                      </Typography>
                      <Typography variant="caption" component="p" color="secondary">
                        {this.props.selectedCampground.description}
                    </Typography>

                   </CardContent>
                </Card>
              </InfoWindow>
            )
          }
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default CampingMap

