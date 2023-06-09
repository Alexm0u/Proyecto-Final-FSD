'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            require: true
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                require: true
      },
      password: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      role_id: {
        type: Sequelize.INTEGER,
            references: {
            model: "Roles",
            key: "id"
            }
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
    await queryInterface.dropTable('Users');
  }
};