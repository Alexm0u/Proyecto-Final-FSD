'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = []
        roles.push({
        id: 1,
        name: 'User',
        description: 'Client',
        createdAt: new Date(),
        updatedAt: new Date()
        })
        roles.push({
        id: 2,
        name: 'Staff',
        description: 'Workers and mechanics',
        createdAt: new Date(),
        updatedAt: new Date()
        })
        roles.push({
        id: 3,
        name: 'Admin',
        description: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
        })
        return queryInterface.bulkInsert('Roles', roles)
    },

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
