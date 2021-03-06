import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Typography, Button, Grid, Box, Hidden,  List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Link } from 'react-router-dom';

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
  },
  drawer: {
    width: 300,
    backgroundColor: 'black'
  },
  btn: {
    marginLeft: 10,
    '&:hover': {
      color: 'white'
    }
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
  const [state, setState] = React.useState({
    right: false,
  });
  const list = ['Login', 'Register']
  const link = ['/login', '/register']
  
  const toggleDrawer = (open) => {
    setState({...state, right: open});
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar} elevation={0} color="primary">
        <Toolbar className={classes.toolbar}>
              <Grid container spacing={1} 
                // justify="center"
              >
                <Grid item>
                    <LogoButton disableRipple component={Link} to='/'>
                      <DeleteRoundedIcon fontSize='large' className={classes.icon}/>
                      <Typography className={classes.title} variant="h5" color="secondary">
                        <Box fontWeight="fontWeightBold" fontSize={22}>
                          studyAssist
                        </Box>
                      </Typography>
                    </LogoButton>
                </Grid>
              </Grid>
            <Hidden smDown>
              <Button  
                className={classes.btn} 
                component={Link} to="/login"
                color="secondary" variant='outlined' disableRipple='true'>
                <Typography className={classes.login} variant="caption">
                  Login
                </Typography>
              </Button>
              <Button 
                className={classes.btn} 
                component={Link} to="/register"
                color='secondary' variant='outlined' disableRipple='true'>
                <Typography className={classes.login} variant="caption">
                  Register
                </Typography>
              </Button>
            </Hidden>
            <Hidden mdUp>
            <React.Fragment>
              <IconButton edge='end'>
                <MenuIcon className={classes.burger} onClick={() => toggleDrawer(true)} />
              </IconButton>
            </React.Fragment>
            </Hidden>
        </Toolbar>
      </AppBar>

      <Toolbar />
      
      <Drawer
      anchor='right'
      open={state['right']}
      onClose={() => toggleDrawer(false)}
      classes={{paper: classes.drawer}}
      >
        <div
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            {list.map((text, index) => (
              <ListItem button key={text} component={Link} to={link[index]}>
                <ListItemIcon />
                <ListItemText>
                  <Box fontWeight="fontWeightBold" color="white" fontSize={32}>
                    {text}
                  </Box>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}