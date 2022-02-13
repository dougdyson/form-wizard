const entities = require('./data');

test('returns entities data', () => expect(entities[0].name).toBe('NuCo'))