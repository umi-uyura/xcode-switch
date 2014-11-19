"use strict";

var argv = require('argv');
var packagejson = require('../package.json');
var xcs = require('./xcode-switch');

var args = argv.run();

if (args.targets.length > 0) {
  var suffix = args.targets[0];
  if (suffix === 'main') {
    suffix = '';
  }
  
  xcs.switchPath(suffix);
} else {
  xcs.printPath();
}
