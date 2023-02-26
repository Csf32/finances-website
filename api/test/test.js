const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'Superusuario1', {
    host:'localhost',
    dialect: 'mysql'
    
});

try {
    sequelize.authenticate();
    console.log('Conexão estabelecida!');
} catch (error) {
    console.error('Falha ao conectar com o banco de dados:', error);
}