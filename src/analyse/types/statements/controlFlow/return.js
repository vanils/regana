
const createId = require('../../../../utils/createId');
const analyseNode = require('../../../node');

const analyseReturn = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  const uses = analyseNode(entity.argument, scope);
  scope.addSegment(id, start, end, { uses });

  return [id];
};

module.exports = analyseReturn;