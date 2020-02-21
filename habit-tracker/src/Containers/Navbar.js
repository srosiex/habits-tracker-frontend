import React from 'react'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'


const link = {

}


export default class Navbar extends React.Component{
    render(){
        return(
        
            <div className="navbar">
                Habits Tracker <br />
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`/plans`}>Plans</NavLink>
            <NavLink to={`/habits`}>Habits</NavLink>
            <br />

          </div>
      





        )
    }


}