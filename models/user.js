'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        // // define association here
        User.belongsTo(
            models.Role,{
            foreignKey: 'role_id'
            })
        User.hasOne(models.Mechanic, {
            foreignKey: 'user_id'
        });
        User.belongsToMany(
            models.Service,
            {
            through: 'Appointment',
            foreignKey: 'user_id',
            constraints: false,
        })
        }
    }
    User.init({
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        },
        dni: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password:DataTypes.STRING,
        comments: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};