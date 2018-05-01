
const Scope = require('../Scope.js');

const invalidParams = require('./helpers/scope/invalidParams');
const validParams = require('./helpers/scope/validParams');

describe('Scope', () => {
  describe('#constructor', () => {
    invalidParams(Scope);
    validParams(Scope);
  });
});