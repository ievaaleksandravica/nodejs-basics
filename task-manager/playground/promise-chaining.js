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

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return { user, count }
}

updateAgeAndCount('6183aa898f14a248e3eeea23', 20)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })