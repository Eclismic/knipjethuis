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
import Subscription from './Components/Subscription'
import UseFormSubscriptionCustomer from './Components/UserFormSubscriptionCustomer'


const App = () => {

  

  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Frontpage}/>
      </div>
      <Route exact path="/cut@home-request" component={KnipJeThuis}/>
      <Route exact path="/cut@salon-request" component={KnipJeBijSalon}/>
      <Route exact path="/subscribe" component={Subscription}/>
      <Route exact path="/subscription-customer" component={UseFormSubscriptionCustomer}/>
    </Router>
  );
}

export default App;
