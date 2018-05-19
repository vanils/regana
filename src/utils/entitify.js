
const babylon = require('babylon');

/**
 * Transform file content into entities.
 *
 * @memberof utils
 * @param {string} content - Script content of file to parse.
 *
 * @example
 * entitify('const test = 1');  // returns entities from babylon
 */
const entitify = content => {

  const options = {
    allowReturnOutsideFunction: true,
    sourceType: 'module',
    strictMode: false,
    tokens: false,
    plugins: [
      'objectRestSpread',
      'jsx'
    ]
  };

  return babylon.parse(content, options);
};

module.exports = entitify;