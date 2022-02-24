// ===================== NOTES =====================
// stubbing out backend data to just focus on forms
// would mock API if this was an existing code base
// =================================================


// ===========================================
// ===            JURISDICTIONS            ===
// ===========================================
const allJurisdictions = require('./jurisdictions.json');

const getJurisdictionByID = (id) => {
  return allJurisdictions.find(jurisdiction => jurisdiction.id === id);
}

// ===========================================
// ===               RULES                 ===
// ===========================================
const allRules = require('./rules.json');

const getRulesByJurisdictionID = (jurisdictionID) => {
  return allRules.filter(rule => rule.jurisdictionID === jurisdictionID);
}

const getRuleByID = (ruleID) => {
  return allRules.find(rule => rule.id === ruleID);
}


// ===========================================
// ===              ENTITIES               ===
// ===========================================
const allEntities = require('./entities.json');

const getEntityDetailsByID = (entityID) => {
  return allEntities.find(entity => entity.id === entityID);
};

const getEntitiesForOwner = (owner) => {
  console.log('owner', owner);
  return allEntities.filter(entity => entity.owner === owner);
};

const addNewEntity = (newEntity) => {
  
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
// ===             COMPLIANCE              ===
// ===========================================
const allCompliance = require('./compliance.json');

const getComplianceByEntityID = (entityID) => {
  console.log('entityID', entityID);
  console.log('allCompliance', allCompliance);
  return allCompliance.filter(compliance => parseInt(compliance.entityID) === parseInt(entityID));
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
  allJurisdictions, getJurisdictionByID,
  allRules, getRulesByJurisdictionID, getRuleByID,
  allCompliance, addCompliance, getComplianceByEntityID, updateCompliance 
};

