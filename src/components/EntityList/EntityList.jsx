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

  const [entityForm, setEntityForm] = useState(false);
  const [entities, setEntities] = useState([]);

  const getEntities = () => {
    const entitiesData = getEntitiesForOwner(props.owner);
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