
const Vector = require('../Vector.js');
const Node = require('../Node.js');

const invalidParams = require('./helpers/vector/invalidParams');
const validParams = require('./helpers/vector/validParams');

const validNode = new Node('node-example', '/path/to/file.js', {
  type: 'VariableDeclaration',
  start: 1,
  end: 28,
  loc: {
    start: {
      line: 2,
      column: 0
    },
    end: {
      line: 4,
      column: 2
    }
  }
});

describe('Vector', () => {
  describe('#constructor', () => {
    invalidParams(Vector, validNode);
    validParams(Vector, validNode);
  });
});