const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { ObjectID } = require('bson')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send({ error: "Get requests are disabled!" })
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send({ error: "Currently site is under maintenaince! We will be back soon." })
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log(`Server is up on port: ${port}.`)
})


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc1234' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()
