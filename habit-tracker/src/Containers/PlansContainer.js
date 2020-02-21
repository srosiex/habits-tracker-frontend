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