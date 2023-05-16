'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const services = []
        services.push({
        id: 1,
            servicename: 'Reparacion',
            description: 'Reparacion de bici o patinete',
            price: 30,
            duration: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        services.push({
            id: 2,
            servicename: 'Revision',
            description: 'Revision total para encontrar posibles problemas',
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
