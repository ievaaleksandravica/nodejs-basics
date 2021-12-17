const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocationMessage } = require('./utils/messages')
const { addUser, getUser, removingUser, getUsersInRoom } = require('./utils/users')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

// let count = 0
// const message = 'Welcome'

io.on('connection', (socket) => {
    console.log('New WebSocket Connection')

    socket.on('join', ({ username, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, room })

        if (error) {
            return callback(error)
        }

        socket.join(user.room)
        socket.emit('message', generateMessage(`Welcome, ${user.username}! You have joined ${user.room} room!`)
        )
        socket.broadcast.to(user.room).emit('message', generateMessage(`${user.username} has joined!`))

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        io.emit('message', generateMessage(message)
        )
        callback()
    })

    socket.on('disconnect', () => {
        const user = removingUser(socket.id)
        if (user) {
            console.log(user)
            io.to(user[0].room).emit('message', generateMessage(`${user[0].username} has left`))
        }
    })

    socket.on('sendLocation', (coordinates, callback) => {
        io.emit('locationMessage', generateLocationMessage(`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`)),
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