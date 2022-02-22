import React from "react";
import { useState, useEffect } from "react";
import { getEntitiesForOwner } from '../../data/data';
import EntityCard from '../EntityCard/EntityCard';

function EntityList(props) {

  console.log('props.owner', props.owner);

  const [entities, setEntities] = useState([]);

  const getEntities = () => {
    const entitiesData = getEntitiesForOwner(props.owner);
    setEntities(entitiesData);
  }
  
  useEffect(() => {
    getEntities();
  }, [])

  entities.forEach( entity => console.log(entity.name))

  return (
    <div>
       {entities.map(entity => <EntityCard id={entity.id}/>)}
    </div>
  )
}
export default EntityList