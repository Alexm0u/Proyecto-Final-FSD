'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
            // Service.belongsToMany(
      //   models.User,
      //   {
      //     through: 'Appointment',
      //     foreignKey: 'service_id'
      // })
    }
  }
  services.init({
    service_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'services',
  });
  return services;
};