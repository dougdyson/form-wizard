// CODE REVIEW NOTES


import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getEntitiesForOwner } from '../../data/data';
import EntityCard from '../EntityCard/EntityCard';

import CreateEntity from '../CreateEntity/CreateEntity';

function EntityList(props) {

  // hardcoded for testing
  const owner = '04044178226a3132ac6b5c441d839d6cf69d95a8d0d1e0f6eba43498a28a8ea58c8ef889c0ccedc94f5f6467e4caab1776a6867af143b9ba6171b27e6fe96174d1';

  const [entityForm, setEntityForm] = useState(false);
  const [entities, setEntities] = useState([]);

  const getEntities = () => {
    const entitiesData = getEntitiesForOwner(owner);
    setEntities(entitiesData);
  }
    
  useEffect(() => {
    getEntities();
  }, []);

  const toggleEntityForm = () => setEntityForm(prevState => !prevState);

  const cardStyle = {
    ml: 3,
    mt: 2,
    mb: 2,
    color: "darkgrey",
  }

  return (
    <Grid>
      <Typography sx={cardStyle}>
        Your Companies
      </Typography>
      <Grid>
        {entities.map(entity => <EntityCard key={entity.id} id={entity.id}/>)}
      </Grid>
      {entityForm && <CreateEntity showModal={entityForm} toggleModal={toggleEntityForm} setEntities={setEntities} />}
      <Grid 
        container 
        justifyContent="flex-end"
      >
        <IconButton onClick={toggleEntityForm}>
          <AddCircleIcon fontSize="large" mt={2} color="primary" />
        </IconButton>
      </Grid>
    </Grid>

  )
}
export default EntityList