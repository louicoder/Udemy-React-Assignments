import React, { Component } from 'react';
import './App.css';
import UserOutput from './userOutput/UserOutput';
import UserInput from './userInput/UserInput'

class App extends Component {
  state = {
    username: 'Louis',
    persons: [
      {name: 'Louis'},
      {name: 'Max'},
      {name: 'Manu'},
      {name: 'Stephanie'}
    ]
  }

  onNameChangedHandler = (event) => {
    this.setState({
      persons:  [
        {name: event.target.value},
        {name: 'Max'},
        {name: 'Manu'},
        {name: 'Stephanie'}
      ]
    });
  }

  render() {
    const styles = {
      margin: 'auto',
    }
    
    return (
      <div className="App" style={styles}>
        {/* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> */}

      
        <div>
          <UserInput 
          inputChanged = {this.onNameChangedHandler}
          persons={this.state.persons}
          />
          <UserOutput name={this.state.persons[0].name} />
          <UserOutput name={this.state.persons[1].name} />
          <UserOutput name={this.state.persons[2].name} />
          <UserOutput name={this.state.persons[3].name} />
        </div>

      </div>

      
    );
  }
}

export default App;
