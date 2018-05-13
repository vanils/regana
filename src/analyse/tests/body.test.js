
const analyseBody = require('../body.js');
const Scope = require('../../models/Scope');

describe('analyse', () => {
  describe('#analyseBody', () => {
    test('should throw error if trying to analyse not valid entity type', () => {
      const start = 10;
      const end = 400;
      const body = [{ type: 'NotValid' }];
      const scope = new Scope(10, 400, { file: 'File_1' });
      expect(() => analyseBody(start, end, body, scope)).toThrowErrorMatchingSnapshot();
    });
  });
});