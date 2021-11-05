require('../src/db/mongoose')
const Task = require('../src/models/task')

// ObjectId("6183aea59f9ff2c552827124")

// Task.findByIdAndDelete('6183aea59f9ff2c552827124')
//     .then((response) => {
//         console.log(response)
//         return Task.countDocuments({ completed: false })
//     })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const findAndDeleteTask = async (id) => {
    const taskToDelete = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return { taskToDelete, count }
}

findAndDeleteTask('61855de14f84652abe6c43ad')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })