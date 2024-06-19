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
    await queryInterface.bulkInsert("Attendances", [
      // April Data
      {
        clockIn: "2024-04-01T08:00:00Z",
        clockOut: "2024-04-01T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-01T08:00:00Z",
        updatedAt: "2024-04-01T17:00:00Z",
      },
      {
        clockIn: "2024-04-02T09:01:00Z",
        clockOut: "2024-04-02T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-04-02T09:01:00Z",
        updatedAt: "2024-04-02T17:00:00Z",
      },
      {
        clockIn: "2024-04-03T08:05:00Z",
        clockOut: "2024-04-03T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-03T08:05:00Z",
        updatedAt: "2024-04-03T17:00:00Z",
      },
      {
        clockIn: "2024-04-04T08:03:00Z",
        clockOut: "2024-04-04T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-04T08:03:00Z",
        updatedAt: "2024-04-04T17:00:00Z",
      },
      {
        clockIn: "2024-04-05T09:00:00Z",
        clockOut: "2024-04-05T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-04-05T09:00:00Z",
        updatedAt: "2024-04-05T17:00:00Z",
      },
      {
        clockIn: "2024-04-06T08:10:00Z",
        clockOut: "2024-04-06T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-06T08:10:00Z",
        updatedAt: "2024-04-06T17:00:00Z",
      },
      {
        clockIn: "2024-04-07T08:00:00Z",
        clockOut: "2024-04-07T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-07T08:00:00Z",
        updatedAt: "2024-04-07T17:00:00Z",
      },

      {
        clockIn: "2024-04-09T08:00:00Z",
        clockOut: "2024-04-09T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-09T08:00:00Z",
        updatedAt: "2024-04-09T17:00:00Z",
      },
      {
        clockIn: "2024-04-10T08:02:00Z",
        clockOut: "2024-04-10T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-10T08:02:00Z",
        updatedAt: "2024-04-10T17:00:00Z",
      },
      {
        clockIn: "2024-04-11T08:15:00Z",
        clockOut: "2024-04-11T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-11T08:15:00Z",
        updatedAt: "2024-04-11T17:00:00Z",
      },
      {
        clockIn: "2024-04-12T08:00:00Z",
        clockOut: "2024-04-12T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-12T08:00:00Z",
        updatedAt: "2024-04-12T17:00:00Z",
      },
      {
        clockIn: "2024-04-13T08:00:00Z",
        clockOut: "2024-04-13T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-13T08:00:00Z",
        updatedAt: "2024-04-13T17:00:00Z",
      },
      {
        clockIn: "2024-04-14T08:00:00Z",
        clockOut: "2024-04-14T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-14T08:00:00Z",
        updatedAt: "2024-04-14T17:00:00Z",
      },

      {
        clockIn: "2024-04-16T08:00:00Z",
        clockOut: "2024-04-16T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-16T08:00:00Z",
        updatedAt: "2024-04-16T17:00:00Z",
      },
      {
        clockIn: "2024-04-17T08:00:00Z",
        clockOut: "2024-04-17T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-17T08:00:00Z",
        updatedAt: "2024-04-17T17:00:00Z",
      },
      {
        clockIn: "2024-04-18T08:00:00Z",
        clockOut: "2024-04-18T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-18T08:00:00Z",
        updatedAt: "2024-04-18T17:00:00Z",
      },
      {
        clockIn: "2024-04-19T08:00:00Z",
        clockOut: "2024-04-19T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-19T08:00:00Z",
        updatedAt: "2024-04-19T17:00:00Z",
      },
      {
        clockIn: "2024-04-20T08:00:00Z",
        clockOut: "2024-04-20T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-20T08:00:00Z",
        updatedAt: "2024-04-20T17:00:00Z",
      },
      {
        clockIn: "2024-04-21T08:00:00Z",
        clockOut: "2024-04-21T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-21T08:00:00Z",
        updatedAt: "2024-04-21T17:00:00Z",
      },

      {
        clockIn: "2024-04-23T08:00:00Z",
        clockOut: "2024-04-23T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-23T08:00:00Z",
        updatedAt: "2024-04-23T17:00:00Z",
      },
      {
        clockIn: "2024-04-24T08:00:00Z",
        clockOut: "2024-04-24T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-24T08:00:00Z",
        updatedAt: "2024-04-24T17:00:00Z",
      },
      {
        clockIn: "2024-04-25T08:00:00Z",
        clockOut: "2024-04-25T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-04-25T08:00:00Z",
        updatedAt: "2024-04-25T17:00:00Z",
      },
      {
        clockIn: "2024-04-26T08:00:00Z",
        clockOut: "2024-04-26T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-26T08:00:00Z",
        updatedAt: "2024-04-26T17:00:00Z",
      },
      {
        clockIn: "2024-04-27T08:00:00Z",
        clockOut: "2024-04-27T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-27T08:00:00Z",
        updatedAt: "2024-04-27T17:00:00Z",
      },
      {
        clockIn: "2024-04-28T08:00:00Z",
        clockOut: "2024-04-28T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-28T08:00:00Z",
        updatedAt: "2024-04-28T17:00:00Z",
      },
      {
        clockIn: "2024-04-29T08:00:00Z",
        clockOut: "2024-04-29T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-29T08:00:00Z",
        updatedAt: "2024-04-29T17:00:00Z",
      },
      {
        clockIn: "2024-04-30T08:00:00Z",
        clockOut: "2024-04-30T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-04-30T08:00:00Z",
        updatedAt: "2024-04-30T17:00:00Z",
      },

      // May Data
      {
        clockIn: "2024-05-01T08:00:00Z",
        clockOut: "2024-05-01T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-01T08:00:00Z",
        updatedAt: "2024-05-01T17:00:00Z",
      },
      {
        clockIn: "2024-05-02T09:01:00Z",
        clockOut: "2024-05-02T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-05-02T09:01:00Z",
        updatedAt: "2024-05-02T17:00:00Z",
      },
      {
        clockIn: "2024-05-03T08:03:00Z",
        clockOut: "2024-05-03T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-03T08:03:00Z",
        updatedAt: "2024-05-03T17:00:00Z",
      },
      {
        clockIn: "2024-05-04T08:00:00Z",
        clockOut: "2024-05-04T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-04T08:00:00Z",
        updatedAt: "2024-05-04T17:00:00Z",
      },
      {
        clockIn: "2024-05-05T09:00:00Z",
        clockOut: "2024-05-05T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-05-05T09:00:00Z",
        updatedAt: "2024-05-05T17:00:00Z",
      },
      {
        clockIn: "2024-05-06T08:10:00Z",
        clockOut: "2024-05-06T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-06T08:10:00Z",
        updatedAt: "2024-05-06T17:00:00Z",
      },
      {
        clockIn: "2024-05-07T08:00:00Z",
        clockOut: "2024-05-07T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-07T08:00:00Z",
        updatedAt: "2024-05-07T17:00:00Z",
      },

      {
        clockIn: "2024-05-09T08:00:00Z",
        clockOut: "2024-05-09T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-09T08:00:00Z",
        updatedAt: "2024-05-09T17:00:00Z",
      },
      {
        clockIn: "2024-05-10T08:02:00Z",
        clockOut: "2024-05-10T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-10T08:02:00Z",
        updatedAt: "2024-05-10T17:00:00Z",
      },
      {
        clockIn: "2024-05-11T08:15:00Z",
        clockOut: "2024-05-11T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-11T08:15:00Z",
        updatedAt: "2024-05-11T17:00:00Z",
      },
      {
        clockIn: "2024-05-12T08:00:00Z",
        clockOut: "2024-05-12T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-12T08:00:00Z",
        updatedAt: "2024-05-12T17:00:00Z",
      },
      {
        clockIn: "2024-05-13T08:00:00Z",
        clockOut: "2024-05-13T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-13T08:00:00Z",
        updatedAt: "2024-05-13T17:00:00Z",
      },
      {
        clockIn: "2024-05-14T08:00:00Z",
        clockOut: "2024-05-14T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-14T08:00:00Z",
        updatedAt: "2024-05-14T17:00:00Z",
      },

      {
        clockIn: "2024-05-16T08:00:00Z",
        clockOut: "2024-05-16T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-16T08:00:00Z",
        updatedAt: "2024-05-16T17:00:00Z",
      },
      {
        clockIn: "2024-05-17T08:00:00Z",
        clockOut: "2024-05-17T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-17T08:00:00Z",
        updatedAt: "2024-05-17T17:00:00Z",
      },
      {
        clockIn: "2024-05-18T08:00:00Z",
        clockOut: "2024-05-18T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-18T08:00:00Z",
        updatedAt: "2024-05-18T17:00:00Z",
      },
      {
        clockIn: "2024-05-19T08:00:00Z",
        clockOut: "2024-05-19T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-19T08:00:00Z",
        updatedAt: "2024-05-19T17:00:00Z",
      },
      {
        clockIn: "2024-05-20T08:00:00Z",
        clockOut: "2024-05-20T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-20T08:00:00Z",
        updatedAt: "2024-05-20T17:00:00Z",
      },
      {
        clockIn: "2024-05-21T08:00:00Z",
        clockOut: "2024-05-21T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-21T08:00:00Z",
        updatedAt: "2024-05-21T17:00:00Z",
      },

      {
        clockIn: "2024-05-23T08:00:00Z",
        clockOut: "2024-05-23T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-23T08:00:00Z",
        updatedAt: "2024-05-23T17:00:00Z",
      },
      {
        clockIn: "2024-05-24T08:00:00Z",
        clockOut: "2024-05-24T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-24T08:00:00Z",
        updatedAt: "2024-05-24T17:00:00Z",
      },
      {
        clockIn: "2024-05-25T08:00:00Z",
        clockOut: "2024-05-25T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-05-25T08:00:00Z",
        updatedAt: "2024-05-25T17:00:00Z",
      },
      {
        clockIn: "2024-05-26T08:00:00Z",
        clockOut: "2024-05-26T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-26T08:00:00Z",
        updatedAt: "2024-05-26T17:00:00Z",
      },
      {
        clockIn: "2024-05-27T08:00:00Z",
        clockOut: "2024-05-27T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-27T08:00:00Z",
        updatedAt: "2024-05-27T17:00:00Z",
      },
      {
        clockIn: "2024-05-28T08:00:00Z",
        clockOut: "2024-05-28T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-28T08:00:00Z",
        updatedAt: "2024-05-28T17:00:00Z",
      },
      {
        clockIn: "2024-05-29T08:00:00Z",
        clockOut: "2024-05-29T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-29T08:00:00Z",
        updatedAt: "2024-05-29T17:00:00Z",
      },
      {
        clockIn: "2024-05-30T08:00:00Z",
        clockOut: "2024-05-30T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-30T08:00:00Z",
        updatedAt: "2024-05-30T17:00:00Z",
      },
      {
        clockIn: "2024-05-31T08:00:00Z",
        clockOut: "2024-05-31T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-05-31T08:00:00Z",
        updatedAt: "2024-05-31T17:00:00Z",
      },

      // June Data
      {
        clockIn: "2024-06-01T08:00:00Z",
        clockOut: "2024-06-01T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-01T08:00:00Z",
        updatedAt: "2024-06-01T17:00:00Z",
      },
      {
        clockIn: "2024-06-02T08:00:00Z",
        clockOut: "2024-06-02T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-02T08:00:00Z",
        updatedAt: "2024-06-02T17:00:00Z",
      },
      {
        clockIn: "2024-06-03T08:00:00Z",
        clockOut: "2024-06-03T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-03T08:00:00Z",
        updatedAt: "2024-06-03T17:00:00Z",
      },
      {
        clockIn: "2024-06-04T08:00:00Z",
        clockOut: "2024-06-04T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-04T08:00:00Z",
        updatedAt: "2024-06-04T17:00:00Z",
      },
      {
        clockIn: "2024-06-06T08:00:00Z",
        clockOut: "2024-06-06T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-06T08:00:00Z",
        updatedAt: "2024-06-06T17:00:00Z",
      },
      {
        clockIn: "2024-06-07T08:00:00Z",
        clockOut: "2024-06-07T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-07T08:00:00Z",
        updatedAt: "2024-06-07T17:00:00Z",
      },
      {
        clockIn: "2024-06-08T08:00:00Z",
        clockOut: "2024-06-08T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-08T08:00:00Z",
        updatedAt: "2024-06-08T17:00:00Z",
      },
      {
        clockIn: "2024-06-09T08:00:00Z",
        clockOut: "2024-06-09T17:00:00Z",
        attendanceStatus: "Late",
        UserId: 2,
        createdAt: "2024-06-09T08:00:00Z",
        updatedAt: "2024-06-09T17:00:00Z",
      },
      {
        clockIn: "2024-06-10T08:00:00Z",
        clockOut: "2024-06-10T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-10T08:00:00Z",
        updatedAt: "2024-06-10T17:00:00Z",
      },
      {
        clockIn: "2024-06-11T08:00:00Z",
        clockOut: "2024-06-11T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-11T08:00:00Z",
        updatedAt: "2024-06-11T17:00:00Z",
      },
      {
        clockIn: "2024-06-12T08:00:00Z",
        clockOut: "2024-06-12T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-12T08:00:00Z",
        updatedAt: "2024-06-12T17:00:00Z",
      },
      {
        clockIn: "2024-06-13T08:00:00Z",
        clockOut: "2024-06-13T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-13T08:00:00Z",
        updatedAt: "2024-06-13T17:00:00Z",
      },
      {
        clockIn: "2024-06-14T08:00:00Z",
        clockOut: "2024-06-14T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-14T08:00:00Z",
        updatedAt: "2024-06-14T17:00:00Z",
      },

      {
        clockIn: "2024-06-16T08:00:00Z",
        clockOut: "2024-06-16T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-16T08:00:00Z",
        updatedAt: "2024-06-16T17:00:00Z",
      },
      {
        clockIn: "2024-06-17T08:00:00Z",
        clockOut: "2024-06-17T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-17T08:00:00Z",
        updatedAt: "2024-06-17T17:00:00Z",
      },
      {
        clockIn: "2024-06-18T08:00:00Z",
        clockOut: "2024-06-18T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-18T08:00:00Z",
        updatedAt: "2024-06-18T17:00:00Z",
      },
      {
        clockIn: "2024-06-19T08:00:00Z",
        clockOut: "2024-06-19T17:00:00Z",
        attendanceStatus: "Present",
        UserId: 2,
        createdAt: "2024-06-19T08:00:00Z",
        updatedAt: "2024-06-19T17:00:00Z",
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
    await queryInterface.bulkDelete("Attendances", null, {});
  },
};
