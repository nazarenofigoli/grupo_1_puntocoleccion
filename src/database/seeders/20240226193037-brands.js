'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  
    await queryInterface.bulkInsert('brands', [{
      nombre: 'Funko Pop',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Banpresto',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'BAN-DAI',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Model Kit',
      createdAt: null,
      updatedAt: null
        },
    {
      nombre: 'GoodSmile',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Tsume',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Qposket',
      createdAt: null,
      updatedAt: null
    },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('brands', null, {});

  }
};
