import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SignIn from './components/singin/SignIn';
import Chat from './components/chat/Chat';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const handleChange = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <Switch>
            <Route component={SignIn} exact path='/' />
            <Route
              render={(props) => (
                <Chat
                  {...props}
                  handleChange={handleChange}
                  darkMode={darkMode}
                />
              )}
              path='/chat'
            />
          </Switch>
        </ScopedCssBaseline>
      </ThemeProvider>
    </Router>
  );
};

export default App;
