const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage:
    "/home/suhail/Desktop/octalogic-assignment/backend/db/vehicle_rent.sqlite",
});

module.exports = sequelize;
