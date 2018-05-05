
const babylon = require('babylon');

/**
 * Turn file content into entities
 * @memberof utils
 */
const entitify = content => {

  const options = {
    sourceType: 'module',
    tokens: false,
    plugins: [
      'objectRestSpread',
      'jsx'
    ]
  };

  return babylon.parse(content, options);
};

module.exports = entitify;