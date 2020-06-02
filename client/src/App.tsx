import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import SignIn from './components/singin/SignIn';
import Chat from './components/chat/Chat';

function App() {
  return (
    <Router>
      <ScopedCssBaseline>
        <Switch>
          <Route component={SignIn} exact path='/' />
          <Route component={Chat} path='/chat' />
        </Switch>
      </ScopedCssBaseline>
    </Router>
  );
}

export default App;
