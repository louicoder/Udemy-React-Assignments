const redux = require('redux');

const initialState = {
    counter: 0
}

// intialise creatStore but don't execute it yet
const createStore = redux.createStore;

// create the reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INC_COUNTER':
            return {
              ...state,
              counter: state.counter + 1
            };
            break;
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            }
            break;
        default:
            return state;
    }
}

const store = createStore(rootReducer)
console.log(store.getState());

// create subscription to the store.
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

// dispatch actions.
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10})
console.log(store.getState());
