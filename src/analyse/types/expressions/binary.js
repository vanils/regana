
const analyseNode = require('../../node');
const fileStore = require('../../../store/files');

const generateOperator = (from, to, operator, scope) => {

  const text = fileStore.get(scope.file).content.substr(from, to - from);
  const offset = text.indexOf(operator);
  const start = from + offset;
  const end = start + operator.length;

  return {
    type: 'BinaryOperator',
    start,
    end,
    operator
  };
};

const analyseBinary = (entity, scope) => {

  /*
   * From left to right
   */
  const leftNode = analyseNode(entity.left, scope);
  const operatorEntity = generateOperator(entity.left.end, entity.right.start, entity.operator, scope);
  const operatorNode = analyseNode(operatorEntity, scope);
  const rightNode = analyseNode(entity.right, scope);

  return leftNode.concat(operatorNode, rightNode);
};

module.exports = analyseBinary;