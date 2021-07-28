import React from 'react'
import ParksContainer from './ParksContainer'

export default function SavedParks({location, savedParks, handleUnsavePark, handleSaveParks, handleSelectPark}) {
    return (
        <>
            <ParksContainer
            history={this.props.history}
            title="Saved Parks"
            savedParks={savedParks}
            handleSaveParks={handleSaveParks}
            handleUnsavePark={handleUnsavePark}
            handleSelectPark={handleSelectPark}
            parks={savedParks}/>
        </>
    )
}
