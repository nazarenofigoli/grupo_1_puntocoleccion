'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, {
        As:'products',
        foreignKey:'subcategoria_id'
      })    }
  }
  Subcategory.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};