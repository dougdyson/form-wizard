import React from "react";
import { useState } from "react";
import { Grid, TextField } from '@mui/material/';

export default function PhoneNumbers(props) {

  return(
    <Grid>
      <Grid>
        <TextField label="Telephone" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Fax" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Mobile" fullsize required></TextField>
      </Grid>
    </Grid>
  )

}