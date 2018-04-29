
const uniqid = require('uniqid');

/**
 * Node entity representing a logical scope
 */
class Node {

  /**
   * Create a node.
   * @param {Node} parent - parent node
   * @param {string} file - path to file which contains this node
   * @param {object} nodeInterface - declaration entity which must follow format
   * of babylon parser ES tree (see more from https://bit.ly/2I2Thnf)
   */
  constructor (parent, file, nodeInterface) {
    this.id = uniqid();
    this.file = file;
    this.start = nodeInterface.loc.start;
    this.end = nodeInterface.loc.end;
  }
};