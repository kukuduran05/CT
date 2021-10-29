const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createCSV = async function(data) {
    const csvWriter = createCsvWriter({
        path: 'out.csv',
        header: [
          {id: 'ip', title: 'IP Address'},
          {id: 'city', title: 'City'},
          {id: 'country', title: 'Country'},
          {id: 'statusCode', title: 'Status Code'},
          {id: 'size', title: 'Size'},
          {id: 'time', title: 'Time'},
          {id: 'protocol', title: 'Protocol'},
          {id: 'method', title: 'Method'},
          {id: 'userAgent', title: 'User Agent'},
          {id: 'deviceType', title: 'Device Type'},
          {id: 'browser', title: 'Browser'},
          {id: 'resource', title: 'Resource'},
          {id: 'referer', title: 'Referer'}
        ]
    });

    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}

module.exports = createCSV;