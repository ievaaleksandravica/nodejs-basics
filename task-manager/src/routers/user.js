const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
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

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user, token
        })
    } catch (error) {
        res.status('404').send(error)
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        console.log(req.token)
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send({ status: "logout successful." })
    } catch (error) {
        res.status(500).send({ error: "unknown error occured." })
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({ status: "successful logout of all active sessions" })
    } catch (error) {
        res.status(500).send({ error: "unknown error occured" })
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.status('202').send(req.user)
})

// router.get('/users/:id', async (req, res) => {
//     const param = req.params.id
//     try {
//         const user = await User.findById(param)
//         if (!user) {
//             return res.status('404').send(response)
//         }
//         res.status('202').send(user)
//     } catch (error) {
//         res.status('500').send(error)
//     }
//     // User.findOne({ _id: param }).then((response) => {
//     //     if (!response) {
//     //         res.status('404').send(response)
//     //     }
//     //     res.status('202').send(response)
//     //     console.log(response)
//     // }).catch((error) => {
//     //     res.status('500').send(error)
//     // })
// })

router.patch('/users/me', auth, async (req, res) => {
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status('400').send({ error: `invalid updates` })
    }
    try {
        updates.forEach((update) => {
            req.user[update] = req.body[update]
        })
        await req.user.save()
        // const user_id = req.params.id
        // const user = await User.findByIdAndUpdate(user_id, req.body, { new: true, runValidators: true })
        // if (!user) {
        //     return res.status('404').send(user)
        // }
        res.send(req.user)
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            return res.status('400').send(error)
        }
        res.status('505').send(error)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    // const id = req.user._id
    try {
        // const user = await User.findByIdAndDelete(id)
        // if (!user) {
        //     return res.status('404').send({ error: "no id found" })
        // }
        // return res.send(user)
        await req.user.remove()
        res.send(req.user)
    } catch (error) {
        res.status('500').send(error)
    }
})

module.exports = router