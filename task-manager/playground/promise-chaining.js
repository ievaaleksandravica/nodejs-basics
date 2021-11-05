require('../src/db/mongoose')
const { response } = require('express')
const User = require('../src/models/user')

// ObjectId("6185121b2796838599d8514a")

User.findByIdAndUpdate('6185121b2796838599d8514a', {
    age: 1
}).then((response) => {
    console.log(response)
    return User.countDocuments({ age: 1 })
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})