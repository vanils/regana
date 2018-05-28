
const regana = require('../regana.js');
const path = require('path');

describe('regana', () => {
  describe('#analyse', () => {
    describe('#choice', () => {
      test('analyse should work with if statement', () => {
        expect(regana.analyse(path.resolve(__dirname, './mocks/choice/if.js'))).toMatchSnapshot();
      });
    });
  });
});