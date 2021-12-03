const express = require('express')
const port = process.env.PORT || 3000
const path = require('path')

const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))


app.get('/', function (req, res) {
})

app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})
