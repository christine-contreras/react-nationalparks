import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core'
const apiKey = process.env.REACT_APP_API_MAPS

const containerStyle = {
  width: '100%',
  height: '100%'
}

const CampingMap= ({latitude, longitude, campgrounds, selectedCampground, handleCampgroundClick, handleCampgroundWindowClick}) => {
  return (
    <LoadScript
        googleMapsApiKey={apiKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: latitude, lng: longitude}}
          zoom={8}
        >
          {
            campgrounds.length !== 0 
            ?
            campgrounds.map(campground => {
              
              return (
                <Marker key={campground.id}
                position={{lat: parseInt(campground.latitude), lng: parseInt(campground.longitude)}}
                onClick={() => handleCampgroundClick(campground)}

              />
              )
            })
            : 
            
            <Typography variant="h4" component="p" gutterBottom className="map-modal text-light">
            No Campgrounds Avaliable
            </Typography>
          }

          {
            selectedCampground && (
              <InfoWindow
              position={{lat: parseInt(selectedCampground.latitude), lng: parseInt(selectedCampground.longitude)}}
              onCloseClick={handleCampgroundWindowClick}
              >
                <Card elevation={0} className="info-window">
                  {selectedCampground.images.length !== 0 ?
                  <CardMedia
                  image={selectedCampground.images[0].url}
                  />
                  : null
                   }
                   <CardContent>
                    <Typography variant="h6" component="p" color="secondary" gutterBottom>
                      {selectedCampground.name}
                      </Typography>
                      <Typography variant="caption" component="p" color="secondary">
                        {selectedCampground.description}
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

export default CampingMap

