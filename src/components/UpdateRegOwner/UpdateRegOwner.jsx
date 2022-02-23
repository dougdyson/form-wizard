import React from "react";
import { useState } from "react";

import { Grid, TextField, Button, Typography, Select, MenuItem, Modal, Box } from '@mui/material';
import 'typeface-roboto'


export default function UpdateRegOwner(){
  return(
    <Grid 
      container
      component={"form"} 
      noValidate 
      autoComplete='off'
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Grid>
        <TextField label="Registered Owner Name" fullsize required></TextField>
      </Grid>
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
      <Grid>
        <TextField label="Telephone" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Mobile" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Email" fullsize required></TextField>
      </Grid>
    </Grid>
  )
}