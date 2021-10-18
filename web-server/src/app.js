const path = require('path')
// get the express library with single function (express) called to create new express application
const express = require('express');

// all you need is to call this function with no arguments
const app = express()

// a way to customize your server
// `express.static() brings you to the path you wanna go in terms of html
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

// app.com, app.com/help, app.com/about - different routes
// what to do when someone tries to access the specific resource 
// .get(route, function (req, res) what to do when someone visits)
// req - request - info about the requestor
// res - response - info we will send back to the requester


app.get('/weather', (req, res) => {
    res.send({
        location: 'Berlin',
        forecast: "It's sunny. Temperature is 12 degrees out.",
    },
    )
})

// start the server on local host (port) and callback function (asynchronous)
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
// access it using localhost:3000

