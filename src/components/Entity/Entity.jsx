import React from 'react';
import { useState } from 'react';
import {Stack, TextField, Button } from '@mui/material';

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
    <Stack>
      <form>
        <div>
          <TextField
            name="name" 
            label="Name" 
            value={entity.name}
            helperText={error}
            onChange={handleChange}>
          </TextField>
        </div>
        <div>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </Stack>
  )
}

export default Entity;