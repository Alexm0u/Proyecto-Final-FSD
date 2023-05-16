'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const services = []
        services.push({
        id: 1,
            servicename: 'Reparacion',
            description: 'Repair bike or scooter',
            price: 30,
            duration: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        services.push({
            id: 2,
            servicename: 'Revision',
            description: 'Total revision of your bike or scooter to find some issues',
            price: 20,
            duration: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        return queryInterface.bulkInsert('Services', services)
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
