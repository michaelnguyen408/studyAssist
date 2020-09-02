import React from 'react'
// import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: theme.spacing.unit * 2
  },
  or: {
    textAlign: 'center'
  }
}));

export default function  LoginPage () {
  const classes  = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
      >
        <Grid item>
          <Paper variant="outlined" elevation={5}>
            Taco
          </Paper>
        </Grid> 
      </Grid>
    </div>
  );
}