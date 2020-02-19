import React from 'react'
import { connect } from 'react-redux'
import { removeTuesPlan } from '../Actions/Tuesday/actions'

const Tuesday = ({ tue, removeTuesPlan }) => {
    return (
        <li className="plan-item">
            {tue.plan} <button onClick={()=>removeTuesPlan(tue.id)}>x</button>
        
        </li>
       
    )
}

export default connect (null, {removeTuesPlan})(Tuesday)