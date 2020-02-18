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
  import Monday from '../Components/Monday'
  import Tuesday from '../Components/Tuesday'


export default function MonContainer(props){
    const {path, url} = useRouteMatch()

    return(
        <Router>
            <div>
                <Link to={`${url}/monday`}>Monday</Link>
                <Link to={`${url}/tuesday`}>Tuesday</Link>

                <Switch>
                    <Route path={`${path}/monday`}>
                        <Monday />
                    </Route>
                    <Route path={`${path}/tuesday`}>
                        <Tuesday />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}