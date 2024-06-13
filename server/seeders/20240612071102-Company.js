"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Companies", [
      {
        id: 1,
        name: "Tech Innovators Inc.",
        totalLeaves: 12,
        clockInTime: "2024-06-11T08:00:00.000Z",
        clockOutTime: "2024-06-11T17:00:00.000Z",
        createdAt: "2024-01-01T09:00:00.000Z",
        updatedAt: "2024-06-01T10:00:00.000Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
