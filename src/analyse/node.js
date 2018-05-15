
/*
 * Helper to find correct analyser
 */
const getAnalyser = node => {
  switch (node.type) {
    case 'RegExpLiteral':
      return require('./types/literals/regex');
    case 'NullLiteral':
      return require('./types/literals/null');
    case 'StringLiteral':
      return require('./types/literals/string');
    case 'BooleanLiteral':
      return require('./types/literals/boolean');
    case 'NumericLiteral':
      return require('./types/literals/numeric');
    case 'VariableDeclaration':
      return require('./types/declarations/variable');
    case 'ExportNamedDeclaration':
      return require('./types/modules/exports/exportNamed');
    default:
      throw new Error(`Failed to parse, unknown entity type '${node.type}'`);
  }
};

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
const analyseNode = (node, scope) => getAnalyser(node)(node, scope);

module.exports = analyseNode;