const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userTable = require('../model/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.cors(cors())

app.post("/signup", async (req, res) => {

    const { username, password } = req.body;
    const cryptographyPassword = await bcrypt.hash(password, 10);

    try {

        const userExistBank = await userTable.findOne({ where: { username } })

            if(userExistBank) {
                return res.status(400).json("This user already exist")
            }

        const createUser = await userTable.create({ username, password:cryptographyPassword });
            res.status(201).json({ createUser, message: "User created successfully" });
    
            
    
                // const getToken = jwt.sign({ id: userExistBank.id },"my-key", { expiresIn: '5h'});

                // res.json({ getToken })
    }     


    catch (error) {
        console.error("Something wrong to create router", error);
        res.status(500).json({ error: 'Error in server' });
    }

 
});

app.post('/signin', async (req, res) => {
       
    // const userAlreadyCreate = await user(req.body);

    
})


app.listen(5173, () => {

    console.log("Server running")
});

module.exports = app;