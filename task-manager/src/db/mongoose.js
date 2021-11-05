const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect(
    'mongodb://127.0.0.1:27017/task-manager-api',
    { useNewUrlParser: true }
)

// const me = new User({ name: 'Ieva  ', email: 'EEEEmple@example.com  ', password: '   23b' })
// me.save().then((response) => {
//     console.log(`User created: ${response}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const arbeitsamt = new Task({
//     description: 'This is fun   '
// }).save().then((response) => {
//     console.log(`New task was created: ${response}`)
// }).catch((error) => {
//     console.log(`Task could not be created: ${error}`)
// })