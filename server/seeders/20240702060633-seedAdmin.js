"use strict";

const { hashPass } = require("../helpers/bcrypt");

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
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Alice Johnson",
        role: "Admin",  
        email: "alice.johnson@mail.com",
        password: hashPass("Admin"),
        phoneNumber: 1234567890,
        avaUrl: "https://www.wisconline.co.uk/images/webp/A37-min.webp",
        position: "Head Department",
        CompanyId: 1,
        createdAt: "2024-03-01T10:00:00.000Z",
        updatedAt: "2024-06-05T11:00:00.000Z",
      },
      {
        id: 2,
        name: "Bob Smith",
        role: "Designer",
        email: "bob.smith@mail.com",
        password: hashPass("123456"),
        phoneNumber: 2345678901,
        avaUrl:
          "https://static01.nyt.com/images/2018/01/27/arts/27bobsmith1/26bobsmith-obit1-superJumbo.jpg",
        position: "Graphic Designer",
        CompanyId: 1,
        createdAt: "2024-04-01T10:30:00.000Z",
        updatedAt: "2024-06-06T11:30:00.000Z",
      },
      {
        id: 3,
        name: "Charlie Brown",
        role: "Developer",
        email: "charlie.brown@mail.com",
        password: "654321",
        phoneNumber: 3456789012,
        avaUrl: "https://example.com/charlie.jpg",
        position: "Software Engineer",
        CompanyId: 2,
        createdAt: "2024-05-01T11:00:00.000Z",
        updatedAt: "2024-06-07T12:00:00.000Z",
      },
      {
        id: 4,
        name: "Diana Prince",
        role: "Marketer",
        email: "diana.prince@mail.com",
        password: "wonderwoman",
        phoneNumber: 4567890123,
        avaUrl: "https://example.com/diana.jpg",
        position: "Marketing Manager",
        CompanyId: 2,
        createdAt: "2024-05-15T12:00:00.000Z",
        updatedAt: "2024-06-08T13:00:00.000Z",
      },
      {
        id: 5,
        name: "Edward Nigma",
        role: "Analyst",
        email: "edward.nigma@mail.com",
        password: "riddle123",
        phoneNumber: 5678901234,
        avaUrl: "https://example.com/edward.jpg",
        position: "Data Analyst",
        CompanyId: 3,
        createdAt: "2024-06-01T09:00:00.000Z",
        updatedAt: "2024-06-09T10:00:00.000Z",
      },
      {
        id: 6,
        name: "Fiona Gallagher",
        role: "Support",
        email: "fiona.gallagher@mail.com",
        password: "support123",
        phoneNumber: 6789012345,
        avaUrl: "https://example.com/fiona.jpg",
        position: "Customer Support",
        CompanyId: 3,
        createdAt: "2024-06-02T09:30:00.000Z",
        updatedAt: "2024-06-10T10:30:00.000Z",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
