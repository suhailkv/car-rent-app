const { DataTypes } = require("sequelize");
const sequelize = require("../dbUtils/sequalizeInit");
const VehicleType = require("./vehicleType");

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    vehicleTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: VehicleType,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Vehicle;
