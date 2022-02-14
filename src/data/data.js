// ===================== NOTES =====================
// stubbing out backend data to just focus on forms
// would mock API if this was an existing code base
// =================================================


// ===========================================
// ===              ENTITIES               ===
// ===========================================

const allEntities = require('./entities.json');

const getEntityDetailsByID = (entityID) => {
  return allEntities.find(entity => entity.id === entityID)
};

const getEntitiesForOwner = (owner) => {
  return allEntities.filter(entity => entity.owner === owner)
};

const addNewEntity = (newEntity) => {
  
  // check for duplicate entity names
  if (allEntities.find(entity => entity.name === newEntity.name)){
    // throw error
    return false
  }
  // TODO: check jurisdiction_id exists?
  // TODO: check owner exists?
  // CONFIRM: check wallet address not already in use??

  // set data values and push to database
  newEntity.id        = allEntities.length + 1; // can wallet address be used instead?
  newEntity.type      = 'LLC'; // hard coded until multiple types
  newEntity.timestamp = Date.now();
  allEntities.push(newEntity);

  // add associated rules to compliance
  const rules = getRulesByJurisdictionID(newEntity.jurisdictionID);
  rules.forEach(rule => {
    // set data values and push to database
    const entityID   = newEntity.id;
    const ruleID     = rule.id;
    const compliance = {entityID, ruleID};
    addCompliance(compliance);
  });

  // return newEntity object with updated ID
  return newEntity;
};

// ===========================================
// ===               OWNERS                ===
// ===========================================
const allOwners = require('./owners.json')

const getOwnerDetailsByID = (address) => {
  return allOwners.find(owner => owner.address === address)
};

const addOwner = (owner) => {
  // set data values and push to database
  owner.timestamp = Date.now();
  owner.active    = true;
  allOwners.push(owner);
  // return owner object with ID
  return owner;
}

// ===========================================
// ===            JURISDICTIONS            ===
// ===========================================
const allJurisdictions = require('./jurisdictions.json');

// ===========================================
// ===               RULES                 ===
// ===========================================
const allRules = require('./rules.json');

const getRulesByJurisdictionID = (id) => {
  return allRules.filter(rule => rule.jurisdictionID === id);
}

// ===========================================
// ===             COMPLIANCE              ===
// ===========================================
const allCompliance = require('./compliance.json');

const getComplianceByEntityID = (id) => {
  return allCompliance.filter(compliance => compliance.entityID === id);
}

const addCompliance = (compliance) => {
  // set values and push to database
  compliance.id        = allCompliance.length + 1;
  compliance.timestamp = Date.now();
  compliance.compliant = false;
  compliance.active    = true;
  allCompliance.push(compliance);
  // return compliance object with updated ID and properties
  return compliance;
}

const updateCompliance = (complianceID, updateValue) => {
  // find compliance record in data
  const i = allCompliance.findIndex(compliance => compliance.id === complianceID);
  
  // record does exist
  if (i === -1) {
    return false;
  }
  
  // update record
  allCompliance[i].compliant = updateValue;
  
  // return success
  return true;
}

module.exports = { 
  allEntities, getEntityDetailsByID, getEntitiesForOwner, addNewEntity, 
  allOwners, getOwnerDetailsByID, addOwner,
  allJurisdictions, 
  allRules, getRulesByJurisdictionID, 
  allCompliance, getComplianceByEntityID, addCompliance, updateCompliance 
};

