import React, { Component } from 'react';
import Navbar from '../NavBar';
import CounselingDetails from './CounselingDetails';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Counseling extends Component {

    constructor() {
        super()
        this.state = {
            counselingContact: '',
            counselingProcess: '1, 2, 3, 4, 5, 6, 7, 8'
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    Counseling
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Counseling info is provided below. 
                </Typography>
                <CounselingDetails />
                <div>
                    {this.state.counselingContact}
                </div>
            </Container>
            
        )
    }

    
}

export default Counseling;