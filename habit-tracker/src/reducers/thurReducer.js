

 export function thurReducer(state= [], action) {
    switch(action.type){

        case 'SET_THURPLANS':
            return [...action.payload]
        case 'ADD_THURPLAN':
            return [...state, action.payload]
        case 'REMOVE_THURPLAN':
            let newThurPlans = state.filter(thur => thur.id !== action.payload)
            return [...newThurPlans]

        default:
            return state
    }

}
