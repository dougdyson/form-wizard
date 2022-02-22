import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import 'typeface-roboto'

import { entityValidation } from './entityValidation';
import { isUniqueEntityName, addNewEntity } from '../../data/data';


function Entity(props){

  const owner = '04044178226a3132ac6b5c441d839d6cf69d95a8d0d1e0f6eba43498a28a8ea58c8ef889c0ccedc94f5f6467e4caab1776a6867af143b9ba6171b27e6fe96174d1'
  // const address = '04f02b7e8fd5ccc09fb748ddaf00b62782d085c5df59d054cd02f9f55bca6b1efbb5beee1a31ab420d56329eecce6d478826233b941c25961ee3ef66ba12f12b44';

  const [entity, setEntity] = useState({name: "", address: ""})
  const [error, setError] = useState(null);
  const [addressError, setAddressError] = useState(null)
  const [helperText, setHelperText] = useState(' ');
  const [disabled, setDisabled] = useState(true)
  const [addressHelpText, setAddressHelperText] = useState(' ')

  const handleChange = e => {
    // reset any error messaging
    setError(null);
    setAddressError(null)
    setHelperText(' ')
    setAddressHelperText(' ')
    setEntity({...entity, [e.target.name]: e.target.value});
    setDisabled(null)
  }

  const handleBlur = async (e) => {
      entityValidation.validate(entity, {abortEarly: false})
        .then((entity) => {
            setEntity(entity)
        })
        .catch((errors) => {
          const inner = errors.inner;
          
          inner.forEach(item => {
            if( item.path === "name" ) 
            {         
              setError(item);
              setHelperText(item.errors);
            }

            if( item.path === "address" )
            {
              setAddressError(item);
              setHelperText(item.errors);
              setError(true)
            }
          });
          
          setDisabled(true)
          
        }
      );
  }

  const handleClick = () => {

    if (isUniqueEntityName(entity.name)) {
      entity.owner = owner;
      addNewEntity(entity);
      // change state to entity list view
    }
    else if (!isUniqueEntityName(entity.name)){
      setHelperText('Name already in use. Make a new one.')
      setError(true)
      setDisabled(true)
    }
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
        <Typography variant="overline">
          Create Company
        </Typography>
      </Grid>
      <Grid>
        <TextField fullWidth
          name="name" 
          label="Company Name"
          value={entity.name}
          required
          error={error}
          helperText={helperText}
          onChange={handleChange}
          onBlur={handleBlur}
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
          onBlur={handleBlur}
        />
      </Grid>
      <Grid>
        <Button 
          variant="contained" 
          onClick={handleClick}
          disabled={disabled}
        >
        Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default Entity;