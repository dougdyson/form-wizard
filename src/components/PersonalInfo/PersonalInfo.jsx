import React from "react";

import { Grid, TextField } from "@mui/material/";

export default function PersonalInfo(props) {

  return (
    <Grid>
      <Grid>
        <TextField xs="auto" label="Registered Owner Name"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Email"  required></TextField>
      </Grid>
    </Grid>
  )
}