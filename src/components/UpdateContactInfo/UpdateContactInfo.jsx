import React from "react";
import { useState } from "react";

import { Address } from "../Address/Address"

import { Grid, TextField, Button, Typography, Select, MenuItem, Modal, Box } from '@mui/material';
import 'typeface-roboto'


export default function UpdateContactInfo(props){
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
        <TextField item xs="auto" label="Registered Owner Name" fullsize required></TextField>
      </Grid>
      <Grid>
        <Address />
      </Grid>
      <Grid>
        <TextField label="Telephone" fullsize required></TextField>
      </Grid>
      <Grid>
        <TextField label="Fax" fullsize required></TextField>
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