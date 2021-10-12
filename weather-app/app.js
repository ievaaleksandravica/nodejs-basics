const request = require('postman-request');
const config = require('../config.js');
const chalk = require('chalk');

const weatherAPI = config.keys.WEATHERSTACK_KEY;
const url = `http://api.weatherstack.com/current?access_key=${weatherAPI}&query=37.8267,-122.4233&units=s`;
console.log(url)

request({ url: url, json: true }, (error, response) => {
    data = response.body.current;
    console.log('It is currently ' + chalk.green.bold(data.temperature) + ' degrees out! It feels like ' + chalk.yellow.bold(data.feelslike) + ' degrees out. It is ' + chalk.green(data.weather_descriptions[0].toLowerCase()) + '.'

    )
});

// Print a small forecast to the user
// print 'it is currently 9 degtrees out. It feeld like 5 degrees out'


// console.log('Starting..');
// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000);
// setTimeout(() => {
//     console.log('0 second timer')
// }, 0);
// console.log('Stopping..');