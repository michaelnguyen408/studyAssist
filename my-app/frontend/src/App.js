import React from 'react';
import Login from "./components/Login"
import MenuBar from "./components/MenuBar"
import Homepage from "./components/Homepage"
import Registration from './components/Registration'
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    <ThemeProvider theme={theme}>
      <div>
        <MenuBar />

        {/* <Homepage /> */}
        {/* <Login /> */}
        <Registration />
      </div>
    </ThemeProvider>
  );
}

export default App;
