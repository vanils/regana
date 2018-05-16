
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {
    describe('#statements', () => {
      test('analyse should work with expression statement', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/statements/expression/mock1.js'))).toMatchSnapshot();
      });
      test('analyse should work with empty statement', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/statements/empty/mock1.js'))).toMatchSnapshot();
      });
    });
  });
});