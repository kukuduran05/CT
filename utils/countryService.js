const fs = require("fs");
const Reader = require('@maxmind/geoip2-node').Reader;

const countryService = function() {
    try {
        const dbBuffer = fs.readFileSync('./dbs/GeoLite2-Country.mmdb');
        const reader = Reader.openBuffer(dbBuffer);
        return reader;
    } catch(error) {
        console.log(error);
    }
}

module.exports = countryService;