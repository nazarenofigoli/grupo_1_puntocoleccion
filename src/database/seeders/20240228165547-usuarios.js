'use strict';
const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [{
        nombre: 'Lucio',
        apellido: 'Testa',
        email:'luciotesta@gmail.com',
        password: bcrypt.hashSync('1234'), 
        rol: 'admin' ,
        fechaNaciento: null,
        edad: null,
        genero: null, 
        avatar: null,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      nombre: 'Nazareno',
      apellido: 'Figoli',
      email:'nazarenofigoli69@gmail.com',
      password: bcrypt.hashSync('1234'), 
      rol: 'admin' ,
      fechaNaciento: null,
      edad: null,
      genero: null, 
      avatar: null,
      createdAt: new Date,
      updatedAt: new Date
  },
    {
      nombre: 'Julian',
      apellido: 'Aquino',
      email:'admin@admin.com',
      password: bcrypt.hashSync('1234'), 
      rol: 'user' ,
      fechaNaciento: null,
      edad: null,
      genero: null, 
      avatar: null,
      createdAt: new Date,
      updatedAt: new Date
  }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
