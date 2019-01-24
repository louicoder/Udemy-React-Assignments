import React from 'react';
import './UserInput.css';
import Fragment from '../hoc/Fragment'

const userInput = (props) => {
    const style = {
        width: '100%',
        height: '20px',
        font: 'inherit'
    }
    return (
        <Fragment>
            <input onChange={props.inputChanged} style={style} value={props.username}></input>
        </Fragment>
    );
}

export default userInput;