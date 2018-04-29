
/**
 * Node entity representing a logical scope
 */
class Node {

  /**
   * Create unique id for this node
   * @return {string} Unique id.
   */
  static createId () {
    return require('uniqid')('node-');
  }

  /**
   * Create a node.
   * @param {string} parentId - Id of parent node
   * @param {string} file - Path to file which contains this node
   * @param {object} nodeInterface - Declaration entity which must follow format
   * of babylon parser ES tree (see more from https://bit.ly/2I2Thnf)
   */
  constructor (parentId, file, nodeInterface) {

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
      line,
      column
    } = nodeInterface.loc.start;

    /**
     * File src which this node belongs to
     * @type {object}
     * @property {number} line - line number where scope of this node ends
     * @property {number} column - column number where scope of this node ends
     */
    this.end = {
      line,
      column
    } = nodeInterface.loc.end;
  }
};

module.exports = Node;