const request = require('supertest');
const app = require('../../index'); // Update the path accordingly to match your project structure

describe('Favorite Color Integration Tests', () => {
  it('should add a favorite color for a user', async () => {
    const colorData = {
      user_id: 1, // Replace with an existing user ID in your database
      color: 'Blue'
    };

    const res = await request(app)
      .post('/addFavoriteColor')
      .send(colorData);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Favorite color added successfully');
  });
});
