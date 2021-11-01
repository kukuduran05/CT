// Import libraries
const fs = require("fs");
const stream = require("stream");
const readline = require("readline");
const UAParser = require("ua-parser-js");

// Import custom services or functions
const countryService = require("./countryService");
const cityService = require("./cityService");
const createCSV = require("./createCSV");;

const readFile = function (file, output_name_file) {
  // Data is declared for save the information to export in CSV
  const data = [];
  const instream = fs.createReadStream(file, "utf-8");
  const outstream = new stream();
  const rl = readline.createInterface(instream, outstream);
  // Get Country and City from IP
  const countryServiceReader = countryService();
  const cityServiceReader = cityService();

  // Read line by line
  rl.on("line", function (line) {
    // Get properties from line
    let [
      ip,
      i1,
      i2,
      ts,
      tz,
      method,
      resource,
      protocol,
      statusCode,
      size,
      referer,
      ...userAgent
    ] = line.split(" ");
    // Status code should be in number type
    statusCode = +statusCode;
    size = +size;
    // ts are wrapped in [ ] , we just remove those
    if (ts) {
      // Using regex to replace square brackets
      ts = ts.replace(/\[|\]/, "");
    }
    // tz also is wrapped between [], again replace, but using another method instead of regex
    if (tz) {
      tz = tz.substring(0, tz.length - 1); // remove [ ]
    }
    // Concat time and timezone
    const time = ts + tz;
    protocol = protocol.substring(0, protocol.length - 1);
    method = method.substring(1, method.length);
    // Get Country from IP
    let country = countryServiceReader.country(ip);
    country.country === undefined
      ? (country = "")
      : (country = country.country.isoCode);
    // Get City from IP
    let city = cityServiceReader.city(ip);
    city.city === undefined
      ? (city = "")
      : city.city.names === undefined
      ? (city = "")
      : (city = city.city.names.en);
    // User Agent information, I used ua-parser-js library for get information about User Agent
    let parser = new UAParser();
    userAgent = userAgent.join("");
    parser.setUA(userAgent);
    const UA = parser.getResult();
    let deviceType = UA.device.type;
    deviceType === undefined
      ? (deviceType = "")
      : (deviceType = UA.device.type);
    let browser = UA.browser.name;
    browser === undefined ? (browser = "") : (browser = UA.browser.name);
    // Properties are added to data array
    data.push({
      ip,
      statusCode,
      size,
      time,
      protocol,
      method,
      resource,
      country,
      city,
      referer,
      userAgent,
      deviceType,
      browser,
    });
  })
    .on("close", function () {
      // Export data to CSV
      createCSV(data, output_name_file);
    })
    .on("error", function (err) {
      // In error case
      console.log(err.message);
    });
};

module.exports = readFile;
