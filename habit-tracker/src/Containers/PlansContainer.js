import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useRouteMatch
  } from 'react-router-dom'
  import DayContainer from './DayContainer'
  import AllPlans from './AllPlans'



export default function PlansContainer(props){
    const {path, url} = useRouteMatch()

    return(
        
            <center><div className="plans-container">
{/* {/*  */}
        <div className="plans_links">
                <Link className="plink" to={`${url}/all`}>View All</Link>  
                <Link className="plink"  to={`${url}/monday`}>Monday</Link>  
                <Link className="plink"  to={`${url}/tuesday`}>Tuesday</Link>  
                <Link className="plink"  to={`${url}/wednesday`}>Wednesday</Link>  
                <Link className="plink" to={`${url}/thursday`}>Thursday</Link>  
                <Link className="plink" to={`${url}/friday`}>Friday</Link>
                </div>

                <Switch>

                <Route path={`${path}/all`}>
                        <AllPlans />
                    </Route>
                    
                    <Route path={`${path}/monday`}>
                        <DayContainer day="Monday" />
                    </Route>

                     <Route path={`${path}/tuesday`}>
                        <DayContainer day="Tuesday"/>
                    </Route>

                    <Route path={`${path}/wednesday`}>
                    <DayContainer day="Wednesday"/>
                    </Route>

        

                    <Route path={`${path}/thursday`}>
                    <DayContainer day="Thursday"/>
                    </Route>

                    <Route path={`${path}/friday`}>
                    <DayContainer day="Friday"/>                    </Route> 

                </Switch>
                
               
            </div></center>
        

    )
}