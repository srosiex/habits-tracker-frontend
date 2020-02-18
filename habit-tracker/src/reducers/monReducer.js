

 export function monReducer(state=[], action){

    switch(action.type){
        // case 'SET_MONSPLAN':
        //     return [...action.payload]
        case 'ADD_MONPLAN':
            return [...state, action.payload]
        case 'REMOVE_MONPLAN':
            return state.filter( p => p.id !== action.payload.id)
        default:
            return state
    }

}
