import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import 'typeface-roboto'

import { entityValidation } from './entityValidation';
// import { addNewEntity } from '../../data/data';


function Entity(props){

  const address = '04f02b7e8fd5ccc09fb748ddaf00b62782d085c5df59d054cd02f9f55bca6b1efbb5beee1a31ab420d56329eecce6d478826233b941c25961ee3ef66ba12f12b44';
  console.log(address.length);

  const [entity, setEntity] = useState({name: "", address: address})
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState(' ');

  const handleChange = e => {
    setError(null)
    setHelperText(' ')
    setEntity({...entity, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    entityValidation.validate(entity)
      .then((entity) => {
          entity.owner = props.address
          console.log(entity);
          setEntity(entity)
      })
      .catch((error) => {
        setError(error)
        setHelperText(error.message)
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
        />
      </Grid>
      <Grid>
        <TextField fullWidth
          name="address" 
          label="Wallet Address"
          value={entity.address}
          required
          error={error}
          helperText={helperText}
          onChange={handleChange}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default Entity;