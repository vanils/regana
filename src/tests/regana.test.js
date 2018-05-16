
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {

    test('should expose proper properties', () => {
      expect(regana.analyseFile).toBeDefined();
    });

    test('analyse should throw error with invalid input', () => {
      expect(() => {
        regana.analyseFile();
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyseFile(null);
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyseFile(NaN);
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyseFile('');
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyseFile({});
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyseFile([]);
      }).toThrowErrorMatchingSnapshot();
    });

    test('analyse should work with valid input', () => {
      expect(regana.analyseFile(path.resolve(__dirname, './mocks/file1.js'))).toMatchSnapshot();
      expect(regana.analyseFile(path.resolve(__dirname, './mocks/file2.js'))).toMatchSnapshot();
    });
  });
});