

 export function habitReducer(state= [], action) {
    switch(action.type){

        case 'SET_HABITS':
            return [...action.payload]
        case 'ADD_HABIT':
            return [...state, action.payload]
        case 'REMOVE_HABIT':
            let newHabits = state.filter(habit => habit.id !== action.payload)
            return [...newHabits]

        default:
            return state
    }

}
