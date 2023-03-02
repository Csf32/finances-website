const express = require('express');
const userTable = require('../model/models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const verifyToken = require('')
const app = express();

const session = require('express-session');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json())
// app.use(session({
//     secret: 'dsasffgjhj',
//     resave:false,
//     saveUninitialized:true
// }))

const secretKey ='pgjpgjnsogisdtgsdtg';


function verifyCreatedToken (req, res, next) {

    const header = req.headers.authorization
    
        jwt.verify(header, secretKey, (err, decoded) => {
    
            if(err) {
                res.status(401).json("Error in verify token")
            }
            else {
               req.username = decoded.username;
               next();
              
            }
         })

  
        // res.send.status(401).json("Error in header");
       
    
}



app.post("/signup", async (req, res) => {

    const { username, password } = req.body;

    const cryptographyPassword = await bcrypt.hash(password, 10);
    
    try {

        const userExistBank = await userTable.findOne({ where: { username } })

            if(userExistBank) {
                return res.status(400).json("This username already exist, try other")
            }
          
        try {
            
            const createUser = await userTable.create({ username, password:cryptographyPassword });

            const createTokenUser = jwt.sign({ username }, secretKey, { expiresIn: '2h'});
            
            const resultUser = {
                createUser, 
                message: "User created successfully with token jwt"
            }

          
             res.status(200).header('authorization', `Bearer ${createTokenUser}`).json(resultUser)
            
    
        } catch (errortoken) {
           
           res.status(401).json("Invalid key", errortoken)
            
          
        }
        
    }     

    catch (error) {
        console.error("Something wrong to create router", error);
        res.status(500).json({ error: 'Error in server' });
    }

   
});




app.get('/profile', verifyCreatedToken, (req, res) => {
 
    res.json(req.body.username + " Getted User");
    

})
    


app.listen(5173, () => {

    console.log("Server running")
});

module.exports = app;