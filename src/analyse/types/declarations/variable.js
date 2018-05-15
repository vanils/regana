
const createId = require('../../../utils/createId');
const analyseNode = require('../../node');

const analyseVariable = (entity, scope) => {

  return entity.declarations.map(declarator => {

    const {
      start,
      type,
      end
    } = declarator;

    const id = createId(type);
    const pointer = declarator.id.name;
    const uses = analyseNode(declarator.init, scope);

    scope.addSegment(id, start, end, {
      pointer,
      uses
    });

    return id;
  });
};

module.exports = analyseVariable;