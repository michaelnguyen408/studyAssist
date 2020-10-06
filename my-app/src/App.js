import React from 'react';
import LoginPage from "./Login"
import MenuBar from "./MenuBar"
import Homepage from "./Homepage"
import './App.css';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#151515',
    },
    secondary:{
      main: '#FFFFFF',
    } 
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <MenuBar />

        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
