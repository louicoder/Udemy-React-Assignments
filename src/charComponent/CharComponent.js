import React from 'react';

const charComponent = (props) => {

    const style = {
        backgroundColor: '#eee',
        padding: '10px',
        display: 'inline-block',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div>
            
            {
                props.list.map((item, index) => {
                    return (
                        <p key={index} onClick={() => props.click(index)} style={style}>{item}</p>
                    )
                })
            }
        
            
        </div>
    )
}

export default charComponent;