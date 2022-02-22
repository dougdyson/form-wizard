import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getEntitiesForOwner } from '../../data/data';
import EntityCard from '../EntityCard/EntityCard';

function EntityList(props) {

  const [entities, setEntities] = useState([]);

  const getEntities = () => {
    const entitiesData = getEntitiesForOwner(props.owner);
    setEntities(entitiesData);
  }
  
  useEffect(() => {
    getEntities();
  }, [])

  return (
    <Grid>
      <Grid>
        {entities.map(entity => <EntityCard key={entity.id} id={entity.id}/>)}
      </Grid>
      <Grid>
        <IconButton>
          <AddCircleIcon size="large" color="primary" />
        </IconButton>
      </Grid>
    </Grid>

  )
}
export default EntityList