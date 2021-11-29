const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const mongoose = require("mongoose")


const userOne = {
    name: "User One Ieva",
    email: "ieva.aleksandravica+userone@gmail.com",
    password: "userOneIeva123"
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})


afterAll(() => {
    mongoose.connection.close();
})

test('Should sign up a new user', async () => {
    await request(app).post('/users')
        .send({
            name: "Test User 23",
            email: "ieva.aleksandravica+test23Node@gmail.com",
            password: "testUser1232"
        })
        .expect(201)
}
)

test('Should log in existing user', async () => {
    await request(app).post('/users/login')
        .send({
            email: userOne.email,
            password: userOne.password
        }
        )
        .expect(200)
})

test('Should not log in non-existent user', async () => {
    await request(app).post('/users/login')
        .send({
            email: "ieva.aleksandravica@gmail.com",
            password: "appleapple"
        })
        .expect(404)
})