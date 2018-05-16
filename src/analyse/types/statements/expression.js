
const analyseNode = require('../../node');

const analyseExpression = (entity, scope) => {
  return analyseNode(entity.expression, scope);
};

module.exports = analyseExpression;