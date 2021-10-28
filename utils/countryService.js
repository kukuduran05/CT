const fs = require("fs");
const Reader = require('@maxmind/geoip2-node').Reader;

const countryService = function(ipAddress) {
    try {
        const dbBuffer = fs.readFileSync('./dbs/GeoLite2-Country.mmdb');
        const reader = Reader.openBuffer(dbBuffer);
        const res = reader.country(ipAddress);
        var country;
        if (res.country === undefined){
            country = "";
        } else {
            country = res.country.isoCode;
        }
        return country;
    } catch(error) {
        console.log(error);
    }
}

module.exports = countryService;