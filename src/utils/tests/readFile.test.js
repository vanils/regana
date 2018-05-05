
const readFile = require('../readFile.js');
const path = require('path');

describe('utils', () => {
  describe('#readFile', () => {

    test('should be able to read existing file', () => {
      expect(readFile(path.resolve(__dirname, './mocks/file1.js'))).toBe('const testValue = 1;');
    });

    test('should fail when file does not exist', () => {
      expect(() => {
        readFile(__dirname, './mocks/fileX.js');
      }).toThrow();
    });
  });
});