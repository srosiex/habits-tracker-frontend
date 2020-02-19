import React from 'react'
import { connect } from 'react-redux'
import { removeMonPlan } from '../Actions/index'

const Monday = ({ mon, removeMonPlan }) => {
    return (
        <li className="collection-item">
            {mon.plan} <button onClick={()=>removeMonPlan(mon.id)}>x</button>
        </li>
        
    )
}

export default connect (null, {removeMonPlan})(Monday)