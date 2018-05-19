
const createId = require('../../utils/createId');

const analyseIdentifier = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  const uses = scope.getSegmentIdsByPointer(entity.name);
  scope.addSegment(id, start, end, { uses });

  return [id];
};

module.exports = analyseIdentifier;