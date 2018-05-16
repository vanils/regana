
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {
    describe('#statements', () => {
      test('analyse should work with variable declarations', () => {
        expect(regana.analyseFile(path.resolve(__dirname, './mocks/statements/expression/mock1.js'))).toMatchSnapshot();
      });
    });
  });
});