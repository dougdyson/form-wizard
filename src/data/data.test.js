const entities = require('./data');
const sourceData = require('./data.json');

test('test imported data against source data from data.json', () => {
  expect(entities).toMatchObject(sourceData);
})