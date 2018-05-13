
const Scope = require('../Scope.js');

const segmentSelection = require('./helpers/scope/segmentSelection');
const segmentCreation = require('./helpers/scope/segmentCreation');
const invalidParams = require('./helpers/scope/invalidParams');
const validParams = require('./helpers/scope/validParams');

describe('Scope', () => {
  describe('#constructor', () => {
    invalidParams(Scope);
    validParams(Scope);
  });
  describe('#getSegmentIdByPointer', () => {
    segmentSelection(Scope);
  });
  describe('#addSegment', () => {
    segmentCreation(Scope);
  });
});