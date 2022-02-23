import React from "react";

import { Grid, TextField } from "@mui/material/";

export default function PersonalInfo(props) {

  return (
    <Grid>
      <Grid>
        <TextField item xs="auto" label="Registered Owner Name" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Email" fullsize required></TextField>
      </Grid>
    </Grid>
  )
}