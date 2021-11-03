// CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

// destructured verion
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
// console.log(id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    db.collection('tasks').findOne({
        _id: ObjectId("61826b5c4ad78a85c4caf341")
    }, (error, response) => {
        if (error) {
            return console.log('Unable to find matching records!')
        }
        console.log('--- PRINTING DOCUMENT FOUND BY ID ---')
        console.log(response)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, response) => {
        if (error) {
            return console.log('Unable to find matching records!')
        }
        console.log('--- PRINTING DOCUMENT FOUND BY COMPLETION ---')
        console.log(response)
    })
})



// db.collection('users').insertOne({
    //     name: 'Vicrum',
    //     age: 36,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(`Error worth logging: ${error}`)
    //     };
    //     console.log(result.insertedId);
    // })

    // db.collection('users').insertMany(
    //     [{
    //         name: 'Jen',
    //         age: 22
    //     }, {
    //         name: 'Marc',
    //         age: 54
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log(error)
    //         }
    //         console.log(`${result.insertedCount} documents were inserted.`)
    //     }
    // )

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Going for a run.',
    //         completed: true
    //     },
    //     {
    //         description: 'Node.js MongoDB Course.',
    //         completed: false
    //     },
    //     {
    //         description: 'Read a good book.',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log(`Unexpected error occured: ${error}`)
    //     }
    //     console.log(`${result.insertedCount} documents were inserted.`)
    // })

    // db.collection('users').find({ name: 'Marc' }).toArray((error, response) => {
    //     if (error) {
    //         return console.log('Unable to connect to database!')
    //     }
    //     console.log(response)
    // })

    // db.collection('users').find({ name: 'Marc' }).count((error, response) => {
    //     if (error) {
    //         return console.log('Unable to connect to database!')
    //     }
    //     console.log(response)
    // })