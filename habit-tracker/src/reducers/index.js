import React from 'react'
import { monReducer } from './monReducer'
import { combineReducers } from 'redux'
import { tuesReducer } from './tuesReducer';
import { wedReducer } from './wedReducer';
import { thurReducer } from './thurReducer';
import { friReducer } from './friReducer';

const rootReducer = combineReducers({
    mon: monReducer,
    tue: tuesReducer,
    wed: wedReducer,
    thur: thurReducer,
    fri: friReducer
})



export default rootReducer;