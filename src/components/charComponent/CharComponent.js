import React from 'react';
import styles from './CharComponent.css';

const charComponent = (props) => {  

    // text to be displayed on button
    const btnText = props.show ? 'Hide List' : 'Show List'

    const listItems = props.list.map((item, index) => {
        return (
            <p className={styles.charClass} key={index} onClick={() => props.click(index)}>{item}</p>
        )
    })


    let btnClass = ''
    const classes = []

    if (props.show) {
        // styles.Button.background-color = 'green';
        btnClass = styles.red;
        classes.push(btnClass, styles.displayButton)
    } else {
        btnClass = styles.green;
        classes.push(btnClass, styles.displayButton)
    }

    
    return (
        <div>
            <div>
                <button
                    className={classes.join(' ')}
                    onClick={props.toggleDisplay}>{btnText}</button>
            </div>
            <div className={styles.listContainer}>
                {props.show ? listItems : null}
            </div>
        </div>
       
    )
}

export default charComponent;