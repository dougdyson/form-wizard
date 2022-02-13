const getAllEntities = require('./data'); 
const sourceData = require('./data.json');

getAllEntities; //?

test('test imported data against source data from data.json', () => {
  expect(getAllEntities).toMatchObject(sourceData);
})