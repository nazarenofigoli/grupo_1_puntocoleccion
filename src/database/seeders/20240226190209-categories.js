'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  
    await queryInterface.bulkInsert('categories', [{
      nombre: 'Anime',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'DC',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Marvel',
      createdAt: null,
      updatedAt: null
    },
    {
      nombre: 'Videojuegos',
      createdAt: null,
      updatedAt: null
        },
    {
      nombre: 'Stars Wars',
      createdAt: null,
      updatedAt: null
    },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
