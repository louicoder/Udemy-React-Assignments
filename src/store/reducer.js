
const initialState = {
    people: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_PERSON':
        // console.log('action in reducer' , action, state)
            const data = {
                id: action.personData.id,
                name: action.personData.name,
                age: action.personData.age
            }
            // console.log(state.people)
            return {
                ...state,
                people: [...state.people, data]
            }
        case 'DELETE_PERSON':
            return {
                ...state,
                people: state.people.filter(person => person.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer;