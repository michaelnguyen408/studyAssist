import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './stock-photo.jpg'
import { Paper, Typography, Box, Card, CardContent, createMuiTheme, responsiveFontSizes, ThemeProvider, Button, CardMedia, Container, CssBaseline } from '@material-ui/core';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';

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
      backgroundColor: 'rgb(255,0,51)',
    }
  },
}));

export default function Homepage () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* <CssBaseline/> */}
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
            <Button className={classes.button} variant='contained' disableRipple="true" disableElevation='true'>
              Get Started
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}