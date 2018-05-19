
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {
    describe('#statements', () => {
      test('analyse should work with expression statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/statements/expression/mock1.js'))).toMatchSnapshot();
      });
      test('analyse should work with debugger statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/statements/debugger/mock1.js'))).toMatchSnapshot();
      });
      test('analyse should work with empty statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/statements/empty/mock1.js'))).toMatchSnapshot();
      });
      test('analyse should work with with statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/statements/with/mock1.js'))).toMatchSnapshot();
      });
      test('analyse should work with return statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/statements/controlFlow/return.js'))).toMatchSnapshot();
      });
      test('analyse should work with labeled statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/statements/controlFlow/labeled.js'))).toMatchSnapshot();
      });
    });
  });
});