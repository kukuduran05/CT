const fs = require("fs");
const Reader = require('@maxmind/geoip2-node').Reader;

const cityService = function(ipAddress) {
    try {
        const dbBuffer = fs.readFileSync('./dbs/GeoLite2-City.mmdb');
        const reader = Reader.openBuffer(dbBuffer);
        const res = reader.city(ipAddress);
        var city;
        (res.city === undefined) ? city = "" : (res.city.names === undefined) ? city = "" : city = res.city.names.en;
        return city;
            // console.log(res.city.names.en);
            
        //     country = res.country.isoCode;
        // }
        // return country;
    } catch(error) {
        console.log(error);
    }
}

module.exports = cityService;