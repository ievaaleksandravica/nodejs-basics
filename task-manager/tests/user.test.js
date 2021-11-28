const request = require('supertest')
const app = require('../src/app')

test('Should sign up a new user', async () => {
    await request(app).post('/users')
        .send({
            name: "Test User 2",
            email: "ieva.aleksandravica+test2Node@gmail.com",
            password: "testUser1232"
        })
        .expect(201)
}
)