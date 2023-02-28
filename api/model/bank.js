const Sequelize  = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'Superusuario1', {

    host:'localhost',
    dialect: 'mysql'
    
})

    try {
        sequelize.authenticate()
        console.log("Conection Okay");
        
    }
    catch(error) {
        console.error("Sorry. Don't were possible to conect with MySQL", error)
       
    }

    module.exports = {
        sequelize,
        Sequelize
    }
