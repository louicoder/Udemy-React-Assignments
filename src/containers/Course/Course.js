import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Course extends Component {

    state = {
        id: null,
        title: null
    }

    componentDidMount() {

        // console.log(decodeURIComponent(this.props.location.search).split('?')[1])
    }

    componentDidUpdate() {
        
        
    }

    render () {
        const values = decodeURIComponent(this.props.location.search).split('?')[1]
        let t_title = values.split('&')[0]
        t_title = t_title.split('=')[1]
        
        return (
            <div>
                <h1>{t_title}</h1>
                {/* <h1>{this.props.title}</h1> */}

                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);