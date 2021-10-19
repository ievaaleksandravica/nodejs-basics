const path = require('path')
const express = require('express');

const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather app",
        name: "Ieva Aleksandravica"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us :)',
        name: "Ieva Aleksandravica"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help page",
        name: "Ieva Aleksandravica"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Berlin',
        forecast: "It's sunny. Temperature is 12 degrees out.",
    },
    )
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

