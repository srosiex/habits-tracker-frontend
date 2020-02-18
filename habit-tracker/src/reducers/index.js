import React from 'react'
import { monReducer } from './monReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    monPlan: monReducer,
})
export default rootReducer;