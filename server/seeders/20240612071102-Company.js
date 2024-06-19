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
        name: "Hacktiv8 Inc.",
        totalLeaves: 12,
        clockInTime: "2024-06-11T09:00:00.000Z",
        clockOutTime: "2024-06-11T17:00:00.000Z",
        latitude: -6.260655842906822,
        longitude: 106.78172469623566,
        createdAt: "2024-01-01T09:00:00.000Z",
        updatedAt: "2024-06-01T10:00:00.000Z",
      },
      {
        id: 2,
        name: "Creative Solutions LLC",
        totalLeaves: 10,
        clockInTime: "2024-06-11T09:00:00.000Z",
        clockOutTime: "2024-06-11T18:00:00.000Z",
        latitude: -6.914744,
        longitude: 107.60981,
        createdAt: "2024-02-01T08:00:00.000Z",
        updatedAt: "2024-06-02T09:00:00.000Z",
      },
      {
        id: 3,
        name: "Global Enterprises Corp.",
        totalLeaves: 15,
        clockInTime: "2024-06-11T07:30:00.000Z",
        clockOutTime: "2024-06-11T16:30:00.000Z",
        latitude: -7.797068,
        longitude: 110.370529,
        createdAt: "2024-03-01T07:30:00.000Z",
        updatedAt: "2024-06-03T08:30:00.000Z",
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
