

 export function dayReducer(state= {Monday: [], Tuesday:[], Wednesday: [], Thursday: [], Friday: []}, action) {
    switch(action.type){

        case 'SET_PLANS':
            return {...state, [action.payload.day]: action.payload.plans}
        case 'ADD_PLAN':
            let day = action.payload.day
            let plans = [...state[day]]
            return {...state, [day]: [...plans, action.payload.plan]}
        case 'REMOVE_PLAN':
            let newPlans = state[action.payload.day].filter(plan => plan.id !== action.payload.planId)
            return {...state, [action.payload.day]: newPlans}

        default:
            return state
    }

}
