const request = require('postman-request');
const config = require('../config.js');
const chalk = require('chalk');

// Weather API
const weatherAPI = config.keys.WEATHERSTACK_KEY;
const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherAPI}&query=37.8267,-122.4233`;

// MapBox API
const mapboxAPI = config.keys.MAPBOX_TOKEN;
const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapboxAPI}&limit=1`;

// printing a small forecast to the user 
request({ url: weatherUrl, json: true }, (error, response) => {
    data = response.body.current;
    console.log('It is currently ' + chalk.green.bold(data.temperature) + ' degrees out! It feels like ' + chalk.yellow.bold(data.feelslike) + ' degrees out. It is ' + chalk.green(data.weather_descriptions[0].toLowerCase()) + '.'
    )
});



// printing longitude and latitude for Los Angeles
request({ url: mapboxUrl, json: true }, (error, response) => {
    data = response.body.features
    console.log('Displaying weather for: ' + chalk.green.bold(data[0].place_name) + '. ');
    console.log('Longitude: ' + chalk.bold.yellow(data[0].center[0]));
    console.log('Latitude: ' + chalk.bold.yellow(data[0].center[1]));

})

// console.log('Starting..');
// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000);
// setTimeout(() => {
//     console.log('0 second timer')
// }, 0);
// console.log('Stopping..');