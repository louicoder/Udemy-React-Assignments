import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
        // name: '',
        // age: 0,
        // id: Math.random().toString(36).replace('0.', '')
    }

    personAddedHandler = () => {
        // const newPerson = {
        //     id: Math.random().toString(36).replace('0.', ''), // not really unique but good enough here!
        //     name: 'Max',
        //     age: Math.floor( Math.random() * 40 )
        // }
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.concat(newPerson)}
        // } );
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value})
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value})
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        // console.log(this.props.persons)
        return (
            <div>
                
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.people
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (id, name, age) => dispatch({type: 'ADD_PERSON', personData: {id: id, name: name, age:age}}),
        onPersonDeleted: (id) => dispatch({type: 'DELETE_PERSON', id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);