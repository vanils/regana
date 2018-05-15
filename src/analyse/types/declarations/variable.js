
const createId = require('../../../utils/createId');
const analyseNode = require('../../node');

const analyseVariable = (entity, scope) => {

  entity.declarations.forEach(declarator => {

    const {
      start,
      type,
      end
    } = declarator;

    const id = createId(type);
    const pointer = declarator.id.name;

    // TODO - handle init property

    scope.addSegment(id, start, end, { pointer });

  });
};

module.exports = analyseVariable;