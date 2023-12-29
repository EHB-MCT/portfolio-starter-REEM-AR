const express = require('express');
const knex = require('knex');
// const {
//     v4: uuid
// } = require('uuid');
const app = express();
const PORT = 3000;
const knexfile = require("../db/knexfile")

// Create a Knex.js instance
const db = knex(knexfile);

db.raw("SELECT 1+1")

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());


app.get('', (req, res) => {
    res.send('gogoggo')
});

app.listen(3000, (error) => {
    if (!error) {
        console.log(`Server running on port ${PORT}`);
    } else {
        console.error(error)
    }

});