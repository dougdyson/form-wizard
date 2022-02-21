import React from 'react';
import { useState } from 'react';
import {Grid, TextField, Button } from '@mui/material';
import 'typeface-roboto'

import { entityValidation } from './entityValidation';
// import { addNewEntity } from '../../data/data';
// import { Typography } from '@mui/material/';


function Entity(){

  const [entity, setEntity] = useState({name: ""})
  const [error, setError] = useState(null);
  const [helperMessage, setHelperMessage] = useState(null);

  const handleChange = e => {
    setError(null)
    setHelperMessage(null)
    setEntity({...entity, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    entityValidation.validate(entity)
      .then((entity) => {
          setEntity(entity)
      })
      .catch((error) => {
        setError(error)
        setHelperMessage(error.message)
      }
    );
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid component={"form"} noValidate autoComplete='off' >
        <TextField
          name="name" 
          label="Company Name"
          required
          error={error ? error : null}
          value={entity.name}
          helperText={helperMessage}
          fullWidth
          onChange={handleChange}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Grid>
    </Grid>
  )
}

export default Entity;