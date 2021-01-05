'use strict';

const through = require('through2');
const stripPragmas = require('./stripPragmas');

function gulpStripPragmas(options) {
  return through.obj(function(file, _, cb) {
    if (file.isBuffer()) {
      const contents = file.contents.toString('utf8');
      file.contents = Buffer.from(stripPragmas(contents, options.pragmas));
    }
    cb(null, file);
  });
}

module.exports = gulpStripPragmas;
