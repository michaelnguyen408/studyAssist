import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { TextField, Box, Button } from '@material-ui/core';

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

export default function Registration () {
  const classes = useStyles();

  return (
    // TODO: Register by google account
    <form>
      <div className={classes.root}>
          <Box fontWeight="bold" fontSize={22} className={classes.content}>
            Registration
          </Box>
        <TextField required 
          className={classes.content} 
          label="Username" />
        <TextField required 
          className={classes.content} 
          label="Email" />
        <TextField required className={classes.content} label="Password" type="password" />
        <Button variant="contained" className={classes.button} disableRipple='true' disableElevation='true'>
          Register
        </Button>
      </div>
    </form>
  );
}