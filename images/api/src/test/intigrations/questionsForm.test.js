const request = require('supertest');
const app = require('../../index');

describe('Questions Form Integration Tests', () => {
    it('should submit answers from the questions form', async () => {
        const answersData = {
            user_id: 1,
            favoriteColor: 'Red',
            scentPreference: 'yes'
        };

        const res = await request(app)
            .post('/submitAnswers')
            .send(answersData);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Answers submitted successfully');
    });

});