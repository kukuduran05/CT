const fs = require("fs");
const Reader = require('@maxmind/geoip2-node').Reader;

const cityService = function(ipAddress) {
    try {
        const dbBuffer = fs.readFileSync('./dbs/GeoLite2-City.mmdb');
        const reader = Reader.openBuffer(dbBuffer);
        return reader;
    } catch(error) {
        console.log(error);
    }
}

module.exports = cityService;