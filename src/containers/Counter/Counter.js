import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncreaseFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecreaseFive}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT, val: 1}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT, val: 1}),
        onIncreaseFive: () => dispatch({type: actionTypes.INCREMENT_BY_FIVE, val: 5}),
        onDecreaseFive: () => dispatch({type: actionTypes.DECREMENT_BY_FIVE, val: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, res: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);