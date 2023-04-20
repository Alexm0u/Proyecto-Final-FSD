'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mechanics = [];
    mechanics.push({
    id: 1,
    user_id: 1,
    speciality: "Bikes",
    createdAt: new Date(),
    updatedAt: new Date(),
    });
    mechanics.push({
    id: 2,
    user_id: 2,
    speciality: "Scooters",
    createdAt: new Date(),
    updatedAt: new Date(),
    });
    return queryInterface.bulkInsert("Mechanics", mechanics);
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
