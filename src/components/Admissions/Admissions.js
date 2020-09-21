import React, { Component } from 'react';
import Navbar from '../NavBar';
import AdmissionsDetails from './AdmissionsDetails';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Admissions extends Component {

    constructor() {
        super()
        this.state = {
            admissionContact: '',
            admissionProcess: '1, 2, 3, 4, 5, 6, 7, 8'
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    Admissions
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Welcome to Admissions. Acceptance criteria and program overview provided below. 
                    Please follow the guidelines and contact the program representative for any questions or concerns. Thank you!
                </Typography>
                <AdmissionsDetails />
                <div>
                    {this.state.admissionContact}
                </div>
            </Container>
            
        )
    }

    
}

export default Admissions;