const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const knexfile = require("../db/knexfile");

const app = express();
const PORT = 3000;

// Create a Knex.js instance
const db = knex(knexfile);

app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(express.json());

// Route to handle login form submission
app.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await db('users').where({
            email,
            password
        }).first();
        if (user) {
            // Successful login, send a success response
            return res.status(200).json({
                message: 'Login successful',
                redirect: './home.html'
            });
        } else {
            // Invalid credentials, send an error response
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
});

// Route to handle fetching a flower based on preferences
app.post('/getFlower', async (req, res) => {
    const {
        favoriteColor,
        scentPreference
    } = req.body;

    try {
        const flower = await db('favorite_flowers')
            .where({
                color: favoriteColor,
                scent: scentPreference === 'yes'
            })
            .first();

        if (flower) {
            return res.status(200).json({
                message: 'Found flower',
                flower
            });
        } else {
            return res.status(404).json({
                message: 'No matching flower found'
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});