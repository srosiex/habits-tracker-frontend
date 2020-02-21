import React from 'react';
import { connect } from 'react-redux';
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
  import AllPlans from './AllPlans'
import Monday from '../Components/Monday';


export default function PlansContainer(props){
    const {path, url} = useRouteMatch()

    return(
        
            <center><div className="plans-container">
{/* {/*  */}
                <Link to={`${url}/all`}>View All</Link> 
                <Link to={`${url}/monday`}>Monday</Link>
                <Link to={`${url}/tuesday`}>Tuesday</Link>
                <Link to={`${url}/wednesday`}>Wednesday</Link>
                <Link to={`${url}/thursday`}>Thursday</Link>
                <Link to={`${url}/friday`}>Friday</Link>

                <Switch>

                <Route path={`${path}/all`}>
                        <AllPlans />
                    </Route>
                    
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

                    <Route path={`${path}/friday`}>
                        <FridayContainer />
                    </Route>

                </Switch>
                

{/* 
                <MondayContainer /><TuesdayContainer /><WednesdayContainer /><ThursdayContainer /> */}
            </div></center>
        

    )
}