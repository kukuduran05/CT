const fs = require("fs");
const Reader = require('@maxmind/geoip2-node').Reader;

const countryService = async function(ipAddress) {
    try {
        // const country = await Reader.open('./dbs/GeoLite2-Country.mmdb');
        // console.log(country);
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
        // console.log(reader.country(ipAddress));
        // Reader.open('./dbs/GeoLite2-Country.mmdb').then(reader => {
        //     // console.log(response);
        //     if (response.country === undefined){
        //     //     // console.log(response);
        //         country = "";
        //     } else {
        //         country = response.country.isoCode;
        //     }
        //     console.log(country);
        //     // return country;
        //     // console.log(response.country.isoCode); // 'US'
        // });
    } catch(error) {
        console.log(error);
    }
}

module.exports = countryService;