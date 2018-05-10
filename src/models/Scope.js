
const asStringValue = require('../utils/asStringValue');
const isInstance = require('../utils/validate/isInstance');
const isUndefined = require('../utils/validate/isUndefined');
const isNumber = require('../utils/validate/isNumber');
const isFile = require('../utils/validate/isFile');

/**
 * Scope entity representing a scope
 */
class Scope {

  /**
   * Create a scope.
   * @param {number} start - index of first character of this scope
   * @param {number} end - index of first character after this scope
   * @param {object} options
   * @param {Scope} [options.parentScope] - Parent Scope
   * @param {Scope} [options.file] - file assosiated with this scope. If not
   * specified, will be inherited from parent scope.
   */
  constructor (start, end, options = {}) {

    const {
      parentScope,
      file
    } = options;

    if (!isNumber(start)) {
      throw new Error(`Invalid scope start value '${asStringValue(start)}'`);
    }

    if (!isNumber(end)) {
      throw new Error(`Invalid scope end value '${asStringValue(end)}'`);
    }

    if (!isUndefined(parentScope) && !isInstance(parentScope, Scope)) {
      throw new Error(`Invalid parent scope '${asStringValue(parentScope)}'`);
    }

    if (!isUndefined(file) && !isFile(file)) {
      throw new Error(`Invalid file '${asStringValue(file)}'`);
    }

    if (isUndefined(file) && (isUndefined(parentScope) || isUndefined(parentScope.file))) {
      throw new Error(`Cannot assosiate scope with any file`);
    }

    /**
     * Parent scope of this scope
     * @type {Scope}
     */
    this.parentScope = parentScope || null;

    /**
     * File in which this scope belongs to
     * @type {string}
     */
    this.file = file || this.parentScope.file;

    /**
     * Segments within this scope
     * @type {object}
     */
    this.segments = {};

    /**
     * List of exposed items within this scope
     * @type {object}
     */
    this.exposes = {};

    /**
     * List of pointers within this scope
     * @type {object}
     */
    this.pointers = {};
  }
}

module.exports = Scope;