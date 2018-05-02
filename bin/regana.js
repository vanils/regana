#!/usr/bin/env node
/* eslint-disable no-console, no-sync */

/**
 * @file Main CLI that is run via the regana command.
 * @author Matti Mehtonen
 */

const pleaseUpgradeNode = require('please-upgrade-node');
const pkg = require('../package.json');
const minimist = require('minimist');
const chalk = require('chalk');
const argv = minimist(process.argv.slice(2));
const path = require('path');
const fs = require('fs');

pleaseUpgradeNode(pkg);

const exitWithError = (message) => {
  console.log();
  console.log(chalk.red(`Error: ${message}`));
  console.log();
  console.log('usage: regana [options] entry.js');
  console.log('  options:');
  console.log('    -c, --compare   branch to compare with, defaults to master');
  console.log();
  process.exitCode = 0;
};

const [ file ] = argv._;

if (!file || typeof file !== 'string') {
  exitWithError('missing entry');
}

const entry = path.resolve(process.cwd(), argv._[0]);

if (!fs.existsSync(entry)) {
  exitWithError(`file does not exist '${entry}'`);
}

console.log(`Entry is ${entry}...`);

const babylon = require('babylon');
const content = fs.readFileSync(entry, { encoding: 'utf8' });

const options = {
  sourceType: 'module',
  tokens: false,
  plugins: [
    'objectRestSpread',
    'jsx'
  ]
};

console.log(JSON.stringify(babylon.parse(content, options), null, 2));