import React from 'react'
import { monReducer } from './monReducer'
import { combineReducers } from 'redux'
import { tuesReducer } from './tuesReducer';
import { wedReducer } from './wedReducer';

const rootReducer = combineReducers({
    mon: monReducer,
    tue: tuesReducer,
    wed: wedReducer
})



export default rootReducer;