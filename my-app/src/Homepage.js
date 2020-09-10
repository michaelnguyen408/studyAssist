import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './stock-photo.jpg'
import { Paper, Typography, Box, Card, CardContent, createMuiTheme, responsiveFontSizes, ThemeProvider, Button, CardMedia, Container } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
    background: "rgb(231,205,167)",
  },
  cardContents: {
    padding: 200,
    [theme.breakpoints.down('md')]: {
      padding: 100,
    },
  },
  button: {
    backgroundColor: "papayawhip",
    color: "palevioletred",
    padding: 15
  },
  media: {
    height: '20%',
  },
}));

export default function Homepage () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <Grid container justify="center">
        <Grid item xs={12} md={6} lg={6} elevation={0}
          component={Card} className={classes.card}>
            <CardContent className={classes.cardContents}>
              <Typography variant="h4" component="h6">
                <Box fontWeight="fontWeightBold" my={4} mx="auto">
                Whoops, I dropped my monster condom that I use for my magnum dong.
                </Box>
                <Box mx={20} mb={5}>
                - Albert Einstein
                </Box>
              </Typography>
              <Box  mx={20}>
                <Button className={classes.button} variant="outlined">
                  <Typography variant="h5">
                    <Box marginLeft={3} marginRight={3}>
                      Get Started
                    </Box>
                  </Typography>
                </Button>
              </Box>
            </CardContent>
        </Grid>
        <Grid item xs={12} md={6} lg={6} elevation={0}
          component={Card} className={classes.card} 
          style={{ background: 'papayawhip', padding:0, alignItems:'center' }}>
            <CardMedia
              height="500"
              component="img"
              image={img}
            />
            <CardContent>
              <Typography variant="h5">
                <Box fontWeight="fontWeightBold" marginTop={4}>
                  Lorem ipsum bing bong ding dong
                </Box>
              </Typography>
              <Typography variant="h5" align="center">
                <Box fontWeight="fontWeightLight" marginBottom={4}>
                What's in your wallet?
                </Box>
              </Typography>
            </CardContent>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} elevation={0} component={Card} style={{height: 500}}>

        </Grid>
      </Grid>
      </ThemeProvider>
    </div>
  )
}