import React from 'react';
import { useState } from 'react';
import {Grid, TextField, Button } from '@mui/material';

import { entityValidation } from './entityValidation';

function Entity(){

  const [entity, setEntity] = useState({name: ""})
  const [error, setError] = useState(null);

  const handleChange = e => {
    setEntity({...entity, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    entityValidation.validate(entity)
      .then((entity) => setError())
      .catch((error) => setError(error.message));
  }

  return (
    <Grid>
      <form>
        <p>{error}</p>
        <TextField name="name" label="name" value={entity.name} onChange={handleChange}></TextField>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </form>
    </Grid>
  )
}

export default Entity;