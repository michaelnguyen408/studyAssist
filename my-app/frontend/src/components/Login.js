import React, { useRef } from 'react'
import { TextField, Box, Button, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


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
  const form = useRef();

  const [values, setValue] = React.useState({
    'user': '',
    'pass': ''
  })
  const handleChange = (value) => (event) => {
    setValue({...values, [value]: event.target.value})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert(values.user + " " + values.pass)
  }

  return (
    // TODO: Sign in with google
    <div className={classes.root}>
      <ValidatorForm
          ref={form}
          onSubmit={onSubmit}
      >
          <Box fontWeight="bold" fontSize={22} className={classes.content}>
            Login
          </Box>
        <TextValidator
          className={classes.content} 
          label="Username / Email" 
          value={values.user}
          validators={['required','isEmail']}
          errorMessages={["This field is required.", "Invalid email address."]}
          onChange={handleChange('user')}
          />
        <TextValidator
          className={classes.content} 
          label="Password" 
          type="password" 
          value={values.pass}
          validators={['required']}
          errorMessages={"This field is required."}
          onChange={handleChange('pass')}
          />
        <Button 
        type='submit' variant="contained" className={classes.button} disableRipple='true' disableElevation='true'>
          Log In
        </Button>
        <Typography variant="h7" className={classes.content}>
          Don't have an account?
        </Typography>
        <Link href="/register" className={classes.content} style= {{color:'rgb(255,0,51)'}}>
          Register here.
        </Link>
      </ValidatorForm>
    </div>
  );
}