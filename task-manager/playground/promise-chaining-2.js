require('../src/db/mongoose')
const Task = require('../src/models/task')

// ObjectId("6183aea59f9ff2c552827124")

Task.findByIdAndDelete('6183aea59f9ff2c552827124')
    .then((response) => {
        console.log(response)
        return Task.countDocuments({ completed: false })
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })