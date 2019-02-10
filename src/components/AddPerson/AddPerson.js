import React, {Component} from 'react';

import './AddPerson.css';

class  AddPerson extends Component {

    state = {
        age: '',
        name: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value})
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value})
    }

    render() {
        // console.log(this.state)
        return (
            <div className="AddPerson">
                <input type="text" value={this.state.name} onChange={this.nameChangedHandler}></input>
                <input type="number" value={this.state.age} onChange={this.ageChangedHandler}></input>
                <button onClick={() => this.props.personAdded(Math.random().toString(36).replace('0.',''), this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
} 

export default AddPerson;