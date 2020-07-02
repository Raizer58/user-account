import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import UserAccount from './components/UserAccount';
import Login from './components/Login';

const App = () => {
  const logged = useSelector((store) => store.user);
  console.log(logged);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserAccount}>
          {!logged && <Redirect to="/login" />}
        </Route>
        <Route exact path="/login" component={Login}>
          {logged && <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
