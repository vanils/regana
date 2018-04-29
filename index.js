
// const Node = require('./src/utils/models/node/Node');

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const babylon = require('babylon');
// const esprima = require('esprima');
const path = require('path');
const fs = require('fs');

const entry = path.resolve(process.cwd(), argv._[0]);
const content = fs.readFileSync(entry, { encoding: 'utf8' });

// ESPrima implementation

// const options = {
//   sourceType: 'module',
//   position: true,
//   range: true,
//   loc: true
// };

// console.log(JSON.stringify(esprima.parse(content, options), null, 2));

// Babylon implementation

const options = {
  sourceType: 'module',
  tokens: false,
  plugins: [
    'objectRestSpread',
    'jsx'
  ]
};

console.log(JSON.stringify(babylon.parse(content, options), null, 2));