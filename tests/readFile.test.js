// Import custom services or functions
const cityService = require('../utils/cityService');
const countryService = require('../utils/countryService');

const fakeData = `76.125.171.65 - - [10/Jun/2015:18:15:15 +0000] "POST /wp-admin/admin-ajax.php HTTP/1.1" 200 129 "http://www.gobankingrates.com/?keyword=bank+account" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36"`;
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
  ] = fakeData.split(" ");

// Get City from IP
const cityServiceReader = cityService();
const countryServiceReader = countryService();

test('Get IP Address', () => {
    expect(fakeData).toMatch(ip);
    console.log(ip);
});
test('Get City from IP', () => {
    let city = cityServiceReader.city(ip);
    city.city === undefined
      ? (city = "")
      : city.city.names === undefined
      ? (city = "")
      : (city = city.city.names.en);
    expect(city).toMatch('Washington');
});
test('Get Country from IP', () => {
    let country = countryServiceReader.country(ip);
    country.country === undefined
      ? (country = "")
      : (country = country.country.isoCode);
    expect(country).toMatch('US');
});
test('Get Time', () => {
    expect(fakeData).toMatch(ts);
});
test('Get Zone', () => {
    expect(fakeData).toMatch(tz);
});
test('Get Method', () => {
    expect(fakeData).toMatch(method);
});
test('Get Resourse', () => {
    expect(fakeData).toMatch(resource);
});
test('Get Protocol', () => {
    expect(fakeData).toMatch(protocol);
});
test('Get Status Code', () => {
    expect(fakeData).toMatch(statusCode);
});
test('Get Size', () => {
    expect(fakeData).toMatch(size);
});
test('Get Referer', () => {
    expect(fakeData).toMatch(referer);
});
test('Get User Agent', () => {
    expect(fakeData).toMatch(...userAgent);
});
