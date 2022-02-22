import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import 'typeface-roboto'

import { entityValidation } from './entityValidation';
// import { addNewEntity } from '../../data/data';


function Entity(props){

  // const address = '04f02b7e8fd5ccc09fb748ddaf00b62782d085c5df59d054cd02f9f55bca6b1efbb5beee1a31ab420d56329eecce6d478826233b941c25961ee3ef66ba12f12b44';

  const [entity, setEntity] = useState({name: "", address: ""})
  const [error, setError] = useState(null);
  const [addressError, setAddressError] = useState(null)
  const [helperText, setHelperText] = useState(' ');
  const [disabled, setDisabled] = useState(true)
  const [addressHelpText, setAddressHelperText] = useState(' ')

  const handleChange = e => {
    console.log(e.target.name);
    // reset any error messaging
    setError(null);
    setAddressError(null)
    setHelperText(' ')
    setAddressHelperText(' ')
    setEntity({...entity, [e.target.name]: e.target.value});
    setDisabled(null)
  }

  const handleSubmit = async () => {
    entityValidation.validate(entity)
      .then((entity) => {
          // entity.owner = props.address
          setEntity(entity)
      })
      .catch((errors) => {
        console.log(errors);
        setError(errors)
        setDisabled(true)
        setHelperText(errors.message)
      }
    );
  }

  return (
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
        <TextField fullWidth
          name="name" 
          label="Company Name"
          value={entity.name}
          required
          error={error}
          helperText={helperText}
          onChange={handleChange}
          onBlur={handleSubmit}
        />
      </Grid>
      <Grid>
        <TextField fullWidth
          error={addressError}
          name="address" 
          label="Wallet Address"
          value={entity.address}
          required
          helperText={addressHelpText}
          onChange={handleChange}
          onBlur={handleSubmit}
        />
      </Grid>
      <Grid>
        <Button 
          variant="contained" 
          onClick={handleSubmit}
          disabled={disabled}
        >
        Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default Entity;