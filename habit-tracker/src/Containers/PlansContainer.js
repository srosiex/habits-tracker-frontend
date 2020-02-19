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


export default function PlansContainer(props){
    const {path, url} = useRouteMatch()

    return(
        <Router>
            <div>
                <Link to={`${url}/monday`}>Monday</Link>
                <Link to={`${url}/tuesday`}>Tuesday</Link>

                <Switch>
                    <Route path={`${path}/monday`}>
                        <MondayContainer />
                    </Route>
                    <Route path={`${path}/tuesday`}>
                        <Tuesday />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}