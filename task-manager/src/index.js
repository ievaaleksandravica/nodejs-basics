const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { ObjectID } = require('bson')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        console.log(user)
        res.status("201").send(user)
    } catch (error) {
        console.log(error)
        res.status('400').send(error)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status('202').send(users)
    } catch (error) {
        res.status('500').send(error)
    }
})

app.get('/users/:id', async (req, res) => {
    const param = ObjectID(req.params.id)
    try {
        const user = await User.findOne({ _id: param })
        if (!user) {
            return res.status('404').send(response)
        }
        res.status('202').send(user)
    } catch (error) {
        res.status('500').send(error)
    }
    // User.findOne({ _id: param }).then((response) => {
    //     if (!response) {
    //         res.status('404').send(response)
    //     }
    //     res.status('202').send(response)
    //     console.log(response)
    // }).catch((error) => {
    //     res.status('500').send(error)
    // })
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        const taskNew = await task.save()
        res.status("201").send(taskNew)
    } catch (error) {
        res.status("400").send(error)
    }
    // task.save().then((response) => {
    //     res.status("201").send(response)
    // }).catch((error) => {
    //     res.status("400").send(error)
    // })
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({ completed: false })
        if (tasks.length === 0) {
            return res.status('404').send(tasks)
        }
        res.status('202').send(tasks)
    } catch {
        res.send(error)
    }
    // Task.find({ completed: false }).then((response) => {
    //     if (response.length === 0) {
    //         return res.status('404').send(response)
    //     }
    //     res.status('202').send(response)
    // }).catch((error) => {
    //     res.send(error)
    // })
})

app.get("/tasks/:id", async (req, res) => {
    _id = req.params.id
    try {
        task = await Task.findById(_id)
        if (!task) {
            return res.status('404').send(task)
        }
        res.send(task)
    } catch (error) {
        res.status('500').send(error)
    }
    // Task.findById(_id).then((response) => {
    //     if (!response) {
    //         return res.status('404').send(response)
    //     }
    //     res.send(response)
    // }).catch((error) => {
    //     res.status('500').send(error)
    // })

})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}.`)
})

