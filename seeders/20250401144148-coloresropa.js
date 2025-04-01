'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [colores, colores_metadata] = await queryInterface.sequelize.query('SELECT id FROM colores')
    let [ropa, ropa_metadata] = await queryInterface.sequelize.query('SELECT id FROM ropa')

    await queryInterface.bulkInsert('coloresropa', [
      { colores_id: colores[2].id, ropa_id: ropa[0].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[3].id, ropa_id: ropa[0].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[6].id, ropa_id: ropa[0].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[0].id, ropa_id: ropa[1].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[1].id, ropa_id: ropa[1].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[5].id, ropa_id: ropa[1].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[9].id, ropa_id: ropa[2].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[2].id, ropa_id: ropa[2].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[10].id, ropa_id: ropa[2].id, createdAt: new Date(), updatedAt: new Date() },
      { colores_id: colores[8].id, ropa_id: ropa[2].id, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('coloresropa', null, {});

  }
};
