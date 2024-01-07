const request = require('supertest');
const app = require('../../index'); // Update the path accordingly to match your project structure

describe('Questions Form Integration Tests', () => {
  it('should submit answers from the questions form', async () => {
    const answersData = {
      user_id: 1, // Replace with an existing user ID in your database
      favoriteColor: 'Red',
      scentPreference: 'yes'
      // Add more data as needed for your questions form
    };

    const res = await request(app)
      .post('/submitAnswers')
      .send(answersData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Answers submitted successfully');
  });

  // Add more tests for questions form functionality as needed
});
