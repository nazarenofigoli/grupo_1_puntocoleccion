'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('imageproducts', [{
      imagen:'tanjirokamado12cm1.jpg',
      producto_id : 1 ,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'tanjirokamado12cm2.jpg',
      producto_id : 1 ,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'tanjirokamado12cm3.jpg',
      producto_id : 1 ,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'batmandccomics15cm1.jpg',
      producto_id : 2 ,
      createdAt: null,
      updatedAt: null
        },
    {
      imagen:'batmandccomics15cm2.jpg',
      producto_id : 2 ,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'batmandccomics15cm3.jpg',
      producto_id : 2,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'supermandccomics15cm1.jpg',
      producto_id : 3,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'supermandccomics15cm2.jpg',
      producto_id : 3,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen: 'supermandccomics15cm3.jpg',
      producto_id : 3,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'lufyonepiece27cm1.jpg',
      producto_id : 4,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'lufyonepiece27cm2.jpg',
      producto_id : 4,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'lufyonepiece27cm3.jpg',
      producto_id : 4,
      createdAt: null,
      updatedAt: null
    }, 
    {
      imagen: 'brolydgsuper1.jpg',
      producto_id : 5,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen: 'brolydgsuper2.jpg',
      producto_id : 5,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen: 'brolydgsuper3.jpg',
      producto_id : 5,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen: 'gohanssfuturo1.jpg',
      producto_id : 6,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'gohanssfuturo2.jpg',
      producto_id : 6,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'gohanssfuturo3.jpg',
      producto_id : 6,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'maestroroshidg1.jpg',
      producto_id : 7,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'maestroroshidg2.jpg',
      producto_id : 7 ,
      createdAt: null,
      updatedAt: null
    },
    {
      imagen:'maestroroshidg3.jpg',
      producto_id : 7,
      createdAt: null,
      updatedAt: null
    }
    

    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('imageproducts', null, {});

  }
};