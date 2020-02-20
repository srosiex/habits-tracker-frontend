

 export function friReducer(state= [], action) {
    switch(action.type){

        case 'SET_FRIPLANS':
            return [...action.payload]
        case 'ADD_FRIPLAN':
            return [...state, action.payload]
        case 'REMOVE_FRIPLAN':
            let newFriPlans = state.filter(fri => fri.id !== action.payload)
            return [...newFriPlans]

        default:
            return state
    }

}
