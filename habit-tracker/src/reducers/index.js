import React from 'react'
import { monReducer } from './monReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    mon: monReducer,
})



export default rootReducer;