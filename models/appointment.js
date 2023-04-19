'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        static associate(models) {
            // define association here
                Appointment.belongsTo(models.Service, {
                foreignKey: 'service_id',
                constraints: false,
            });
            Appointment.belongsTo(models.User, {
                foreignKey: 'user_id',
                constraints: false,
            });
            Appointment.belongsTo(models.Mechanic, {
                foreignKey: 'mechanic_id',
                constraints: false,
            });
    }
}

    Appointment.init({
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        },
        service_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        mechanic_id: DataTypes.INTEGER,
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Appointment',
    });
    return Appointment;
};