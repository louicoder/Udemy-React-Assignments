import React, { Component } from 'react';
import './App.css';
import InputValidation from './inputValidation/InputValidation';
import UserInput from './userInput/UserInput';
import CharComponent from './charComponent/CharComponent';

class App extends Component {
  state = {
    username: '',
    textLength: 0,
    charItems: []
  }

  onNameChangedHandler = (event) => {
    const newItem = event.target.value;
    const items = [...this.state.charItems]
    items.push(newItem)
    // console.log(this.state.charItems)

    this.setState({
      username: event.target.value,
      charItems: items
    })
  }

  clickedParagraph = (index) => {

    const characters = [...this.state.charItems];
    characters.splice(index, 1);

    this.setState({
      charItems: characters
    })
    
  }

  render() {
    const styles = {
      margin: 'auto',
      marginTop: '5%'
    }
    
    return (
      <div className="App" style={styles}>

        <UserInput
        inputChanged={this.onNameChangedHandler}
        />

        <InputValidation
        textLength={this.state.username.length}
        username={this.state.username.length}
        />

        <CharComponent
        list={this.state.charItems}
        click={this.clickedParagraph}
        index
        />

      </div>

    );
  }
}

export default App;
