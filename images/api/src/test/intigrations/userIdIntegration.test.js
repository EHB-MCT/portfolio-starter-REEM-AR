const request = require('supertest');

const knexfile = require('../../db/knexfile');

describe('User Integration Tests', () => {
    it('should create a new user', async () => {
        const userData = {
            username: 'TestUser',
            email: 'testuser@example.com',
            password: 'testpassword'
        };

        const res = await request(app)
            .post('/createUser')
            .send(userData);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User created successfully');
    });

    it('should login an existing user', async () => {
        const credentials = {
            email: 'testuser@example.com',
            password: 'testpassword'
        };

        const res = await request(app)
            .post('/login')
            .send(credentials);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Login successful');
    });

});