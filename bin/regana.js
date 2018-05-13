#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * @file Main CLI that is run via the regana command.
 * @author Matti Mehtonen
 */

const pleaseUpgradeNode = require('please-upgrade-node');
const regana = require('../src/regana');
const pkg = require('../package.json');
const minimist = require('minimist');
const chalk = require('chalk');
const path = require('path');

/**
 * Log an error message with optional usage information.
 */
const logError = (e) => {
  console.log();
  console.log(chalk.red(e.stack));
  console.log();
  console.log('usage: regana [options] entry.js');
  console.log('  options:');
  console.log('    -c, --compare   branch to compare with, defaults to master');
  console.log();
};

/*
 * Abort the mission if we are dealing with too old Node version
 */
pleaseUpgradeNode(pkg);

const argv = minimist(process.argv.slice(2));
const [entry] = argv._;

try {

  if (!entry || typeof entry !== 'string') {
    throw new Error('missing entry');
  }

  console.log(regana.analyse(path.resolve(process.cwd(), entry)));
} catch (e) {
  logError(e);
  process.exitCode = 0;
}