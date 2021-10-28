const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const countryService = require('./countryService');
const cityService = require('./cityService');


const readFile =  async function(url) {
    // console.clear();
    try {
        var dataCSV = [];
        var instream = fs.createReadStream(url, 'utf-8');
        var outstream = new stream();
        var rl = readline.createInterface(instream, outstream);
        rl.on('line', function(line){
            let [ ip, i1, i2, ts, tz, method, resource, protocol, statusCode, size, referer, ...userAgent] = line.split(' ');
            statusCode = +statusCode; // status code should be in number type
            size = +size;
            // ts are wrapped in [ ] , we just remove those
            if(ts){
                ts = ts.replace(/\[|\]/,''); // using regex to replace square brackets
            }
            // tz also is wrapped between [], again replace, but using another method instead of regex
            if(tz){
                tz = tz.substring(0, tz.length -1); // remove [ ]
            }
            const time = ts + tz; // concat time and timezone
            protocol = protocol.substring(0, protocol.length -1);
            method = method.substring(1, method.length);
		    userAgent = userAgent.join('');	// here you need to parse if it's a mobile or desktop, should be easily done by usiing regex ! 
            let country = countryService(ip);
            let city = cityService(ip);
            // dataCSV.push({ip, country, city});
            dataCSV.push(ip);
        });
        console.log(dataCSV);
        // return dataCSV;
    
		//     // dataCSV.push({ ip, time, method, resource, protocol, statusCode, size, referer, userAgent }); // store the result in an array 
        //     dataCSV.push({ip, country});
        // }
        // // console.log(dataCSV);
        // return dataCSV;
    } catch (err) {
        console.error(err)
    }
}

module.exports = readFile;