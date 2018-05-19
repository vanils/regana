
const createId = require('../../../../utils/createId');
const analyseNode = require('../../../node');

const analyseLabeled = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  const uses = analyseNode(entity.body, scope);

  /*
   * TODO - handle label property?
   */

  scope.addSegment(id, start, end, { uses });

  return [id];
};

module.exports = analyseLabeled;