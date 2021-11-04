const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect(
    'mongodb://127.0.0.1:27017/task-manager-api',
    { useNewUrlParser: true }
)

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({ name: 'Ieva', age: 'sss31' })

me.save().then((response) => {
    console.log(`User created: ${response}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})