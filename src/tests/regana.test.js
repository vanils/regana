
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {

    test('should expose proper properties', () => {
      expect(regana.analyse).toBeDefined();
    });

    test('analyse should throw error with invalid input', () => {
      expect(() => {
        regana.analyse();
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyse(null);
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyse(NaN);
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyse('');
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyse({});
      }).toThrowErrorMatchingSnapshot();
      expect(() => {
        regana.analyse([]);
      }).toThrowErrorMatchingSnapshot();
    });

    test('analyse should work with valid input', () => {
      expect(regana.analyse(path.resolve(__dirname, './mocks/file1.js'))).toMatchSnapshot();
      expect(regana.analyse(path.resolve(__dirname, './mocks/file2.js'))).toMatchSnapshot();
    });
  });
});