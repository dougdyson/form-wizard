import React from "react";

import { Grid, TextField } from '@mui/material/';

export default function PhoneNumbers(props) {

  return(
    <Grid>
      <Grid>
        <TextField label="Telephone"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Fax"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Mobile"  required></TextField>
      </Grid>
    </Grid>
  )
}