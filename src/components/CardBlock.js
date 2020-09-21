import React from 'react'
//import { withRouter } from 'react-router'
import {Link, Router} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FALLBACK_IMAGE from '../media/images/fallback_image.png';

const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;

const imageFileLocation = (contentAreaName) => {

    var imageLocation = "";
    switch(contentAreaName) {
        case "Admissions":
            imageLocation = require("../media/images/admissions.png");
            break;
        case "Graduation":
            imageLocation = require("../media/images/graduation.png");
            break;
        case "Requests":
            imageLocation = require("../media/images/requests.png");
            break;
        case "Contacts":
            imageLocation = require("../media/images/contacts.png");
            break;
        case "Resources":
            imageLocation = require("../media/images/resources.png");
            break;
        case "Counseling":
            imageLocation = require("../media/images/counseling.png");
            break;
        default:
            break;
    }

    return imageLocation;
};

const CardBlock = (props) => {
    console.log(props)
    return(
        // <Router>
        <div>
            { props.contentArea ? (
                <Card >
                    <CardMedia style={{height: 500, width: 450, paddingTop: '7%'}}
                    component="img"
                    image={imageFileLocation(props.contentArea.ContentAreaName)}
                    title={props.contentArea.ContentAreaName}
                    onError={onMediaFallback}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.contentArea.ContentAreaName}
                    </Typography>
                    <Typography component="p">
                        {props.contentArea.Description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link component="button" variant="body2"
                        onClick={() => {
                                console.info("I'm a button.");
                        }}
                    > 
                    Button Link
                    </Link>
                    {/* <Button size="small" component ={Link} to="/Admissions.js" color="primary" variant='contained' target="_blank">
                        Go To {props.contentArea.ContentAreaName}
                    </Button> */}
                    
                    </CardActions>
                </Card>
            ) : null}
        </div>
        //</Router>
    )
}
export default CardBlock;//withRouter(CardBlock);