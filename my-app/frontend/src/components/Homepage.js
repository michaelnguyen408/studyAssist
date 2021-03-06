import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography,  createMuiTheme, responsiveFontSizes, ThemeProvider, Button } from '@material-ui/core';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import { Link } from 'react-router-dom';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 300,
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    background: 'rgb(255,0,51)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },
}));

export default function Homepage () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid container 
          alignItems='center'
          justify='center'
          spacing={0}
          direction='column'>
          <Grid item>
            <DirectionsRunRoundedIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <Typography variant='h4'>
              Transferring has never been this easy.
            </Typography>
          </Grid>
          <Grid item>
            <Button 
              className={classes.button} 
              component={Link} to='/login'
              variant='contained' disableRipple="true" disableElevation='true'>
              Get Started
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}