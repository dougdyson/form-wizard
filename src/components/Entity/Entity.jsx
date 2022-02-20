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
      style={{ padding: 10 }}
    >
      <form>
        <Grid style={{ padding: 10 }}>
          <TextField
            name="name" 
            label="Company Name" 
            value={entity.name}
            helperText={error ? error : ' '}
            className={"form-label"}
            onChange={handleChange}>
          </TextField>
        </Grid>
        <Grid
          style={{ padding: 20 }}
        >
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </form>
    </Grid>
  )
}

export default Entity;