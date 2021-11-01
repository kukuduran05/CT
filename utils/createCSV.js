const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const createCSV = async (data) => {
    const csvWriter = createCsvWriter({
        path: 'output.csv',
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

    await csvWriter.writeRecords(data)
    console.log('The CSV file was written successfully');
}

module.exports = createCSV;