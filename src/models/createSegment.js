
/**
 * Create a scope.
 *
 * @param {number} start - Index of first character of this scope.
 * @param {number} end - Index of first character after this scope.
 * @param {Object} options - Optional parameters.
 * @param {string[]} [options.exposes] - Array of pointers which are exposed.
 * @param {string} [options.pointer] - Pointer for this segment if one exists.
 * @memberof models
 *
 * @example
 * createSegment(0, 200, { pointer })
 */
const createSegment = (type, start, end, options = {}) => {

  const {
    isWithObject = false,
    exposes = [],
    pointer = null
  } = options;

  if (!isType(type)) {
    throw new Error(`Invalid segment type '${asStringValue(type)}'`);
  }

  if (!isNumber(start)) {
    throw new Error(`Invalid segment start value '${asStringValue(start)}'`);
  }

  if (!isNumber(end)) {
    throw new Error(`Invalid segment end value '${asStringValue(end)}'`);
  }

  return new Segment(start, end, exposes, pointer, isWithObject);

};

/**
 * Entity representing a segment.
 */
class Segment {

  /*
   * Not documented as shouldn't be directly invoked outside of this file
   */
  constructor (type, start, end, exposes, pointer, isWithObject) {

    /**
     * Id of this segment.
     * @type {string}
     */
    this.id = getId(type);

    /**
     * Type of this segment.
     * @type {string}
     */
    this.type = type;

    /**
     * Index of first character of this segment.
     * @type {number}
     */
    this.start = start;

    /**
     * Index of first character after this segment.
     * @type {number}
     */
    this.end = end;

    /**
     * Array of pointers which this segment exposes.
     * @type {string[]}
     */
    this.exposes = exposes;

    /**
     * Pointer for this segment.
     * @type {string}
     */
    this.pointer = pointer;

    /**
     * If this segment should behave as with object
     */
    this.isWithObject = isWithObject;
  }
}

module.exports = createSegment;