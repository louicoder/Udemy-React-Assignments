import React from 'react';

const userOutput = (props) => {
    const styles = {
        backgroundColor: '#eee',
        padding: '5px',
        display: 'flex',
        textWrap: 'wrap'
    }
    return (
        <div>
            <p style={styles}>{props.name}</p>
        </div>
    );
}

export default userOutput;