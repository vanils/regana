
/*
 * Internal helper function to check if value is between of two other values
 */
const isBetween = (value, min, max) => {
  return value >= min && value <= max;
};

/**
 * Check if values (start and end) are within range of another.
 *
 * @memberof utils.validate
 * @param {number} xStart - Start value you want to be within another range.
 * @param {number} xEnd - End value you want to be within another range.
 * @param {number} yStart - Start value of what you test against.
 * @param {number} yEnd - End value of what you test against.
 *
 * @example
 * isWithinRange(10, 20, 5, 30);  // true
 * isWithinRange(2, 20, 5, 30);   // false
 * isWithinRange(15, 35, 5, 30);  // false
 */
const isWithinRange = (xStart, xEnd, yStart, yEnd) => {
  return isBetween(xStart, yStart, yEnd) && isBetween(xEnd, yStart, yEnd);
};

module.exports = isWithinRange;