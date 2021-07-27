import React, { Component } from 'react'
import '../../css/Hero.css'
import { FormControl, InputLabel, Select, MenuItem, Button, ButtonGroup } from '@material-ui/core'

export class Form extends Component {
    state = {
        stateAbbreviations: [
            'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
            'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
            'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
            'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
            'VT','VI','VA','WA','WV','WI','WY'
           ],
           selectedState: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchingParks(this.state.selectedState)
    }


    render() {
        return (
            <form className="hero-form" onSubmit={this.handleSubmit}>
                <ButtonGroup>
                    <FormControl variant="outlined" color="secondary">
                        <InputLabel id="select-state">Select State</InputLabel>
                        <Select
                        labelId="select-state"
                        name="selectedState"
                        value={this.state.selectedState}
                        onChange={this.handleChange}
                        >
                            {
                            this.state.stateAbbreviations.map(state => (
                                <MenuItem value={state} key={state}>{state}</MenuItem> 
                            ))
                            }
                        </Select>
                    </FormControl>

                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    >
                        Find Parks
                    </Button>
                </ButtonGroup>
            </form>
        )
    }
}

export default Form
