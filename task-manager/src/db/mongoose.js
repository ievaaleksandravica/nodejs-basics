const mongoose = require('mongoose');
const validator = require('validator')
const { stringify } = require('querystring');

mongoose.connect(
    'mongodb://127.0.0.1:27017/task-manager-api',
    { useNewUrlParser: true }
)

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email address is not valid.')
            }
        }
    }
})

const me = new User({ name: 'Ieva  ', email: 'EEEEmple@example.com  ' })
me.save().then((response) => {
    console.log(`User created: ${response}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const arbeitsamt = new Task({
//     description: 'Go to Arbeitsamt',
//     completed: 'apple'
// }).save().then((response) => {
//     console.log(`New task was created: ${response}`)
// }).catch((error) => {
//     console.log(`Task could not be created: ${error}`)
// })