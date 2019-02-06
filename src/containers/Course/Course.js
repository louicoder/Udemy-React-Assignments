import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Course extends Component {

    state = {
        id: null,
        title: null
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id,
            title: this.props.match.params.title
        })
        // console.log(this.props)
    }

    render () {
        // console.log(this.props)
        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                {/* <h1>{this.props.title}</h1> */}

                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);