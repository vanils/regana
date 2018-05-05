
const md5 = require('md5');
const map = {};

let index = 0;

/**
 * Create unique ids for segments. We want id generator which will always give
 * same output.
 * @memberof utils
 */
const createId = (prefix) => {

  let id = 0;

  while (!id || map[id]) {
    index += 1;
    id = prefix + md5(prefix + index);
  }

  map[id] = true;

  return id;
};

module.exports = createId;