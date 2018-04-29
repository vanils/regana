
/**
 * Vector representing one way connection between nodes
 */
class Vector {

  /**
   * Create a Vector between nodes.
   * @param {Node} fromNode - Source node of connection
   * @param {Node} toNode - Target node of connection
   * @param {number} magnitude - Factor which represents numeric value for
   * distance between nodes.
   */
  constructor (fromNode, toNode, magnitude) {

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