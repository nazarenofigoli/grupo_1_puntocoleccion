'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Subategory, {
        As:'subcategories',
        foreignKey:'subcategoria_id'
      }),
      this.belongsTo(models.Category, {
        As:'categories',
        foreignKey:'categoria_id'
      }),
      this.belongsTo(models.Brand, {
        As:'brands',
        foreignKey:'marca_id'
        }),
        this.hasMany(models.Purchasedetail, {
          As:'purchasedetails',
          foreignKey:'producto_id'
          }),
        this.hasMany(models.Imageproduct, {
          As:'imageProducts',
          foreignKey:'productos_id'
        }),
        this.belongsToMany(models.User, {
          through:models.Carts,
          As:'users',
          foreignKey:'producto_id',
          otherKey:'usuario_id'
        })
    }
  }
  Product.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    imagen: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    descuento: DataTypes.TINYINT,
    marca_id: DataTypes.INTEGER,
    categoria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};