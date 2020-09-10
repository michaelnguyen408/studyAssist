import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Typography, Button, Grid, Box, Hidden, Icon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer'
import CakeIcon from '@material-ui/icons/Cake';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    color: 'rgb(255,0,51)',
    scale: 5
  },
  title: {
    padding: 7,
  },
  toolbar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 960,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1280,
    },
  },
  burger: {
    color: 'white',
  },
  login: {
    textTransform: 'none',
    fontSize: 16,
  }
}));

const LogoButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
})(Button);

export default function MenuBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar} elevation={0} color="primary">
        <Toolbar className={classes.toolbar}>
              <Grid container spacing={1} 
                // justify="center"
              >
                <Grid item>
                  <LogoButton disableRipple>
                    <CakeIcon fontSize='large' className={classes.icon}/>
                    <Typography className={classes.title} variant="h4" color="secondary">
                      <Box fontWeight="fontWeightBold">
                        studyAssist
                      </Box>
                    </Typography>
                  </LogoButton>
                </Grid>
              </Grid>
            <Hidden smDown>
              <Button color="secondary" variant='outlined' disableRipple='true'>
                <Typography className={classes.login} variant="caption">
                  Login
                </Typography>
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton edge='end'>
                <MenuIcon className={classes.burger} />
              </IconButton>
            </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}