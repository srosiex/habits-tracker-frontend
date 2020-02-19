import React from 'react'
import { connect } from 'react-redux'
import { removeWedPlan } from '../Actions/Wednesday/actions'

const Wednesday = ({ wed, removeWedPlan }) => {
    return (
        <li className="plan-item">
            {wed.plan} <button onClick={()=>removeWedPlan(wed.id)}>x</button>
        
        </li>
       
    )
}

export default connect (null, {removeWedPlan})(Wednesday)