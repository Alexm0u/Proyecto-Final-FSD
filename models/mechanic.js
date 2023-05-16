'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Mechanic extends Model {
        static associate(models) {
        // define association here
        Mechanic.belongsTo(models.User,{foreignKey:"user_id"}),
        
        Mechanic.belongsTo(models.Service, {
            through: "Appointment",
            foreignKey: "id",
            constraints: false,
        })
        }
    }
    Mechanic.init({
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        },
        user_id: DataTypes.INTEGER,
        specialty: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Mechanic',
    });
    return Mechanic;
};