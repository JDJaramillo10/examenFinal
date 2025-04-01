'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('colores', [
      {nombre: 'Rojo', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Azul', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Negro', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Blanco', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Verde', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Amarillo', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Gris', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Naranja', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Morado', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Rosa', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Cafe', createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Turquesa', createdAt: new Date(), updatedAt: new Date()},
    ], {});
       
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colores', null, {});
  }
};
