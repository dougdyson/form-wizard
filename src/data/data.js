// ===================== NOTES =====================
// stubbing out backend data to just focus on forms
// would mock API if this was an existing code base
// =================================================


// ===========================================
// ===            JURISDICTIONS            ===
// ===========================================
const allJurisdictions = require('./jurisdictions.json');


// ===========================================
// ===               RULES                 ===
// ===========================================
const allRules = require('./rules.json');

const getRulesByJurisdictionID = (jurisdictionID) => {
  return allRules.filter(rule => rule.jurisdictionID === jurisdictionID);
}

// ===========================================
// ===              ENTITIES               ===
// ===========================================
const allEntities = require('./entities.json');

const getEntityDetailsByID = (entityID) => {
  return allEntities.find(entity => entity.id === entityID);
};

const getEntitiesForOwner = (owner) => {
  return allEntities.filter(entity => entity.owner === owner);
};

const addNewEntity = (newEntity) => {
  
  // check for duplicate entity names
  if (allEntities.find(entity => entity.name === newEntity.name)){
    // throw error
    return false;
  }
  // TODO: check jurisdiction_id exists?
  // TODO: check owner exists?
  // CONFIRM: check wallet address not already in use??

  // set data values and push to database
  newEntity.id        = allEntities.length + 1; // use wallet address instead?
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

  // return newEntity object with updated id
  return newEntity;
};

// ===========================================
// ===               OWNERS                ===
// ===========================================
const allOwners = require('./owners.json');

const getOwnerDetailsByID = (address) => {
  return allOwners.find(owner => owner.address === address)
};

const addOwner = (owner) => {
  // set data values and push to database
  owner.timestamp = Date.now();
  owner.active    = true;
  allOwners.push(owner);
  // return owner object with updated id and properties
  return owner;
}

const ownerEmailExists = (ownerEmail) => {
  if (allOwners.find(owner => owner.email === ownerEmail)) {
    return true;
  }
  else {
    return false;
  }
}

// ===========================================
// ===             COMPLIANCE              ===
// ===========================================
const allCompliance = require('./compliance.json');

const getComplianceByEntityID = (entityID) => {
  return allCompliance.filter(compliance => compliance.entityID === entityID);
}

const addCompliance = (compliance) => {
  // set values and push to database
  compliance.id        = allCompliance.length + 1;
  compliance.timestamp = Date.now();
  compliance.compliant = false;
  compliance.active    = true;
  allCompliance.push(compliance);
  // return compliance object with updated id and properties
  return compliance;
}

const updateCompliance = (complianceID, ruleUpdate, updateValue) => {
  // find compliance record in data
  const i = allCompliance.findIndex(compliance => compliance.id === complianceID);
  
  // record does exist, return failure/throw error
  if (i === -1) {
    return false;
  }
  // update database records
  allCompliance[i].ruleUpdate = ruleUpdate; 
  allCompliance[i].compliant  = updateValue;
  // return success
  return true;
}

module.exports = { 
  allEntities, addNewEntity, getEntityDetailsByID, getEntitiesForOwner,
  allOwners, addOwner, getOwnerDetailsByID, ownerEmailExists,
  allJurisdictions, 
  allRules, getRulesByJurisdictionID, 
  allCompliance, addCompliance, getComplianceByEntityID, updateCompliance 
};

