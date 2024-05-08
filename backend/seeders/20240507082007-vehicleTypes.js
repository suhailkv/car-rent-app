"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "VehicleTypes",
      [
        {
          name: "Hatchback",
          num_of_wheels: 4,
        },
        {
          name: "Sedan",
          num_of_wheels: 4,
        },
        {
          name: "SUV",
          num_of_wheels: 4,
        },
        {
          name: "Cruiser",
          num_of_wheels: 4,
        },
        {
          name: "Bike",
          num_of_wheels: 2,
        },
        {
          name: "Cycle",
          num_of_wheels: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("VehicleTypes", null, {});
  },
};
