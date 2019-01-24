import React, { Component } from 'react';
import style from './App.css';
import InputValidation from './components/inputValidation/InputValidation';
import UserInput from './components/userInput/UserInput';
import CharComponent from './components/charComponent/CharComponent';
import WithClass from './components/hoc/WithClass'

class App extends Component {
  state = {
    username: '',
    textLength: 0,
    charItems: [],
    display: true,
    clickCounter: 0
  }

  onNameChangedHandler = (event) => {
    const newItem = event.target.value;
    const items = [...this.state.charItems]
    items.push(newItem)

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

  toggleDisplay = () => {
    const { display } = { ...this.state }

    this.setState((prevState, props) => {
      return {
        display: !display,
        clickCounter: prevState.clickCounter + 1
      }
    })
    console.log(this.state.clickCounter)
  }

  render() {

    const classes = []

    if (this.state.charItems.length <= 2) {
      classes.push(style.red)
    }

    if (this.state.charItems.length <= 1) {
      classes.push(style.bold)
    }

    return (
      <WithClass classes={style.App}>

        <p className={classes.join(' ')}>This is working very well</p>
        <UserInput
          inputChanged={this.onNameChangedHandler}
        />

        <InputValidation
          textLength={this.state.username.length}
          username={this.state.username.length}
        />

        <CharComponent
          list={this.state.charItems}
          nameLength={this.state.username.length}
          click={this.clickedParagraph}
          toggleDisplay={this.toggleDisplay}
          show={this.state.display}
        />

      </WithClass>

    )
  }
}

export default App;
