'use strict';

var path = require('path');

/**
 * Will return the path and default whivecore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to Dash database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }

  var datadir = options.datadir || path.resolve(process.env.HOME, '.whive');

  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 3001,
      services: ['whived', 'web'],
      servicesConfig: {
        whived: {
          spawn: {
            datadir: datadir,
            exec: path.resolve(__dirname, datadir, 'whived')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
