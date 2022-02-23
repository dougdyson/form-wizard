import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
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

  return (
    <Grid>
      <Grid>
        {entities.map(entity => <EntityCard key={entity.id} id={entity.id}/>)}
      </Grid>
      {entityForm && <CreateEntity showModal={entityForm} toggleModal={toggleEntityForm} setEntities={setEntities} />}
      <Grid>
        <IconButton onClick={toggleEntityForm}>
          <AddCircleIcon size="large" color="primary" />
        </IconButton>
      </Grid>
    </Grid>

  )
}
export default EntityList