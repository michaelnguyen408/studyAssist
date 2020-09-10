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
      // main: 'rgb(219,112,147)'
      main: 'rgb(21,21,21)'
    },
    secondary: {
      // main: 'rgb(255, 239, 213)'
      main: 'rgb(255,255,255)'
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <style>{'body { background-color: papayawhip; }'}</style>
        </Helmet>

        <MenuBar />

        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
