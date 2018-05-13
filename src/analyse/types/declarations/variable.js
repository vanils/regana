
const createId = require('../../../utils/createId');

const analyseVariable = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  const pointer = entity.declarations[0].id.name;

  scope.addSegment(id, start, end, { pointer });
};

module.exports = analyseVariable;