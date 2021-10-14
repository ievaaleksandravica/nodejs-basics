const request = require('postman-request');
const config = require('../config.js');
const chalk = require('chalk');
const { features } = require('process');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


geocode('Berlin', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(13.38333, 52.51667, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

// console.log('Starting..');
// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000);
// setTimeout(() => {
//     console.log('0 second timer')
// }, 0);
// console.log('Stopping..');




// printing longitude and latitude for Los Angeles
// request({ url: mapboxUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log(chalk.red.inverse('Unable to connect to weather service'))
//     } else if (response.body.message) {
//         console.log('The following error have been found:')
//         console.log(chalk.red.bold(response.body.message))
//     } else if (response.body.features.length === 0) {
//         console.log(chalk.red('No location could be found'))
//     } else {
//         data = response.body.features
//         console.log('Displaying weather for: ' + chalk.green.bold(data[0].place_name) + '. ');
//         console.log('Longitude: ' + chalk.bold.yellow(data[0].center[0]));
//         console.log('Latitude: ' + chalk.bold.yellow(data[0].center[1]));
//     }
// })


// printing a small forecast to the user 
// request({ url: weatherUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log(chalk.red('Unable to connect to weather service'))
//     } else if (response.body.error) {
//         console.log('The following error have been found:')
//         console.log(chalk.red.bold(response.body.error.info))
//     } else {
//         data = response.body.current;
//         console.log('It is currently ' + chalk.green.bold(data.temperature) + ' degrees out! It feels like ' + chalk.yellow.bold(data.feelslike) + ' degrees out. It is ' + chalk.green(data.weather_descriptions[0].toLowerCase()) + '.'
//         )
//     }
// });