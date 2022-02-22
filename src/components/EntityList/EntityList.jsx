import React from "react";
import { useState, useEffect } from "react";
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
    <div>
       {entities.map(entity => <EntityCard key={entity.id} id={entity.id}/>)}
    </div>
  )
}
export default EntityList