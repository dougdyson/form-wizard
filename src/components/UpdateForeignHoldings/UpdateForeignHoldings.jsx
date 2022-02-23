import React from "react";
import { useState } from "react";

import { Grid, TextField, Button, Typography, Select, MenuItem, Modal, Box } from '@mui/material';
import 'typeface-roboto'

export default function(props) {
  return(
    <Grid
      container
      noValidate 
      autoComplete='off'
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Grid>
        <TextField item xs="auto" label="Amount Invested In-Country" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Date Assessed" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Industry Dropdown" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="I Hereby Checkbox" fullsize required></TextField>
      </Grid>
    </Grid>
  )
}
