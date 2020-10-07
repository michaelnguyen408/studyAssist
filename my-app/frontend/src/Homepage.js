import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './stock-photo.jpg'
import { Paper, Typography, Box, Card, CardContent, createMuiTheme, responsiveFontSizes, ThemeProvider, Button, CardMedia, Container, CssBaseline } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headline: {
    fontSize: 50,
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  container: {
    marginTop: 100,
    marginBottom: 100,
  }
}));

export default function Homepage () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline/>
      <Container className={classes.container} maxWidth='xl' disableGutters='true'>
        <Typography className={classes.headline}>
          Bruh
        </Typography>
      </Container>
    </div>
  )
}