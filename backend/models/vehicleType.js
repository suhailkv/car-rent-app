const { DataTypes } = require("sequelize");
const sequelize = require("../dbUtils/sequalizeInit");

const VehicleType = sequelize.define(
  "VehicleType",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    num_of_wheels: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

module.exports = VehicleType;
