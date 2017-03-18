var gulp  = require('gulp');
var swConfig = require('./sw-config');
var swPrecacheConfig = require('./sw-precache-config');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');

  swPrecache.write(path.join(swConfig.rootDir, swConfig.swFile), swPrecacheConfig, callback);
});