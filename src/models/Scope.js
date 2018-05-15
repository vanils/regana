
const isWithinRange = require('../utils/validate/isWithinRange');
const asStringValue = require('../utils/asStringValue');
const isInstance = require('../utils/validate/isInstance');
const isUndefined = require('../utils/validate/isUndefined');
const isNumber = require('../utils/validate/isNumber');
const isFile = require('../utils/validate/isFile');
const isId = require('../utils/validate/isId');

/**
 * Scope entity representing a scope.
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

  /**
   * Get segment id by using pointer as selector.
   *
   * @param {string} pointer - Pointer to use to select segment. This would be
   * a variable name.
   * @returns {string} Segment id.
   *
   * @example
   * const segmentId = scope.getSegmentIdByPointer('myVariable');
   */
  getSegmentIdByPointer (pointer) {

    if (this.pointers[pointer]) {
      return this.pointers[pointer];
    }

    if (!this.parentScope) {
      throw new Error(`Pointer '${pointer}' does not exist in file ${this.file}`);
    }

    return this.parentScope.getSegmentIdByPointer(pointer);
  }

  /**
   * Add new segment to scope.
   *
   * @param {string} id - If of this segment.
   * @param {number} start - Index of first character of this segment.
   * @param {number} end - Index of first character after this segment.
   * @param {Object} options - Optional parameters.
   * @param {Scope} [options.uses] - Array of other segments which should be
   * considered as part of this segment.
   * @param {Scope} [options.usesPointers] - Array of pointers needed for
   * this segment. Basically this means variables which this segment is using.
   * @param {Scope} [options.pointer] - If this segment is going to create a new
   * variable this would be the pointer to it.
   * @param {Scope} [options.exposes] - If this segment is going to expose
   * something outside of scope.
   *
   * @example
   * scope.addSegment(createId('VariableDeclaration'), 10, 33);
   */
  addSegment (id, start, end, options = {}) {

    const {
      uses = [],
      usesPointers = [],
      exposes = [],
      pointer = null
    } = options;

    if (!isId(id)) {
      throw new Error(`Invalid segment id '${asStringValue(id)}'`);
    }

    if (!isNumber(start)) {
      throw new Error(`Invalid segment start value '${asStringValue(start)}'`);
    }

    if (!isNumber(end)) {
      throw new Error(`Invalid segment end value '${asStringValue(end)}'`);
    }

    if (!isWithinRange(start, end, this.start, this.end)) {
      throw new Error(`Segment '${asStringValue(id)}' not within the scope`);
    }

    const segment = {
      uses: uses.concat(usesPointers.map(input => this.getSegmentIdByPointer(input))),
      start,
      end,
      id
    };

    if (pointer) {
      this.pointers[pointer] = id;
    }

    exposes.forEach(expose => {
      this.exposes[expose] = id;
    });

    this.segments[id] = segment;
  }
}

module.exports = Scope;