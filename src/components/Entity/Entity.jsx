import React from 'react';
import { useState } from 'react';
import {Grid, TextField, Button } from '@mui/material';

import { entityValidation } from './entityValidation';
// import { addNewEntity } from '../../data/data';


function Entity(){

  const [entity, setEntity] = useState({name: ""})
  const [error, setError] = useState(null);

  const handleChange = e => {
    setEntity({...entity, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    entityValidation.validate(entity)
      .then((entity) => {
        setEntity(entity)
        console.log(entity)
      })
      .catch((error) => {
        setError(error.message)
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
      <form>
        <Grid>
          <TextField
            name="name" 
            label="Name" 
            value={entity.name}
            helperText={error}
            onChange={handleChange}>
          </TextField>
        </Grid>
        <Grid>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </form>
    </Grid>
  )
}

export default Entity;