// Import libraries
const fs = require("fs");
const minimist = require("minimist");

// Import custom services or functions
const readFile = require("./utils/readFile");

// Get args from the path
const argv = minimist(process.argv.slice(2));
const { f: file, onf: output_name_file } = argv;
// console.log(argv);

async function main() {
  // Validate if file exists
  if (!fs.existsSync(file))
    throw new Error(`Invalid Path or File doesn't exist`);
  // Read the log file
  readFile(file, output_name_file);
}

main();
