
/**
 * Entity representing a scope.
 */
class Scope {

  /**
   * Create a scope.
   *
   * @param {number} start - Index of first character of this scope.
   * @param {number} end - Index of first character after this scope.
   * @param {Object} options - Optional parameters.
   * @param {Scope} [options.parentScope] - Parent Scope.
   * @param {Scope} [options.file] - File assosiated with this scope. If not
   * specified, will be inherited from parent scope.
   * @memberof models
   *
   * @example
   * new Scope(0, 200, { file: createId('File') })
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

    if (!isUndefined(parentScope) && !isWithinRange(start, end, parentScope.start, parentScope.end)) {
      throw new Error(`Scope not within the parent scope`);
    }

    /**
     * First character of this scope.
     * @type {number}
     */
    this.start = start;

    /**
     * First character after this scope.
     * @type {number}
     */
    this.end = end;

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
     * Map of segments where segment id is used as key.
     * @type {Object}
     */
    this.segments = {};

    /**
     * Map of exposed segments where pointer is used as key.
     * as key.
     * @type {Object}
     */
    this.exposes = {};

    /**
     * Map of segments where pointer is used as key.
     * @type {Object}
     */
    this.segmentIdByPointer = {};

    /**
     * Array of segments where isWithObject flag is true.
     * @type {Segment[]}
     */
    this.withSegments = [];
  }

  /**
   * Get segment by using pointer as selector.
   *
   * @param {string} pointer - Pointer to use to select segment.
   * @returns {Segment[]} Array of segment ids.
   *
   * @example
   * const segments = scope.getSegmentsByPointer('foo');
   */
  getSegmentsByPointer (pointer) {

    const selection = this.pointers[pointer];

    if (selection) {
      return this.withSegments.concat([selection]);
    }

    if (!this.parentScope) {
      return this.withSegments;
    }

    return this.withSegments.concat(this.parentScope._getSegmentsByPointer(pointer));
  }
}

module.exports = createScope;