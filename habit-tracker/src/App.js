import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlansContainer from './Containers/PlansContainer'
import HabitsContainer from './Containers/HabitsContainer'
import HomeContainer from './Containers/HomeContainer'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'


function App() {
  return (
  
     <Router>
       <div className="App">
       <Link to={`/plans`}>Plans</Link>
       <Link to={`/habits`}>Habits</Link>
       <hr />

       <Switch>
  
        <Route path={`/habits`}>
          <HabitsContainer />
        </Route>
        <Route path={'/plans'}>
          <PlansContainer />
        </Route>

       </Switch>
     </div>
     </Router>


 
  );
}

export default App;
