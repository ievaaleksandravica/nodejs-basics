// two core modules
// - HTTP
// - HTTPS

const http = require('http')
const config = require('../config.js')

const weatherAPI = config.keys.WEATHERSTACK_KEY;
const url = `http://api.weatherstack.com/current?access_key=${weatherAPI}&query=40,-75`;

const request = http.request(url, (response) => {
    // need to store the data somewhere
    let data = ''

    // register the event data beginning
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        body = JSON.parse(data)
        console.log(body)
    })


    // register the event data end
    response.on('end', () => {

    })
})

request.on('error', (error) => {
    console.log(error)
})

// you actually need to fire up the event.
request.end()

// request.on('', () => {}) is basically an event listener