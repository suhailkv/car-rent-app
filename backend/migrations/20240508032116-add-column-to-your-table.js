"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Bookings", "firstName", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("Bookings", "lastName", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Bookings", "lastName");
    await queryInterface.removeColumn("Bookings", "firstName");
  },
};
