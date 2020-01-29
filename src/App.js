import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom"
import Mainpage from './pages/main'
import error from './pages/404'
import User from './pages/users'

function App() {

  const users = "/users"
  return (
        <Router>
          <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/404" component={error} />
          <Route exact path={users} component={User}/>
          <Redirect to="/404" />
          </Switch>
        </Router>
  );
}

export default App;
