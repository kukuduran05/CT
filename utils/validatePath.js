const fs = require("fs");
const readFile = require('./readFile');
const createCSV = require('./createCSV');


const validatePath =  async function(file) {
    try {
        if (fs.existsSync(file)){
            // file exists
            main(file);
        }
    } catch(error) {
        console.log(error);
    }
}

async function main (file) {
    // Read file for get line by line
    await readFile(file);
    // const res = await readFile(file);
    // console.log(res);
    // await createCSV(res);
}

module.exports = validatePath;