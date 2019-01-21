import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    const style = {
        width: '100%',
        height: '20px',
        font: 'inherit'
    }
    return (
        <div className="UserInput">
            <p>Enter a word in the text area to see it in action</p>
            <input onChange={props.inputChanged} style={style} value={props.username}></input>
        </div>
    );
}

export default userInput;