import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useRouteMatch
  } from 'react-router-dom'

  import MondayContainer from './MondayContainer'
  import TuesdayContainer from './TuesdayContainer'
  import WednesdayContainer from './WednesdayContainer'
  import ThursdayContainer from './ThursdayContainer'
  import FridayContainer from './FridayContainer'



export class AllPlans extends Component {



    render(){
        
        //    const mons = this.mons.map(p => p.plan)
     
        
        return (
            
        <div className="plans-container">
            <MondayContainer />
            <TuesdayContainer />
            <WednesdayContainer />
            <ThursdayContainer />
            <FridayContainer />
        </div>

        )
        
    }}


        
    


export default AllPlans
