
const createId = require('../../../utils/createId');
const Scope = require('../../../models/Scope');
const analyseNode = require('../../node');

const analyseIf = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  scope.addSegment(id, start, end);

  const test = analyseNode(entity.test, scope);
  const consequent = analyseNode(entity.consequent, scope);

  return [id].concat(test, consequent);
};

module.exports = analyseIf;