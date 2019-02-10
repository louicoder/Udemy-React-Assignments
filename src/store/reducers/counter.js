import * as actionTypes from '../actions'

const initialState = {
    counter: 0
}

const reducerReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.INCREMENT_BY_FIVE:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.DECREMENT_BY_FIVE:
            return {
                ...state,
                counter: state.counter - action.val
            }
        default:
            return state
    }
}

export default reducerReducer;