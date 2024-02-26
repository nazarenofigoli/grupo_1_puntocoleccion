'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      precio: {
        type: Sequelize.DECIMAL,
        unsigne: true,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        unsigne: true,
        allowNull: false
      },
      descuento: {
        type: Sequelize.TINYINT,
        unsigne: true,
        allowNull: true
      },
      subcategoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName:'Subcategories' 
        },
          key: 'id'
        }
      },
      marca_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName:'Brands' 
        },
          key: 'id'
        }
        
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName:'Categories' 
        },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};