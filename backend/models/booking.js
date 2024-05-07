const { DataTypes } = require("sequelize");
const sequelize = require("../dbUtils/sequalizeInit");
const Vehicle = require("./vehicle");

const Booking = sequelize.define(
  "Booking",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    vehicleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Vehicle,
        key: "id",
      },
    },
    startDate: { type: DataTypes.DATE, allowNull: false },
    endDate: { type: DataTypes.DATE, allowNull: true },
  },
  {
    timestamps: false,
  }
);
Booking.belongsTo(Vehicle);
Vehicle.hasMany(Booking);
module.exports = Booking;
