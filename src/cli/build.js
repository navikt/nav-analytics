const write = require('../generator/write');
const rootDir = require('../utils/root-dir');
const targetDir = rootDir('build');
console.log('Starting to genereate files, target:', targetDir);
const result = write(targetDir);
console.log(result);
