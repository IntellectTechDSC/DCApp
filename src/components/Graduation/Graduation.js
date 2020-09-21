import React, { Component } from 'react';
import Navbar from '../NavBar';
import GraduationDetails from './GraduationDetails';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Graduation extends Component {

    constructor() {
        super()
        this.state = {
            graduationContact: '',
            graduationProcess: '1, 2, 3, 4, 5, 6, 7, 8'
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    Graduation
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Graduation criteria is provided below. 
                    Please ensure all criteria has been fulfilled before applying for graduation. Thank you!
                </Typography>
                <GraduationDetails />
                <div>
                    {this.state.graduationContact}
                </div>
            </Container>
            
        )
    }

    
}

export default Graduation;