const request = require('postman-request');
const config = require('../config.js');

const weatherAPI = config.keys.WEATHERSTACK_KEY;
const url = `http://api.weatherstack.com/current?access_key=${weatherAPI}&query=37.8267,-122.4233`

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});

// console.log('Starting..');
// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000);
// setTimeout(() => {
//     console.log('0 second timer')
// }, 0);
// console.log('Stopping..');