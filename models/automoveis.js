/* 
*
* Modelo feito atraves do comando npx sequelize-cli model:generate --name --attributes
*
*/

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Automoveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Automoveis.init({
    placa: DataTypes.STRING,
    chassi: DataTypes.INTEGER,
    renavam: DataTypes.STRING,
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    ano: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'automoveis',
  });
  return Automoveis;
};