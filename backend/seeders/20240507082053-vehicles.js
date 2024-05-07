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
    await queryInterface.bulkInsert(
      "Vehicles",
      [
        {
          name: "Maruti 800",
          vehicleTypeId: 1,
        },
        {
          name: "Maruti Swift Dezire",
          vehicleTypeId: 2,
        },
        {
          name: "Tata Punch",
          vehicleTypeId: 3,
        },
        {
          name: "Bajaj Pulsar 180",
          vehicleTypeId: 4,
        },
        {
          name: "Tata Sumo",
          vehicleTypeId: 4,
        },
        {
          name: "Hercules",
          vehicleTypeId: 6,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
