
/**
 * Turn any value into string format. Useful for loggin any value.
 * @memberof utils
 */
const asStringValue = value => {

  if (typeof value === 'undefined') {
    return 'undefined';
  }

  if (value === null) {
    return 'null';
  }

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  return Object.prototype.toString.call(value);
};

module.exports = asStringValue;