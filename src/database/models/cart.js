'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        As:'products',
        foreignKey:'producto_id'
        });
        this.belongsTo(models.User, {
          As:'usuario',
          foreignKey:'usuario_id'
          })// define association here
    }
  }
  Cart.init({
    cantidad: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};