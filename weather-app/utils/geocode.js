const config = require('../../config.js');
const request = require('postman-request');

const geocode = (address, callback) => {
    // MapBox API
    // encoded address makes sure entering ? becomes %3F and doesn't break
    const mapboxAPI = config.keys.MAPBOX_TOKEN;
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxAPI}&limit=1`;
    request({ url: mapboxUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('No location could be found', undefined)
        } else if (response.body.message) {
            callback(`The following error have been found: ${response.body.message}`, undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                place: response.body.features[0].place_name
            })
        }
    })
};

module.exports = geocode