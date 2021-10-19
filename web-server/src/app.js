const path = require('path')
const express = require('express');
const hbs = require('hbs');


const app = express()


const publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs')

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

