'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('coloresropa', {
      fields: ['colores_id'],
      name: 'colores_id_fk',
      type: 'foreign key',
      references: {
        table: 'colores',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });

    await queryInterface.addConstraint('coloresropa', {
      fields: ['ropa_id'],
      name: 'ropa_id_fk',
      type: 'foreign key',
      references: {
        table: 'ropa',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('coloresropa', 'colores_id_fk');
    await queryInterface.removeConstraint('coloresropa', 'ropa_id_fk');
  }
};
