

 export function tuesReducer(state= [], action) {
    switch(action.type){

        case 'SET_TUESPLANS':
            return [...action.payload]
        case 'ADD_TUESPLAN':
            return [...state, action.payload]
        case 'REMOVE_TUESPLAN':
            let newTuesPlans = state.filter(tue => tue.id !== action.payload)
            return [...newTuesPlans]

        default:
            return state
    }

}
