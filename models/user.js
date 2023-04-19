'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(
        models.Role,
        {foreignKey: 'role_id'
      })
      // User.belongsToMany(
      //   models.Services,
      //   {
      //     through: 'Appointment',
      //     foreignKey: 'user_id'
      // })
    }
  }
  user.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    comments: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};