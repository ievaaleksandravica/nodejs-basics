const config = require('../../config.js');
const request = require('postman-request');
const chalk = require('chalk');


const forecast = (longitude, latitude, callback) => {
    // Weather API
    const weatherAPI = config.keys.WEATHERSTACK_KEY;
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherAPI}&query=${latitude},${longitude}`;
    // printing a small forecast to the user 
    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback(`The following error have been found: ${response.body.error.info}`)
        } else {
            data = response.body.current;
            callback(undefined, 'It is currently ' + chalk.green.bold(data.temperature) + ' degrees out! It feels like ' + chalk.yellow.bold(data.feelslike) + ' degrees out. It is ' + chalk.green(data.weather_descriptions[0].toLowerCase()) + '.'
            )
        }
    });

}

module.exports = forecast