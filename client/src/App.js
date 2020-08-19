import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Frontpage from './Components/Frontpage'
import KnipJeThuis from './Components/KnipJeThuis'
import KnipJeBijSalon from './Components/KnipJeBijSalon'
import Login from './Components/Login'

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Frontpage}/>
      </div>
      <Route exact path="/cut@home-request" component={KnipJeThuis}/>
      <Route exact path="/cut@salon-request" component={KnipJeBijSalon}/>
      <Route exact path="/cut@home-request" component={KnipJeThuis}/>
      <Route exact path="/login" component={Login}/>
    </Router>
  );
}

export default App;
