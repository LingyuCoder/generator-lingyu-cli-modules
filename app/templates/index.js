'use strict';
const program = require('commander');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));

program.version(pkg.version)
  .usage('[options] <file>')
  .option('-t, --test', 'Run test')
  .action((file, prog) => {
    if (prog.test) console.log('test');
  });

module.exports = program;
