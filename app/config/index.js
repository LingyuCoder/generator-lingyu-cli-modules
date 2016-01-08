'use strict';

const DIRECTORIES = ['lib', 'bin'];
const FILES = [
  '.eslintrc',
  '.travis.yml',
  'index.js',
  'LICENSE',
  'package.json',
  'README.md',
  'test/test.js'
];

module.exports = (appname) => {
  const name = appname.split(' ').join('-');
  const common = [{
    type: 'input',
    name: 'name',
    message: 'Name',
    default: name
  }, {
    type: 'input',
    name: 'command',
    message: 'Command',
    default: name
  }, {
    type: 'input',
    name: 'version',
    message: 'Version',
    default: '1.0.0'
  }, {
    type: 'input',
    name: 'author',
    message: 'Author',
    default: 'Your name'
  }, {
    type: 'input',
    name: 'description',
    message: 'Description',
    default: '...'
  }];
  return {
    prompt: common,
    fn: (ctx, done) => {
      return data => {
        DIRECTORIES.forEach(val => ctx.directory(val, val, data));
        ctx.template('gitignore', '.gitignore');
        FILES.forEach(val => ctx.template(val, val, data));
        done();
      };
    }
  };
};
