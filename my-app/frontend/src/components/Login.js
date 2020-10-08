import React, { useRef } from 'react'
import { TextField, Box, Button, Typography, Link } from '@material-ui/core';
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
  const username = useRef(null);
  const password = useRef(null);
  
  const onSubmit = (event) => {
    event.preventDefault();
    alert(username.current.value + " " + password.current.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.root}>
          <Box fontWeight="bold" fontSize={22} className={classes.content}>
            Login
          </Box>
        <TextField required 
          className={classes.content} 
          label="Username / Email" 
          inputRef={username}
          />
        <TextField required 
          className={classes.content} 
          label="Password" 
          type="password" 
          inputRef={password}
          />
        <Button variant="contained" className={classes.button} disableRipple='true' disableElevation='true'>
          Log In
        </Button>
        <Typography variant="h7" className={classes.content}>
          Don't have an account?
        </Typography>
        <Link href="/register" className={classes.content} style= {{color:'rgb(255,0,51)'}}>
          Register here.
        </Link>
      </div>
    </form>
  );
}