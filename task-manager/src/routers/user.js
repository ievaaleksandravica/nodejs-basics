const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status("201").send({ user, token })
    } catch (error) {
        res.status('400').send(error)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status('202').send(users)
    } catch (error) {
        res.status('500').send(error)
    }
})

router.get('/users/:id', async (req, res) => {
    const param = req.params.id
    try {
        const user = await User.findById(param)
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

router.patch('/users/:id', async (req, res) => {
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status('400').send({ error: `invalid updates` })
    }
    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        await user.save()
        // const user_id = req.params.id
        // const user = await User.findByIdAndUpdate(user_id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status('404').send(user)
        }
        res.send(user)
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            return res.status('400').send(error)
        }
        res.status('505').send(error)
    }
})

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status('404').send({ error: "no id found" })
        }
        return res.send(user)
    } catch (error) {
        res.status('500').send(error)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status('404').send(error)
    }
})

module.exports = router