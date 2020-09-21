import React, { Component } from 'react';
import Navbar from '../NavBar';
import ResourcesDetails from './ResourcesDetails';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Resources extends Component {

    constructor() {
        super()
        this.state = {
            resourcesContact: '',
            resourcesProcess: '1, 2, 3, 4, 5, 6, 7, 8'
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    Resources
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Thank you!
                </Typography>
                <ResourcesDetails />
                <div>
                    {this.state.resourcesContact}
                </div>
            </Container>
            
        )
    }

    
}

export default Resources;