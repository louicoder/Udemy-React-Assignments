import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    // console.log(action)
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
        case actionTypes.STORE_RESULT:
            // console.log(state, action);
            return {
                ...state,
                results: state.results.concat({value: action.res, id: Math.random().toString(36).replace('0.', '')})
            }
        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter(result => result.id !== action.resultId)
            return {
                ...state,
                results: newArray
            }
        default:
            return state
    }
}

export default reducer;