'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const appointment = []
        appointment.push({
        id: 1,
        service_id: 1,
        user_id: 3,
        mechanic_id: 1,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        });
        appointment.push({
        id: 2,
        service_id: 2,
        user_id: 3,
        mechanic_id: 2,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        });
        appointment.push({
        id: 3,
        service_id: 2,
        user_id: 5,
        mechanic_id: 2,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        });

        return queryInterface.bulkInsert("Appointments", appointment);
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
