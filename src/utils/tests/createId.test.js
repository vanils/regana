
const createId = require('../createId.js');

describe('utils', () => {
  describe('#createId', () => {

    test('should give unique values', () => {
      expect(createId()).not.toEqual(createId());
    });

    test('should have correct default prefix value', () => {
      expect(createId()).toEqual(expect.stringMatching(/^Undefined_\d+$/));
    });
  });
});