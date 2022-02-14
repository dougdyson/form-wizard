// STUBBING OUT BACK END
// would reach for axios for async backend services
const data = require('./data');

// ENTITY TESTS ==================================
test('imported entities data matches source data from entities.json', () => {
  const sourceEntities = require('./entities.json');
  expect(data.allEntities).toMatchObject(sourceEntities);
})

test('return details for entity by specified entity ID', () => {
  expect(data.getEntityDetailsByID(1)).toMatchObject(data.allEntities[0]);
  expect(data.getEntityDetailsByID(2)).toMatchObject(data.allEntities[1]);
})

test('returns all entities for an owner', () => {
  const owner = "04044178226a3132ac6b5c441d839d6cf69d95a8d0d1e0f6eba43498a28a8ea58c8ef889c0ccedc94f5f6467e4caab1776a6867af143b9ba6171b27e6fe96174d1"
  expect(data.getEntitiesForOwner(owner)).toEqual(expect.arrayContaining(data.allEntities));
})

test('adds a new entity', () => {
  const name = "BizBiz"
  const owner = "04cb756b21c27dd6c5e1976fa5f568d985283b6a308b1245e150699d49276cd7738f75b6f5ee07b037d664be30f1f7010c48dea2571d822f80bc318a6479aa1641";
  const address = "0419d968192f61faa3c0c65d5d3bb52a0ba08c9096629f25c37a9225bfe1ef1dec4b9c47056b7b69babd73dd260c0bca2132bd740096d9f2fc7ab1c5b200bb7f04";
  const jurisdiction_id = 1;
  const newEntity = {name, owner, address, jurisdiction_id};
  expect(data.addNewEntity(newEntity)).toEqual(expect.objectContaining(newEntity));
})

// OWNER TESTS ================================
test('imported owners data matches source data from owners.json', () => {
  const sourceOwners = require('./owners.json');
  expect(data.allOwners).toMatchObject(sourceOwners);
})

test('return details for owner by specified owner ID', () => {
  const ownerID = "04044178226a3132ac6b5c441d839d6cf69d95a8d0d1e0f6eba43498a28a8ea58c8ef889c0ccedc94f5f6467e4caab1776a6867af143b9ba6171b27e6fe96174d1";
  expect(data.getOwnerDetailsByID(ownerID)).toMatchObject(data.allOwners[0]);
})

// JURISDICTION TESTS ======================================
test('imported jurisdiction data matches source data from jurisdiction.json', () => {
  const sourceJurisdictions = require('./jurisdictions.json');
  expect(data.allJurisdictions).toMatchObject(sourceJurisdictions);
})

// RULES TESTS =============================
const sourceRules = require('./rules.json');
test('imported rules data matches source data from rules.json', () => {
  expect(data.allRules).toMatchObject(sourceRules);
})

test('get rules by jurisdiction id', () => {
  const id = 1;
  // first 3 rows in data are seeded with same jurisdictionID
  expect(data.getRulesByJurisdictionID(id)).toEqual(expect.arrayContaining(data.allRules.slice(0,3)));
})
