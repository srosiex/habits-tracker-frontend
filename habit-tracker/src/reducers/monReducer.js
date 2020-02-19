

 export function monReducer(state= [], action) {
    switch(action.type){
        // case 'SET_MONSPLAN':
        //     return [...action.payload]
        case "SET_MONPLANS":
            return [...action.payload]
        case 'ADD_MONPLAN':
            return [...state, action.payload]
        case 'REMOVE_MONPLAN':
            let newMonPlans = state.filter(mon => mon.id !== action.payload)
            return [...newMonPlans]

        default:
            return state
    }

}
