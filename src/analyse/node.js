
/**
 * Analyse a single node. Can be considered as router for other node types.
 *
 * @memberof analyse
 * @param {Object} node - Node to be analysed.
 * @param {Scope} scope - Scope attached to this node.
 * @returns {Array} Array of ids for segment.
 *
 * @example
 * analyseNode(node, scope);  // returns analyse
 */
const analyseNode = (node, scope) => {
  switch (node.type) {
    case 'Identifier':
      return require('./types/identifier')(node, scope);
    case 'RegExpLiteral':
      return require('./types/literals/regex')(node, scope);
    case 'NullLiteral':
      return require('./types/literals/null')(node, scope);
    case 'StringLiteral':
      return require('./types/literals/string')(node, scope);
    case 'BooleanLiteral':
      return require('./types/literals/boolean')(node, scope);
    case 'NumericLiteral':
      return require('./types/literals/numeric')(node, scope);
    case 'VariableDeclaration':
      return require('./types/declarations/variable')(node, scope);
    case 'BlockStatement':
      return require('./types/statements/block')(node, scope);
    case 'EmptyStatement':
      return require('./types/statements/empty')(node, scope);
    case 'ExpressionStatement':
      return require('./types/statements/expression')(node, scope);
    case 'DebuggerStatement':
      return require('./types/statements/debugger')(node, scope);
    case 'WithStatement':
      return require('./types/statements/with')(node, scope);
    case 'BinaryExpression':
      return require('./types/expressions/binary')(node, scope);
    case 'ExportNamedDeclaration':
      return require('./types/modules/exports/exportNamed')(node, scope);
    case 'BinaryOperator':
      return require('./types/extras/binaryOperator')(node, scope);
    default:
      throw new Error(`Failed to parse, unknown entity type '${node.type}'`);
  }
};

module.exports = analyseNode;