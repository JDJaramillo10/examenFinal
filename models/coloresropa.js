'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coloresropa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coloresropa.init({
    colores_id: DataTypes.INTEGER,
    ropa_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coloresropa',
    tableName: 'coloresropa'
  });
  return coloresropa;
};