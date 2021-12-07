const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

// let count = 0
const message = 'Welcome'

io.on('connection', (socket) => {
    console.log('New WebSocket Connection')

    socket.emit('message', message)

    socket.broadcast.emit('message', 'A new user has joined.')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left')
    })

    socket.on('sendLocation', (coordinates) => {
        io.emit('message', `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`)
    })
})


app.get('/', function (req, res) {
})

server.listen(port, () => {
    console.log('Server is up on port: ' + port)
})


    // socket.emit('countUpdated', count)
    // socket.on('increment', () => {
    //     count++
    //     // socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
    // })