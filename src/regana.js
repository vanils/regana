
'use strict';

const analyse = require('./commands/analyse');

/**
 * @file Expose out Analyser and other tools
 * @author Matti Mehtonen
 */

module.exports = {
  analyse: (entry) => {

    if (!entry || typeof entry !== 'string') {
      throw new Error('missing entry');
    }

    return analyse(entry);
  }
};