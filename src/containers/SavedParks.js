import React from 'react'
import ParksContainer from './ParksContainer'

export default function SavedParks() {
    return (
        <>
            <ParksContainer
            page={this.props.location.pathname}
            title="Saved Parks"
            parks={this.props.savedParks}
            handleParks={this.props.handleParks}/>
        </>
    )
}
