import React from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const StyledTitle = styled(Typography)({
  background: 'papayawhip',
  width: "100%",
  color: "palevioletred",
  padding: 20,
  fontFamily: "Times New Roman"
})

export default function Homepage () {

  return (
    <Grid 
    container
    direction="column"
    alignItems="center"
    >
    <StyledTitle variant="h1" align="center">
      studyAssist
    </StyledTitle>
    </Grid>
  )
}