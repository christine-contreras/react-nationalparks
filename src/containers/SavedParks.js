import React from 'react'
import ParksContainer from './ParksContainer'

const SavedParks = ({history, savedParks, handleUnsavePark, handleSaveParks, handleSelectPark}) => {
    return (
        <>
            <ParksContainer
            history={history}
            title="Saved Parks"
            savedParks={savedParks}
            handleSaveParks={handleSaveParks}
            handleUnsavePark={handleUnsavePark}
            handleSelectPark={handleSelectPark}
            parks={savedParks}/>
        </>
    )
}

export default SavedParks