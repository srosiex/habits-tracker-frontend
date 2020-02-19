import React from 'react';
import { fetchMPlans } from '../Actions/index'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useRouteMatch
  } from 'react-router-dom'
  import Tuesday from '../Components/Tuesday'
  import MondayContainer from './MondayContainer'
  import TuesdayContainer from './TuesdayContainer'
  import WednesdayContainer from './WednesdayContainer'
  import ThursdayContainer from './ThursdayContainer'


export default function PlansContainer(props){
    const {path, url} = useRouteMatch()

    return(
        <Router>
            <div className="plans-container">
                <Link to={`${url}/monday`}>Monday</Link>
                <Link to={`${url}/tuesday`}>Tuesday</Link>
                <Link to={`${url}/wednesday`}>Wednesday</Link>
                <Link to={`${url}/thursday`}>Thursday</Link>
                <Switch>
                    <Route path={`${path}/monday`}>
                        <MondayContainer />
                    </Route>
                    <Route path={`${path}/tuesday`}>
                        <TuesdayContainer />
                    </Route>
                    <Route path={`${path}/wednesday`}>
                        <WednesdayContainer />
                    </Route>
                    <Route path={`${path}/thursday`}>
                        <ThursdayContainer />
                    </Route>

                </Switch>

{/* 
                <MondayContainer /><TuesdayContainer /><WednesdayContainer /><ThursdayContainer /> */}
            </div>
        </Router>

    )
}