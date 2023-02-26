const express = require('express');
const bank = require('../model/bank');
const bodyParser = require('body-parser');
const nameTable = require('../model/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/signup", async (req, res) => {

    const { username, password } = req.body;
    const query = await nameTable.create({ username, password })
    res.json(query);
    // const query = `INSERT INTO logins (username, password) VALUES ('${ username }', '${ password }')`;

    // bank.sequelize.query(query, (error, results, fields) => {

    //     try {
    //         res.json(query);

    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).send("Error to signup user")
    //     }

      
    // });
   
});

app.listen(3000, () => {
    console.log("Server running")
});

module.exports = app;