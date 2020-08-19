import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Frontpage from './Components/Frontpage.js'
import KnipJeThuis from './Components/KnipJeThuis.js'

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Frontpage}/>
      </div>
      <Route exact path="/testUrl" component={KnipJeThuis}/>
    </Router>
  );
}

export default App;
