import React from 'react';
import LoginPage from "./Login"
import MenuBar from "./MenuBar"
import Homepage from "./Homepage"
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {  Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: 15,
    align: "center"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <MenuBar />
      <Homepage />
      <Grid 
        container 
        className={classes.grid}
        alignItems="center" 
        justify="center" 
        spacing="10"
      >
        <Grid item xl={2}>
          <Paper elevation={0}>
            <Typography variant="h4" align="center">
              breh
            </Typography>
          </Paper>
        </Grid>
        <Grid item xl={2}>
          <Paper elevation={0}>
            <Typography variant="h4" align="center">
              breh
            </Typography>
          </Paper>
        </Grid>
        <Grid item xl={2}>
          <Paper elevation={0}>
            <Typography variant="h4" align="center">
              breh
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
