import React from 'react'
import { connect } from 'react-redux'
import { removeFriPlan } from '../Actions/Friday/actions'

const Friday = ({ fri, removeFriPlan }) => {
    return (
        <li className="plan-item">
            {fri.plan} <button onClick={()=>removeFriPlan(fri.id)}>x</button>
        
        </li>
       
    )
}

export default connect (null, {removeFriPlan})(Friday)