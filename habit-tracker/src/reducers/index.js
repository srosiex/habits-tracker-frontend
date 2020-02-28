import React from 'react'
import { dayReducer } from './dayReducer'
import { combineReducers } from 'redux'

import { habitReducer } from './habitReducer';

const rootReducer = combineReducers({
    plans: dayReducer,
    // tue: tuesReducer,
    // wed: wedReducer,
    // thur: thurReducer,
    // fri: friReducer,
    habit: habitReducer
})



export default rootReducer;