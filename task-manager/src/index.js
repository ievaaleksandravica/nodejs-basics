const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { ObjectID } = require('bson')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then((response) => {
        console.log(response)
        res.status("201").send(response)
    }).catch((error) => {
        console.log(error)
        res.status('400').send(error)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((response) => {
        res.status('202').send(response)
    }).catch((error) => {
        res.status('500').send(error)
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    const param = ObjectID(req.params.id)
    User.findOne({ _id: param }).then((response) => {
        if (!response) {
            res.status('404').send(response)
        }
        res.status('202').send(response)
        console.log(response)
    }).catch((error) => {
        res.status('500').send(error)
    })
})


app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then((response) => {
        res.status("201").send(response)
    }).catch((error) => {
        res.status("400").send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({ completed: false }).then((response) => {
        if (response.length === 0) {
            return res.status('404').send(response)
        }
        res.status('202').send(response)
    }).catch((error) => {
        res.send(error)
    })
})

app.get("/tasks/:id", (req, res) => {
    _id = req.params.id
    console.log(_id)
    Task.findById(_id).then((response) => {
        if (!response) {
            return res.status('404').send(response)
        }
        res.send(response)
    }).catch((error) => {
        res.status('500').send(error)
    })

})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}.`)
})

