import React from "react";
import { useState, useEffect} from "react";
import { Grid, TextField } from "@mui/material";

export default function Address(props) {

  return (
    <Grid>
      <Grid>
        <TextField label="Address 1"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Address 2"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="City"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="State"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Country"  required></TextField>
      </Grid>
      <Grid>
        <TextField label="Zip Postal Code"  required></TextField>
      </Grid>
    </Grid>
  )
}