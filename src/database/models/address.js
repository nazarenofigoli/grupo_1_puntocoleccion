'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        As:'users',
        foreignKey:'usuario_id'
      });
    }
  }
  Address.init({
    pais: DataTypes.STRING,
    provincia: DataTypes.STRING,
    localidad: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    departamento: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};