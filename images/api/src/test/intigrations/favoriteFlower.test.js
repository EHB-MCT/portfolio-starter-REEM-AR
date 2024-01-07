const request = require('supertest');
const app = require('../../index'); // Update the path accordingly to match your project structure

describe('Favorite Flower Integration Tests', () => {
    it('should add a favorite flower for a user', async () => {
        const flowerData = {
            user_id: 1, 
            flower_name: 'Red Rose',
            color: 'Red',
            scent: true
        };

        const res = await request(app)
            .post('/addFavoriteFlower')
            .send(flowerData);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Favorite flower added successfully');
    });

});