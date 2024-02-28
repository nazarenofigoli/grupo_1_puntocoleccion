'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  
    await queryInterface.bulkInsert('products', [{
      nombre: 'Tanjiro Kamado Demon Slayer',
      descripcion:'Personaje : TANJIRO KAMADO anjiro Kamado ofrece una figura de alta calidad creada para parecerse exactamente a tu personaje favorito de la popular serie de anime, Demon Slayer: Kimetsu no Yaiba.Las figuras de acción de Ultimate Legends HD miden aproximadamente 12CM de alto con 27 puntos de articulación, lo que permite una multitud de opciones de pose y exhibición.',
      precio:45000,
      stock: 10,
      descuento : null,
      marca_id:3,
      categoria_id: 1,
      subcategoria_id : 1, 
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'BATMAN DC COMICS 15CM',
      descripcion:'Banpresto Figura Qposket The Batman A 27577 ¡Añade a tu colección la figura de la colección Q Posket de Batman de DC Comics! Banpresto nos presenta la encantadora figura de la colección Q Posket de Batman (Ver.A) basada en The Batman DC Comics.Figura de 15 cm de altura. Figura pre-pintada de PVC y ABS.',
      precio:97000,
      stock: 6,
      descuento : null,
      marca_id:2,
      categoria_id: 2,
      subcategoria_id : 2, 
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'SUPERMAN DC COMICS 15CM',
      descripcion:'De la destacada serie Q Posket de Banpresto estilo chibi con brillantes ojos, textura suave y un especial tratamiento de pintura viene esta hermosa figura de Superman de 14 cm de altura.',
      precio:30000,
      stock: 15,
      descuento : null,
      marca_id:2,
      categoria_id: 1,
      subcategoria_id: 1,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'MONKEY D. LUFFY ONE PIECE – GRANDISTA NERO 27CM',
      descripcion:'Banpresto para la colección Grandista Nero presenta la figura de Monkey D. Luffy, del popular manga y anime “One Piece”. Esta figura está hecha en PVC mide unos 27 cm de alto e incluye una base soporte especial para exposición.',
      precio: 60000,
      stock: 2,
      descuento : null,
      marca_id:2,
      categoria_id: 1,
      subcategoria_id: 1,
      createdAt:new Date,
      updatedAt:new Date
        },
    {
      nombre: 'BROLY DRAGON BALL SUPER',
      descripcion:'Banpresto presenta la figura de Broly del popular manga y anime “Dragon Ball Super – Blood Of Saiyans – Specialxvii”. Esta figura está hecha en PVC mide unos 15 cm de alto e incluye una base soporte especial para exposición.',
      precio:34000,
      stock: 1,
      descuento : null,
      marca_id:2,
      categoria_id: 1,
      subcategoria_id: 2,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'FIGURA GOHAN SS FUTURE – DRAGON BALL Z',
      descripcion:'Banpresto nos presenta la encantadora figura de Gohan SS Future de la colección Ichibansho Dragon Ball Z (Dueling To The Future). Figura de 24 cm de altura cuya principal característica es la especial recreación de los detalles del traje de Gohan y de su pose. Además, al ser una figura de la colección Ichibansho, la hace muy coleccionable e ideal para ponerla al lado del resto de personajes que integran esta colección.',
      precio:70000,
      stock: 3,
      descuento : null,
      marca_id:2,
      categoria_id: 1,
      subcategoria_id: 1,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'MAESTRO ROSHI DRAGON BALL',
      descripcion:'Banpresto presenta la figura de Maestro Roshi del popular manga y anime “Dragon Ball – Gxmateria”. Esta figura está hecha en PVC mide unos 13 cm de alto e incluye una base soporte especial para exposición.',
      precio:35000,
      stock: 2,
      descuento : null,
      marca_id:2,
      categoria_id: 1,
      subcategoria_id: 2,
      createdAt:new Date,
      updatedAt:new Date
    },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});

  }
};
