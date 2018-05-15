
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

    test('analyse should work with variable declarations', () => {
      expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock1.js'))).toMatchSnapshot();
      expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock2.js'))).toMatchSnapshot();
      expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock3.js'))).toMatchSnapshot();
      expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock4.js'))).toMatchSnapshot();
    });
  });
});