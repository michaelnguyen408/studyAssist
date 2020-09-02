import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Typography, Button, Divider, Grid, Link } from '@material-ui/core';
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
    color: "palevioletred",
  },
  logo: {
    flexGrow: 1,
    align: 'center'
  },
  title: {
    // flexGrow: 1,
    color: "palevioletred",
    fontFamily: "Times New Roman",
  },
}));

export default function MenuBar () {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar} elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link href="#" onClick={preventDefault} className={classes.logo} color="inherit" underline="none">
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <CakeIcon fontSize='large' />
              </Grid>
              <Grid item>
                <Typography className={classes.title} variant="h4">
                  studyAssist
                </Typography>
              </Grid>
            </Grid>
          </Link>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
    </div>
  );
}