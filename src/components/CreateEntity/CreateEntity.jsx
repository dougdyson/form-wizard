import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button, Typography, Select, MenuItem, Modal, Box } from '@mui/material';
import 'typeface-roboto'

import { entityValidation, entitySubmitValidation } from './entityValidation';
import { addNewEntity, allJurisdictions } from '../../data/data';
// import { isUniqueEntityName, isUniqueWallet } from '../../data/data';

function Entity(props) {

  // hardcoded userID while no user profile
  const owner = '04044178226a3132ac6b5c441d839d6cf69d95a8d0d1e0f6eba43498a28a8ea58c8ef889c0ccedc94f5f6467e4caab1776a6867af143b9ba6171b27e6fe96174d1';

  const initialState = {name: "", address: "", jurisdictionID: ""}
  const [entity, setEntity] = useState(initialState);
  const [error, setError] = useState(null);
  const [addressError, setAddressError] = useState(null)
  const [helperText, setHelperText] = useState(' ');
  const [disabled, setDisabled] = useState(true)
  const [addressHelperText, setAddressHelperText] = useState(' ');

  const handleBlur = async (e) => {

    // nothing to validate
    if (e.target.value.length === 0) {
      return
    }

    if (e.target.name === "name")
    {
      setAddressHelperText(' ');
    }

    if (e.target.name === "address")
    {
      setHelperText(' ');
    }
      
    entityValidation.validate(entity, {abortEarly: false})
      .then((entity) => {
          setEntity(entity)
      })
      .catch((errors) => {
        
        errors.inner.forEach(item => {
          if( item.path === "name" ) 
          {         
            setError(true);
            setHelperText(item.errors);
          }

          if( item.path === "address" )
          {
            setAddressError(true);
            setAddressHelperText(item.errors);
          }
        });
        
        setDisabled(true);
        
      }
    );
  }

  const handleChange = (e) => {
    setEntity({...entity, [e.target.name]: e.target.value});
    setDisabled(null)
  }
  
  const handleClick = (e) => {

    // validate fields
    entitySubmitValidation.validate(entity, {abortEarly: false})
      .then((entity) => {
          setEntity(entity)
      })
      .catch((errors) => {
        
        errors.inner.forEach(item => {
          if( item.path === "name" ) 
          {         
            setError(true);
            setHelperText(item.errors);
          }

          if( item.path === "address" )
          {
            setAddressError(true);
            setAddressHelperText(item.errors);
          }
        });
        
        setDisabled(true);
        
      }
    );

    // check for unique name
    // check for unique wallet
    
    if (error === null && addressError === null)
    {
      // get owner from props or context
      // entity.owner = props.owner
      
      entity.owner = owner;
      const newData = addNewEntity(entity);
      props.setEntities(prevState => [newData, ...prevState]);
      setEntity(initialState);
      props.toggleModal();
      // open entity list component
    }
    setDisabled(true);
    e.preventDefault();
  }

  const handleFocus = (e) => {
    if (e.target.name === "name")
    {
      setError(null);
      setHelperText('Company Name is 3-40 characters')
      
      if (!addressError) 
      {
        setAddressHelperText(' ')
      }
    }
    if (e.target.name === "address")
    {
      setAddressError(null)
      setAddressHelperText('Wallet Address is 5 characters')
      if (!error) {
        setHelperText(' ')
      }
    }
  }
  
  // toggle for modal used for creating new entity
  const {showModal, toggleModal} = props;

  // used to customize modal styling
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
      <Modal open={showModal} onClose={toggleModal}>
        <Box sx={style}>
          <Grid>
            <Typography variant="overline">
              Create
            </Typography>
          </Grid>
          <Grid>
            <TextField fullWidth
              name="name" 
              label="Company Name"
              value={entity.name}
              required
              autoComplete='off'
              error={error}
              helperText={helperText}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </Grid>
          <Grid>
            <TextField fullWidth
              error={addressError}
              name="address" 
              label="Wallet Address"
              value={entity.address}
              required
              autoComplete='off'
              helperText={addressHelperText}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </Grid>
          <Grid>
            <Select fullWidth
              name="jurisdictionID" 
              label="Jurisdiction"
              value={entity.jurisdictionID}
              required
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value={""}>Select One</MenuItem>
              {allJurisdictions.map(j => <MenuItem key={j.id} value={j.id}>{j.name}</MenuItem>)}
            </Select>
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
        </Box>
      </Modal>
    </Grid>
  )
}

export default Entity;