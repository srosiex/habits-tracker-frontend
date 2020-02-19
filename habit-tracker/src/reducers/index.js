import React from 'react'
import { monReducer } from './monReducer'
import { combineReducers } from 'redux'
import { tuesReducer } from './tuesReducer';

const rootReducer = combineReducers({
    mon: monReducer,
    tue: tuesReducer
})



export default rootReducer;