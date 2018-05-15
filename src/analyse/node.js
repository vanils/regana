
const analyseVariable = require('./types/declarations/variable');
const analyseExportNamed = require('./types/modules/exports/exportNamed');

/*
 * Helper to find correct analyser
 */
const getAnalyser = node => {
  switch (node.type) {
    case 'VariableDeclaration':
      return analyseVariable;
    case 'ExportNamedDeclaration':
      return analyseExportNamed;
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
 *
 * @example
 * analyseNode(node, scope);  // returns analyse
 */
const analyseNode = (node, scope) => {
  getAnalyser(node)(node, scope);
};

module.exports = analyseNode;