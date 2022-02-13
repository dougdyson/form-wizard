const entities = require('./data');
const sourceData = require('./data.json');

test('returns first entity name from data.json', () => {
  expect(entities).toMatchObject(sourceData);
})