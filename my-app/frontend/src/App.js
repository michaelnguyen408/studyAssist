import React from 'react';
import Login from "./components/Login"
import MenuBar from "./components/MenuBar"
import Homepage from "./components/Homepage"
import Registration from './components/Registration'
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#151515',
    },
    secondary:{
      main: '#FFFFFF',
    },
  },
});

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <MenuBar />

          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registration} />
          </Switch>
          {/* <Homepage /> */}
          {/* <Login /> */}
          {/* <Registration /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
