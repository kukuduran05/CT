const Reader = require('@maxmind/geoip2-node').Reader;

const countryService = function(ipAddress) {
    try {
        var country = "";
        Reader.open('./dbs/GeoLite2-Country.mmdb').then(reader => {
            const response = reader.country('66.249.84.171');
            country = response.country.isoCode;
            // console.log(response);
            // if (response.country === undefined){
            //     // console.log(response);
            //     country = "";
            // } else {
            //     country = response.country.isoCode;
            // }
            // console.log(country);
            return country;
            // console.log(response.country.isoCode); // 'US'
        });
    } catch(error) {
        console.log(error);
    }
}

module.exports = countryService;