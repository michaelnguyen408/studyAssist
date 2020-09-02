import React from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    align: "center"
  },
}));

const StyledTitle = styled(Typography)({
  background: 'papayawhip',
  width: "100%",
  color: "palevioletred",
  padding: 20,
  fontFamily: "Times New Roman"
})

export default function Homepage () {
  const classes = useStyles

  return (
    <Grid 
    container
    direction="column"
    alignItems="center"
    >
      <StyledTitle variant="h1" align="center">
        studyAssist
      </StyledTitle>

      <Grid 
        container 
        className={classes.grid}
        alignItems="center" 
        justify="center" 
        spacing="10"
      >
        <Grid item xl={2}>
          <Paper elevation={0}>
            <Typography variant="h4" align="center">
              breh
            </Typography>
          </Paper>
        </Grid>
        <Grid item xl={2}>
          <Paper elevation={0}>
            <Typography variant="h4" align="center">
              breh
            </Typography>
          </Paper>
        </Grid>
        <Grid item xl={2}>
          <Paper elevation={0}>
            <Typography variant="h4" align="center">
              breh
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}