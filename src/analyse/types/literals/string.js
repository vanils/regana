
const createId = require('../../../utils/createId');

const analyseString = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  scope.addSegment(id, start, end);

  return [id];
};

module.exports = analyseString;