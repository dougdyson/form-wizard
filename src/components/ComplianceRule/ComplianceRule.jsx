import React from "react";
import { useState } from 'react';
import { Grid, TextField, Button, Typography, Select, MenuItem, Modal, Box } from '@mui/material';
import 'typeface-roboto'

import { updateCompliance } from '../../data/data';

export default function ComplianceRule(props) {

  const [rule, setRule] = useState(null)
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    // reset any error messaging
    setError(null);
    setRule({...rule, [e.target.name]: e.target.value});
    setDisabled(null)
  }

  const handleBlur = async (e) => {
      
    // entityValidation.validate(entity, {abortEarly: false})
    //   .then((entity) => {
    //       setEntity(entity)
    //   })
    //   .catch((errors) => {
        
    //     errors.inner.forEach(item => {
    //       if( item.path === "name" ) 
    //       {         
    //         setError(true);
    //         setHelperText(item.errors);
    //       }

    //       if( item.path === "address" )
    //       {
    //         setAddressError(true);
    //         setAddressHelperText(item.errors);
    //       }
    //     });
        
    //     setDisabled(true);
        
    //   }
    // );
  }

  const handleClick = (e) => {

    // if (error === null && addressError === null)
    // {
    //   // get owner from props or context
    //   // entity.owner = props.owner
    //   entity.owner = owner;
    //   const newData = addNewEntity(entity);
    //   props.setEntities(prevState => [newData, ...prevState]);
    //   setEntity(initialState);
    //   props.toggleModal();
    //   // open entity list component
    // }
    // setDisabled(true);
    e.preventDefault();

  }

  const {showModal, toggleModal} = props;

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

    <Grid sx={style}>
      <Typography>{props.name}</Typography>
    </Grid>

  )

}