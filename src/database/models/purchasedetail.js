'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchasedetail extends Model {
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
        this.belongsToMany(models.User, {
          through:models.Userpurchase,
          As:'users',
          foreignKey:'detalleCompra_id',
          otherKey:'usuario_id'
        });
    }
  }
  Purchasedetail.init({
    precio: DataTypes.DECIMAL,
    cantidad: DataTypes.INTEGER,
    precioTotal: DataTypes.DECIMAL,
    producto_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Purchasedetail',
  });
  return Purchasedetail;
};