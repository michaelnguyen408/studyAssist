import React, { useRef } from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { TextField, Box, Button } from '@material-ui/core';
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

export default function Registration () {
  const classes = useStyles();
  const form = useRef();

  const [values, setValue] = React.useState({
    'user':  '',
    'email': '',
    'pass':  '',
  })
  const handleChange = (value) => (event) => {
    setValue({...values, [value]: event.target.value})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert(values.user + " " 
        + values.email + " " 
        + values.pass)
  }

  return (
    // TODO: Register by google account
    
    <div className={classes.root}>
      <ValidatorForm
        ref={form}
        onSubmit={onSubmit}>
          <Box fontWeight="bold" fontSize={22} className={classes.content}>
            Registration
          </Box>
        <TextValidator
          className={classes.content} 
          label="Username" 
          value={values.user}
          validators={['required']}
          errorMessages={"This field is required."}
          onChange={handleChange('user')}
          />
        <TextValidator
          className={classes.content} 
          label="Email" 
          value={values.email}
          validators={['required','isEmail']}
          errorMessages={["This field is required.", "Invalid email address."]}
          onChange={handleChange('email')}
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
        <Button variant="contained" className={classes.button} disableRipple='true' disableElevation='true' type='submit'>
          Register
        </Button>
    </ValidatorForm>
  </div>
  );
}