'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ropa', [
      {nombre: 'Nike Running',tipo: 'Running', talla: 'M', precio: 35.00, createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Nike Barcelona FC 2025',tipo: 'Futbol', talla: 's', precio: 90.00, createdAt: new Date(), updatedAt: new Date()},
      {nombre: 'Adidas Sports wear 12',tipo: 'Sportswear', talla: 'L', precio: 50.00, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ropa', null, {});
  }
};
