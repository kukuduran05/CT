const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createCSV = async function(data) {
    console.log(data);
    const csvWriter = createCsvWriter({
        path: 'out.csv',
        header: [
          {id: 'ip', title: 'IP Address'},
          {id: 'country', title: 'Country'}
          // {id: 'method', title: 'Method'},
          // {id: 'resource', title: 'Resource'},
          // {id: 'protocol', title: 'Protocol'}
        ]
    });

    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}

module.exports = createCSV;