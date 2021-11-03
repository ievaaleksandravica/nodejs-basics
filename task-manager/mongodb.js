// CRUD create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Ieva',
    //     age: 31
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

    db.collection('tasks').insertMany([
        {
            description: 'Going for a run.',
            completed: true
        },
        {
            description: 'Node.js MongoDB Course.',
            completed: false
        },
        {
            description: 'Read a good book.',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            console.log(`Unexpected error occured: ${error}`)
        }
        console.log(`${result.insertedCount} documents were inserted.`)
    })
})