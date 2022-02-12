/* 
*
* Criação dentro do banco de dados, contendo ID, placa, chassi, renavam, modelo, marca e ano dos automovéis.
*
*/

const Sequelize = require('sequelize');
const database = require('./ConnectDB');

const Automoveis = database.define('automoveis', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    placa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    chassi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    renavam: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Automoveis;