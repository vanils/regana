
const asStringValue = require('../utils/asStringValue');

/**
 * Scope entity representing a scope
 */
class Scope {

  /**
   * Check if value is valid scope
   * @param value - Id to verify
   * @return {boolean} if value is valid scope
   */
  static isValidScope (value) {

    if (value instanceof Scope) {
      return true;
    }

    return false;
  }

  /**
   * Create a scope.
   * @param {object} options
   * @param {Scope} [options.parentScope] - Id of parent node
   */
  constructor (options = {}) {

    const { parentScope } = options;

    if (typeof parentScope !== 'undefined' && !Scope.isValidScope(parentScope)) {
      throw new Error(`Invalid parent scope '${asStringValue(parentScope)}'`);
    }

    /**
     * Parent scope of this scope
     * @type {Scope}
     */
    this.parentScope = parentScope || null;
  }
}

module.exports = Scope;