

 export function wedReducer(state= [], action) {
    switch(action.type){

        case 'SET_WEDPLANS':
            return [...action.payload]
        case 'ADD_WEDPLAN':
            return [...state, action.payload]
        case 'REMOVE_WEDPLAN':
            let newWedPlans = state.filter(wed => wed.id !== action.payload)
            return [...newWedPlans]

        default:
            return state
    }

}
