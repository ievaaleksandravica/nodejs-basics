// get the express library with single function (express) called to create new express application
const express = require('express');

// all you need is to call this function with no arguments
const app = express()

// app.com, app.com/help, app.com/about - different routes
// what to do when someone tries to access the specific resource 
// .get(route, function (req, res) what to do when someone visits)
// req - request - info about the requestor
// res - response - info we will send back to the requester

app.get('', (req, res) => {
    // allows to send something back to the requestor
    res.send('<h1>Hello, express!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1 style="color:purple">ABOUT US </h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Berlin',
        forecast: "It's sunny. Temperature is 12 degrees out.",
    },
    )
})

app.get('/help', (req, res) => {
    res.send('This is HELP page')
})
// start the server on local host (port) and callback function (asynchronous)
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
// access it using localhost:3000

