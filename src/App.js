import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './containers/Layout'
import Home from './containers/Home'
import SavedParks from './containers/SavedParks'



export class App extends Component {
  state = {
    savedParks: []
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

  render() {
    return (
      <Router>
      <Layout>

        <Route exact path="/"
        render={(routerProps) => <Home {...routerProps} 
        handleSaveParks={this.handleSaveParks} handleUnsavePark={this.handleUnsavePark} savedParks={this.state.savedParks}/>} 
        />

        <Route exact path="/saved"
        render={(routerProps) => <SavedParks {...routerProps} savedParks={this.state.savedParks} handleParks={this.handleUnsavePark}/>}/>

       </Layout>
       </Router>
    )
  }
}

export default App
