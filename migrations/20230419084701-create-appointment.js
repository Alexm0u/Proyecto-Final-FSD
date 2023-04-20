'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service_id: {
        type: Sequelize.INTEGER,
            references: {
            model: "Services",
            key:"id"
            }
      },
      user_id: {
        type: Sequelize.INTEGER,
            references: {
            model: "Users",
            key:"id"
            }
      },
      mechanic_id: {
        type: Sequelize.INTEGER,
        references: {
        model: "Mechanics",
        key:"id"
        }
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      require: true
  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};