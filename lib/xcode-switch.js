"use strict";

var exec = require('child_process').exec;

exports.printPath = function() {
  exec('xcode-select --print-path', function(err, stdout, stderr) {
    if (!err) {
      console.log(stdout);
    } else {
      console.log(stderr);
    }
  });
};

exports.switchPath = function(suffix) {
  var xcodepath = '/Applications/Xcode' + suffix + '.app/Contents/Developer/';

  console.log('set developer directory to "' + xcodepath + '"');
  
  exec('xcode-select --switch ' + xcodepath, function(err, stdout, stderr) {
    if (!err) {
      console.log(stdout);
    } else {
      console.log(stderr);
    }
  });  
};
