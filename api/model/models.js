const bank = require('./bank');

const nameTable = bank.sequelize.define('logins', {


    id: {
        type: bank.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    username:{ 
        type: bank.Sequelize.STRING,
        unique:true,
        
    },

    password:{
        type: bank.Sequelize.STRING,
    }     
})


//nameTable.sync({ force: true})

module.exports = nameTable;



//  userTable.sync({ force: true})
