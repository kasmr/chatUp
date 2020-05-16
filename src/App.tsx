import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path='/login' />
        <Route component={Dashboard} path='/dashboard' />
      </Switch>
    </Router>
  );
}

export default App;
