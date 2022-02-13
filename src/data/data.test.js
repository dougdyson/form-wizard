const entities = require('./data');

test('returns first entity name from data.json', () => expect(entities[0].name).toBe('NuCo'))