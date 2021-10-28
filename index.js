// Imports
const minimist = require('minimist');
const validatePath = require('./utils/validatePath');

// Read argv from path
const argv = minimist(process.argv.slice(2));
const { f:file } = argv;

//Validate if path exists
validatePath(file);
