
const Node = require('./Node');

/**
 * Vector representing one way connection between nodes
 */
class Vector {

  /**
   * Check if file source is valid
   * @param {string} file - file to verify
   * @return {boolean} if value is valid file
   */
  static isValidNode (node) {

    if (!node) {
      return false;
    }

    if (node instanceof Node) {
      return true;
    }

    return false;
  }

  static isValidMagnitude (magnitude) {

    if (isNaN(magnitude)) {
      return false;
    }

    if (typeof magnitude !== 'number') {
      return false;
    }

    /*
     * TODO, make this more specific
     */
    return true;
  }

  /**
   * Create a Vector between nodes.
   * @param {Node} fromNode - Source node of connection
   * @param {Node} toNode - Target node of connection
   * @param {number} magnitude - Factor which represents numeric value for
   * distance between nodes.
   */
  constructor (fromNode, toNode, magnitude) {

    if (!Vector.isValidNode(fromNode)) {
      throw new Error(`Invalid from node '${asStringValue(fromNode)}'`);
    }

    if (!Vector.isValidNode(toNode)) {
      throw new Error(`Invalid to node '${asStringValue(toNode)}'`);
    }

    if (!Vector.isValidMagnitude(magnitude)) {
      throw new Error(`Invalid magnitude '${asStringValue(magnitude)}'`);
    }

    /**
     * Node which 
     * @type {Node}
     */
    this.fromNode = fromNode;

    /**
     * Id for parent of this node
     * @type {Node}
     */
    this.toNode = toNode;

    /**
     * File src which this node belongs to
     * @type {number}
     */
    this.magnitude = magnitude;
  }
};

module.exports = Vector;