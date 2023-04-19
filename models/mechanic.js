'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mechanic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mechanic.init({
    user_id: DataTypes.INTEGER,
    speciality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mechanic',
  });
  return mechanic;
};