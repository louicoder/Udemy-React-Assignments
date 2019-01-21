import React from 'react';

const charComponent = (props) => {

    const style = {
        backgroundColor: '#eee',
        padding: '10px',
        // display: 'inline-block',
        'margin': '10px'
    }

    // button style object  
    const buttonStyle = {
        display: 'block',
        width: '50%',
        padding: '10px',
        backgroundColor: 'red',
        font: 'inherit',
        border: 'none',
        color: 'white',
        'margin': 'auto',
        'marginBottom': '10px',
        cursor: 'pointer'
    }

    // text to be displayed on button
    const btnText = props.show ? 'Hide List' : 'Show List'

    const listItems = props.list.map((item, index) => {
        return (
            <p key={index} onClick={() => props.click(index)} style={style}>{item}</p>
        )
    })

    // Jsx for button element
    const btn = (
        <div>
            <button style={buttonStyle} onClick={props.toggleDisplay}>{btnText}</button>
        </div>
    )

    // background color of button
    if (!props.show) {
        buttonStyle.backgroundColor = 'green';
        
    }

    return (
            <div>
                {btn}
                <div>
                    {props.show ? listItems : null}
                </div>
            </div>
    )
    
}

export default charComponent;