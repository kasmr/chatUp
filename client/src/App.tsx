import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/singin/SignIn';
import SignUp from './components/signup/SignUp';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <ScopedCssBaseline>
        <Switch>
          <Route component={SignIn} path='/signin' />
          <Route component={Chat} path='/chat' />
          <Route component={Dashboard} path='/dashboard' />
        </Switch>
      </ScopedCssBaseline>
    </Router>
  );
}

export default App;
