import React from "react";
import { useState, useEffect} from "react";
import { Grid, TextField } from "@mui/material";

export default function Address(props) {

  return (
    <Grid>
      <Grid>
        <TextField label="Address 1" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Address 2" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="City" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="State" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Country" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Zip Postal Code" fullsize required></TextField>
      </Grid>
    </Grid>
  )
}