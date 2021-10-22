const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)

hbs.registerPartials(partialsDirectory)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather app",
        name: "Fun times"
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
        title: "Help Page",
        name: "Jessica Moll"
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Address must be provided"
        })
    }
    res.send({
        location: 'Berlin',
        forecast: "It's sunny. Temperature is 12 degrees out.",
        address: req.query.address
    },
    )
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Search param has to be provided.'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})


// CATCH ALL
// match based on specific character
app.get('/help/*', (req, res) => {
    res.render('help-error', {
        title: "NO ARTICLE FOUND",
        name: "Jessica Moll"
    })
})
// use wildcard to match anything that hasn't been matched so far, that is why it has to be at the end
app.get('*', (req, res) => {
    res.render('generic-error', {
        title: "NO PAGE FOUND",
        name: "Jessica Moll"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

