import React from 'react';

const InputValidation = (props) => {
    const styles = {
        backgroundColor: '#eee',
        padding: '5px',
        textWrap: 'wrap',
        fontSize: '28px',
        textAlign: 'center',
        fontWeight: 'bolder'
    }

    const paraStyle = {
        fontWeight: 'bold'
    }

    const text = props.textLength <= 5 ? ( <p style={paraStyle}>Text is too short</p>) : ( <p style={paraStyle}>Text is long enough</p>);

    return (
        <div>
            {text}
            <p style={styles}>{props.username}</p>
        </div>
    );
}

export default InputValidation;