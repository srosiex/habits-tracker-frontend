import React, { Component } from 'react'
import DayContainer from './DayContainer'

export class AllPlans extends Component {



    render(){
        
        
        return (
            
        <div className="plans-container">
            <DayContainer day="Monday" />
            <DayContainer day="Tuesday" />
            <DayContainer day="Wednesday" />
            <DayContainer day="Thursday" />
            <DayContainer day="Friday" />
            
    
        </div>

        )
        
    }}


export default AllPlans
