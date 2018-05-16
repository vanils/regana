
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {
    describe('#declarations', () => {
      test('analyse should work with variable declarations', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock1.js'))).toMatchSnapshot();
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock2.js'))).toMatchSnapshot();
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock3.js'))).toMatchSnapshot();
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock4.js'))).toMatchSnapshot();
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/declarations/variable/mock5.js'))).toMatchSnapshot();
      });
    });
  });
});