
const createId = require('../../../utils/createId');
const Scope = require('../../../models/Scope');
const analyseNode = require('../../node');

const analyseBlock = (entity, parentScope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  parentScope.addSegment(id, start, end);

  const scope = new Scope(start, end, { parentScope });

  entity.body.forEach(item => analyseNode(item, scope));

  return [];
};

module.exports = analyseBlock;