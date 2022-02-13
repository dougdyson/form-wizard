const sourceData = require('./data.json');

const entities = require('./data');

test('imported data matches source data from data.json', () => {
  expect(entities.getAllEntities).toMatchObject(sourceData);
})

test('return details for entity by specified entity ID', () => {
  expect(entities.getEntityDetailsByID(1)).toMatchObject(entities.getAllEntities[0]);
})