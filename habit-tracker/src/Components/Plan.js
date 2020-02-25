import React from 'react'
import { connect } from 'react-redux'
import { removePlan } from '../Actions/index'

const Plan = ({ plan, removePlan, day }) => {
    return (
        <li className="plan-item">
            {plan.plan} <button onClick={()=>removePlan(day, plan.id)}>x</button>
        
        </li>
       
    )
}

export default connect (null, {removePlan})(Plan)