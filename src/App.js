import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Components/UserList'
import Test from './Components/Test'
import Home from './Components/Home'
import routes from './Routes'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {routes}
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route exact path="/Test" component={Test} />
        </Switch>
      </Router> */}
    </div >
  );
}

export default App;
