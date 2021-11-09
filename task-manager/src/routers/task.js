const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
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

router.get('/tasks', async (req, res) => {
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

router.get("/tasks/:id", async (req, res) => {
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

router.patch('/tasks/:id', async (req, res) => {
    const task_id = req.params.id
    const allowedTaskUpdates = ['description', 'completed']
    const providedUpdates = Object.keys(req.body)
    const allowed = providedUpdates.every((update) => allowedTaskUpdates.includes(update))
    if (!allowed) {
        return res.status('400').send({ error: "wrong update key" })
    }
    try {
        const task = await Task.findById(task_id)
        providedUpdates.forEach((update) => {
            task[update] = req.body[update]
        })
        task.save()
        // const task = await Task.findByIdAndUpdate(task_id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status('404').send({ error: 'no task found' })
        }
        res.send(task)
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status('400').send({ error: 'validation error' })
        }
        res.status('500').send(error)
    }


})

router.delete('/tasks/:id', async (req, res) => {
    id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status('404').send({ error: 'no task id found' })
        }
        res.send(task)
    } catch (error) {
        res.status('505').send(error)
    }
})

module.exports = router