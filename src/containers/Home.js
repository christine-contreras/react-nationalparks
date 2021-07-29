import React, { Component } from 'react'
import Hero from '../components/home/Hero'
import ParksContainer from './ParksContainer'
const apiKey = process.env.REACT_APP_API_PARKS


export class Home extends Component {
    state = {
        selectedParks: [],
        selectedState: null,
        defaultParks: [],
    }

    componentDidMount() {
        //fetch default parks 
        fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&limit=50`)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            const newArray = []
            for(let i = 0; i < 4; i++) {
                newArray.push(json.data[Math.floor(Math.random()*json.data.length)])
            }
            this.setState({
            defaultParks: newArray,
            })

        })
    }


    fetchParksApi = (stateAbbr = null) => {
        //fetch parks by state 
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbr}=&api_key=${apiKey}`)
        .then(response => response.json())
        .then(json => {
        //   console.log(json)
          this.setState({
            selectedParks: json.data,
            selectedState: stateAbbr
          })
    
        })
      }

      
    render() {
        return (
            <>
             <Hero fetchingParks={this.fetchParksApi}/>

             <ParksContainer
                history={this.props.history}
                title="National Parks"
                savedParks={this.props.savedParks}
                parkState={this.state.selectedState} 
                handleSaveParks={this.props.handleSaveParks}
                handleUnsavePark={this.props.handleUnsavePark}
                handleSelectPark={this.props.handleSelectPark}
                parks={this.state.selectedParks.length !== 0 ? this.state.selectedParks : this.state.defaultParks}
                />
            </>
        )
    }
}

export default Home
