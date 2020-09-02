import React from 'react';
import LoginPage from "./Login"
import MenuBar from "./MenuBar"
import Homepage from "./Homepage"
import './App.css';
import { Helmet } from 'react-helmet';

function App() {

  return (
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
  );
}

export default App;
