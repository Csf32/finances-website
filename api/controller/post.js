const express = require('express');
const userTable = require('../model/models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.cors(cors())



app.post("/signup", async (req, res) => {

    const { username, password } = req.body;
    const cryptographyPassword = await bcrypt.hash(password, 10);
    const secretKey ='pgjpgjnsogisdtgsdtg';
     //process.env.SECRET_KEY;

    try {

        const userExistBank = await userTable.findOne({ where: { username } })

            if(userExistBank) {
                return res.status(400).json("This username already exist, try other")
            }
          
        try {

            const createUser = await userTable.create({ username, password:cryptographyPassword });

            const createTokenUser = jwt.sign({ username }, secretKey, { expiresIn: '2h'});

            res.status(201).json({ createUser, createTokenUser, message: "User created successfully with token jwt" });

        } catch (errortoken) {
            // res.json(401, "Invalid key", errortoken);
           res.status(401).json("Invalid key", errortoken)
        }

    }     

    catch (error) {
        console.error("Something wrong to create router", error);
        res.status(500).json({ error: 'Error in server' });
    }

 
});

app.post('/signin/user', async (req, res) => {
       
    // const userAlreadyCreate = await user(req.body);

    
})


app.listen(5173, () => {

    console.log("Server running")
});

module.exports = app;