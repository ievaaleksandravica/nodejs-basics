const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const Filter = require('bad-words')

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

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        io.emit('message', message)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left')
    })

    socket.on('sendLocation', (coordinates, callback) => {
        io.emit('message', `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`)
        callback()
    }

    )
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