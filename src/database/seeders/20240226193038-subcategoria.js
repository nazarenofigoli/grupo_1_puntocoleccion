'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  
    await queryInterface.bulkInsert('subcategories', [{
      nombre: 'Tendencia y oferta',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Destacados',
      createdAt: null,
      updatedAt: null
    },
        
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('subcategories', null, {});

  }
};
