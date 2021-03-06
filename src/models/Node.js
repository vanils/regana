
const asStringValue = require('../utils/asStringValue');

/**
 * Node representing a logical point within the code
 */
class Node {

  static createId () {
    return require('uniqid')('node-');
  }

  static isValidId (id) {

    if (typeof id !== 'string') {
      return false;
    }

    if (!id) {
      return false;
    }

    /*
     * TODO, verify that id is actually registered
     */
    return true;
  }

  static isValidFile (file) {

    if (typeof file !== 'string') {
      return false;
    }

    if (!file) {
      return false;
    }

    /*
     * TODO, verify that file actually exists
     */
    return true;
  }

  static isValidNodeInterface (nodeInterface) {

    if (!nodeInterface) {
      return false;
    }

    if (!nodeInterface.loc) {
      return false;
    }

    return true;
  }

  /**
   * Create a node.
   *
   * @param {string} parentId - Id of parent node.
   * @param {string} file - Path to file which contains this node.
   * @param {Object} nodeInterface - Declaration entity which must follow format
   * of babylon parser ES tree (see more from https://bit.ly/2I2Thnf).
   *
   * @example
   * new Node('Node_1', 'path/to/file', entity);
   */
  constructor (parentId, file, nodeInterface) {

    if (!Node.isValidId(parentId)) {
      throw new Error(`Invalid parent id '${asStringValue(parentId)}'`);
    }

    if (!Node.isValidFile(file)) {
      throw new Error(`Invalid file '${asStringValue(file)}'`);
    }

    if (!Node.isValidNodeInterface(nodeInterface)) {
      throw new Error(`Invalid node interface '${asStringValue(nodeInterface)}'`);
    }

    /**
     * Id for this node
     * @type {string}
     */
    this.id = Node.createId();

    /**
     * Id for parent of this node
     * @type {string}
     */
    this.parentId = parentId;

    /**
     * File src which this node belongs to
     * @type {string}
     */
    this.file = file;

    /**
     * File src which this node belongs to
     * @type {object}
     * @property {number} line - Line number where scope of this node begins
     * @property {number} column - Column number where scope of this node begins
     */
    this.start = {
      line: nodeInterface.loc.start.line,
      column: nodeInterface.loc.start.column
    };

    /**
     * File src which this node belongs to
     * @type {object}
     * @property {number} line - line number where scope of this node ends
     * @property {number} column - column number where scope of this node ends
     */
    this.end = {
      line: nodeInterface.loc.end.line,
      column: nodeInterface.loc.end.column
    };
  }
}

module.exports = Node;