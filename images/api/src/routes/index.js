const express = require('express');
const knex = require('knex');
const app = express();
const PORT = 3000;
const knexfile = require("../db/knexfile");

const db = knex(knexfile);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server running on port ${PORT}`);
    } else {
        console.error(error);
    }
});
