import React from "react";
import { useState } from "react";

import { Grid, TextField } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
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
        <TextField xs="auto" label="Amount Invested In-Country"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Date Assessed"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Industry Dropdown"  required></TextField>
      </Grid>
    </Grid>
  )
}
