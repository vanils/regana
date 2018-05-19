
const analyseNode = require('../node.js');

describe('analyse', () => {
  describe('#node', () => {
    test('should throw error with invalid type', () => {
      expect(() => {
        analyseNode({ type: 'Unknown' });
      }).toThrowErrorMatchingSnapshot();
    });
  });
});