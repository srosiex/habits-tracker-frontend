import React from 'react'
import { connect } from 'react-redux'
import { removeThurPlan } from '../Actions/Thursday/actions'

const Thursday = ({ thur, removeThurPlan }) => {
    return (
        <li className="plan-item">
            {thur.plan} <button onClick={()=>removeThurPlan(thur.id)}>x</button>
        
        </li>
       
    )
}

export default connect (null, {removeThurPlan})(Thursday)