var swConfig = require('./sw-config');
var toolboxConfig = require('./sw-toolbox-config');

module.exports = {
  staticFileGlobs: [
    'app/css/**.css',
    'app/**.html',
    'app/images/**.*',
    'app/js/**.js'
  ],
  stripPrefix: swConfig.rootDir,
  runtimeCaching: toolboxConfig
};