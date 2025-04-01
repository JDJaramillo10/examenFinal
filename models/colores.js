'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.colores.belongsToMany(models.ropa,  {through: 'coloresropa', foreignKey: 'colores_id'})
    }
  }
  colores.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colores',
    tableName: 'colores'
  });
  return colores;
};