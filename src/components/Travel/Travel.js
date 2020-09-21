import React, { Component } from 'react';
import Navbar from '../NavBar';
import TravelDetails from './TravelDetails';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Travel extends Component {

    constructor() {
        super()
        this.state = {
            travelContact: '',
            travelProcess: '1, 2, 3, 4, 5, 6, 7, 8'
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    Travel Clearance
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Program members must apply for travel clearance before travelling out of state. 
                    Please ensure all requirements have been fulfilled before travelling. Thank you!
                </Typography>
                <TravelDetails />
                <div>
                    {this.state.travelContact}
                </div>
            </Container>
            
        )
    }

    
}

export default Travel;