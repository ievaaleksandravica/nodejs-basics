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
        socket.emit('message', generateMessage('Server', `Welcome, ${user.username}! You have joined ${user.room} room!`)
        )
        socket.broadcast.to(user.room).emit('message', generateMessage('Server', `${user.username} has joined!`))
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        console.log(user)
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        if (user) {
            io.to(user.room).emit('message', generateMessage(user.username, message)
            )
        }

        callback()
    })

    socket.on('disconnect', () => {
        const user = removingUser(socket.id)
        if (user) {
            console.log(user)
            io.to(user[0].room).emit('message', generateMessage(
                'Server', `${user[0].username} has left`))
            io.to(user[0].room).emit('roomData', {
                room: user[0].room,
                users: getUsersInRoom(user[0].room)
            })
        }
    })

    socket.on('sendLocation', (coordinates, callback) => {
        const user = getUser(socket.id)
        console.log(user.username)
        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`)),
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