'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Address, {
        As:'addresses',
        foreignKey:'usuario_id'
      }),
      this.belongsToMany(models.Detailpurchase, {
        through:models.Userpurchases,
        As:'detailpurchasses',
        foreignKey:'usuario_id',
        otherKey:'detalleCompra_id'
      })
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING,
    fechaNaciento: DataTypes.DATE,
    edad: DataTypes.TINYINT,
    genero: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};