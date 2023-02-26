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
     
    },

    // createdAt: {
    //     type: bank.Sequelize.DATE,
    //     allowNull:false,
    //     defaultValue: bank.Sequelize.literal('DEFAULT CURRENT_TIMESTAMP')
    // },

    // updatedAt: {
    //     type: bank.Sequelize.DATE,
    //     allowNull:false,
    //     defaultValue: bank.Sequelize.literal('DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    // },
   
    
})

nameTable.sync({ force: true})

module.exports = nameTable;