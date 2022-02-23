import React from "react";
import { useState } from "react";

import { PersonalInfo } from "../PersonalInfo/PersonalInfo.stories";
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
        <PersonalInfo />
      </Grid>
      <Grid>
        <Address />
      </Grid>
      <Grid>
        <PhoneNumbers />
      </Grid>
    </Grid>
  )
}