

 export function habitReducer(state= [], action) {
    switch(action.type){

        case 'SET_HABITS':
            return [...action.payload]
        case 'ADD_HABIT':
            return [...state, action.payload]
        case 'REMOVE_HABIT':
            let newHabits = state.filter(habit => habit.id !== action.payload)
            return [...newHabits]
        case 'INCREASE_DAY':
             return state.map((habit)=>{
                 if(habit.id === action.id){
                     return {
                         ...habit,
                         day_count: action.payload.newCount
                     }
                 }
             })

        default:
            return state
    }

}
