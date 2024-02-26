'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userpurchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userpurchase.init({
    fecha: DataTypes.DATE,
    usuarios_id: DataTypes.INTEGER,
    detalleCompra_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Userpurchase',
  });
  return Userpurchase;
};