/* 
*
* Conectar com o banco de dados MySQL usando a ORM Sequelize.
* Por favor, alterar 'root' e 'Bruno@2022', pois correspondem respectivamente ao usuario e senha do MySQL
* da máquina local.
*
*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize('info', 'root', 'Bruno@2022', {
    dialect: 'mysql', 
    host: 'localhost', 
    port: 3306 }
);

module.exports = sequelize;