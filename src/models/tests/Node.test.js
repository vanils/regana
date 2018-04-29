
const Node = require('../Node.js');

const invalidParams = require('./helpers/node/invalidParams');
const validParams = require('./helpers/node/validParams');

describe('Node', () => {
  describe('#constructor', () => {
    invalidParams(Node);
    validParams(Node);
  });
});