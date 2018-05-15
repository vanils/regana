
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {
    describe('#literals', () => {
      test('analyse should work with boolean literal', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/literals/boolean.js'))).toMatchSnapshot();
      });
      test('analyse should work with null literal', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/literals/null.js'))).toMatchSnapshot();
      });
      test('analyse should work with numeric literal', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/literals/numeric.js'))).toMatchSnapshot();
      });
      test('analyse should work with regex literal', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/literals/regex.js'))).toMatchSnapshot();
      });
      test('analyse should work with string literal', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/literals/string.js'))).toMatchSnapshot();
      });
    });
  });
});