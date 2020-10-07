import React from 'react'
import { TextField, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: theme.spacing.unit * 2
  },
  content: {
    display: 'flex',
    maxWidth: 450,
    marginLeft: 'auto',
    marginRight: 'auto',
  }, 
  label: {
    fontSize: 50
  },
  button: {
    display: 'flex',
    maxWidth: 450,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    backgroundColor: 'rgb(255,0,51)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black',
    }
  }
}));

export default function  LoginPage () {
  const classes  = useStyles();

  return (
    <form>
      <div className={classes.root}>
          <Box fontWeight="bold" fontSize={22} className={classes.content}>
            Login
          </Box>
        <TextField required 
          className={classes.content} 
          label="Username / Email" />
        <TextField required className={classes.content} label="Password" type="password" />
        <Button variant="contained" className={classes.button} disableRipple='true' disableElevation='true'>
          Log In
        </Button>
      </div>
    </form>
  );
}