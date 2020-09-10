import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Typography, Button, Divider, Grid } from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    backgroundColor: 'rgba(255, 239, 213, 0.9)',
    // color: "palevioletred",
  },
  logo: {
    flexGrow: 1,
    maxWidth: 200,
    textAlign: 'center'
  },
  title: {
    padding: 7,
    color: "palevioletred",
    fontFamily: "Times New Roman",
  },
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
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Grid container spacing={1} justify="center">
              <Grid item>
                <LogoButton disableRipple>
                  <CakeIcon fontSize='large' color="primary"/>
                  <Typography className={classes.title} variant="h4">
                    studyAssist
                  </Typography>
                </LogoButton>
              </Grid>
            </Grid>
          <Button color="primary">
            Login
          </Button>
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
    </div>
  );
}