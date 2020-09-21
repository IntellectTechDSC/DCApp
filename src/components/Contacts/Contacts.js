import React, { Component } from 'react';
import Navbar from '../NavBar';
import ContactsDetails from './ContactsDetails';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Contacts extends Component {

    constructor() {
        super()
        this.state = {
            Contacts: ''
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Contacts for each process are listed.
                </Typography>
                <ContactsDetails />
                <div>
                    {this.state.Contacts}
                </div>
            </Container>
            
        )
    }

    
}

export default Contacts;