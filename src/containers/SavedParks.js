import React from 'react'
import ParksContainer from './ParksContainer'

export default function SavedParks({location, savedParks, handleUnsavePark, handleSaveParks}) {
    return (
        <>
            <ParksContainer
            page={location.pathname}
            title="Saved Parks"
            savedParks={savedParks}
            handleSaveParks={handleSaveParks}
            handleUnsavePark={handleUnsavePark}
            parks={savedParks}/>
        </>
    )
}
