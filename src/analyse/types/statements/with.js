
const createId = require('../../../utils/createId');
const Scope = require('../../../models/Scope');
const analyseNode = require('../../node');

const analyseWith = (entity, parentScope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  parentScope.addSegment(id, start, end);

  const scope = new Scope(start, end, { parentScope });

  const withSegments = analyseNode(entity.object, scope, true);
  withSegments.forEach(segment => scope.withSegments.push(segment));
  analyseNode(entity.body, scope);

  return [];
};

module.exports = analyseWith;