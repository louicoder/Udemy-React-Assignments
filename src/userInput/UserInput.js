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
            <input onChange={props.inputChanged} value={props.persons[0].name}  style={style}></input>
        </div>
    );
}

export default userInput;