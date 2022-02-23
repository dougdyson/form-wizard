import React from "react";
import { useState } from "react";

import { Address } from "../Address/Address"
import { PhoneNumbers } from "../PhoneNumbers/PhoneNumbers"

import { Grid, TextField, Button, Typography, Select, MenuItem, Modal, Box } from '@mui/material';
import 'typeface-roboto'
import PhoneNumbers from '../PhoneNumbers/PhoneNumbers';


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
        <PhoneNumbers />
      </Grid>
      <Grid>
        <TextField label="Email" fullsize required></TextField>
      </Grid>
    </Grid>
  )
}