
const files = require('../files.js');

describe('store', () => {
  describe('#files', () => {
    test('should give null for not found', () => {
      expect(files.get('File_X')).toBe(null);
    });
  });
});