import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//import TextField from '@material-ui/core/TextField';
//import * as contentful from 'contentful';
import CardBlock from './CardBlock';
import DataService from '../services/DataService';
import LocalData from '../local_data/ContentAreas_Sample.json';


//const SPACE_ID = '[INSERT CONTENTFUL SPACE ID]'
//const ACCESS_TOKEN = '[INSERT CONTENTFUL ACCESS TOKEN]'

// const client = contentful.createClient({
//     space: SPACE_ID,
//     accessToken: ACCESS_TOKEN
// })


class NavigationCards extends Component {
    
    constructor() {
        super()
        this.state = {
            contentAreas: LocalData,
            searchString: ''
        }
    }

    componentWillMount() {
        this.fetchData()
        // .then(response => {
        //     this.setState({
        //       contentAreas: response.data
        //     });
        //     console.log(response.data);
        //   })
        //   .catch((e) => {
        //     console.log("Error occurred while fetching Entries")
        //     console.log(e);
        //   });
    }

    fetchData = () => {
        
        // this.setState({
        //     contentAreas: DataService.getAll()
        //   });
          //console.log(this.state.contentAreas.ContentAreaName);
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }
    render() {
        return (
            <div>
                { this.state.contentAreas ? (
                    <div>
                        {/* <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            /> */}
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.contentAreas.map(area => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <CardBlock contentArea={area} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default NavigationCards;