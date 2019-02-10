import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter(result => result.id !== action.resultId)
            return {
                ...state,
                results: newArray
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.res, id: Math.random().toString(36).replace('0.', '')})
            }
        default:
            return state;
    }
}

export default resultsReducer;