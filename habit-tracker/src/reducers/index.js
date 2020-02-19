import React from 'react'
import { monReducer } from './monReducer'
import { combineReducers } from 'redux'
import { tuesReducer } from './tuesReducer';
import { wedReducer } from './wedReducer';
import { thurReducer } from './thurReducer';

const rootReducer = combineReducers({
    mon: monReducer,
    tue: tuesReducer,
    wed: wedReducer,
    thur: thurReducer
})



export default rootReducer;