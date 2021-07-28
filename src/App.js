import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './containers/Layout'
import Home from './containers/Home'
import SavedParks from './containers/SavedParks'
import ParkDetails from './containers/ParkDetails'



export class App extends Component {
  state = {
    savedParks: [],
    selectedPark: null
  }

  componentDidMount() {
    //fetch saved parks
    fetch('http://localhost:3000/parks')
    .then(res => res.json())
    .then(savedParks => {
      this.setState({savedParks})
    })
}

  handleSaveParks = (newPark) => {
    const configData = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPark)
    }

    fetch('http://localhost:3000/parks', configData)

    this.setState(previousState => ({
      savedParks: [...previousState.savedParks, newPark]
    })
  )
  }

  handleUnsavePark = (removePark) => {
    const newSavedParks = this.state.savedParks.filter(park => park !== removePark)

    this.setState({
      savedParks: newSavedParks
    })

    fetch(`http://localhost:3000/parks/${removePark.id}`, {
      method: 'DELETE'
    })
  }

  handleSelectPark = (selectedPark) => {
    this.setState({selectedPark})
  }

  render() {
    return (
      <Router>
      <Layout>

        <Route exact path="/"
        render={(routerProps) => (
          <Home {...routerProps} 
          handleSaveParks={this.handleSaveParks}
          handleUnsavePark={this.handleUnsavePark}
          handleSelectPark={this.handleSelectPark}
          savedParks={this.state.savedParks} />
        )} 
        />

        <Route exact path="/saved-parks"
        render={(routerProps) => (
          <SavedParks {...routerProps}
          savedParks={this.state.savedParks}
          handleUnsavePark={this.handleUnsavePark}
          handleSaveParks={this.handleSaveParks}/>
        )}/>

        <Route exact path="/park-details"
        render={(routerProps) => (
          <ParkDetails {...routerProps}
          park={this.state.selectedPark}
          handleUnsavePark={this.handleUnsavePark}
          handleSaveParks={this.handleSaveParks}/>
        )}/>

       </Layout>
       </Router>
    )
  }
}

export default App
