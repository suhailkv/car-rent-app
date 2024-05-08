const express = require("express");
const Vehicle = require("../models/vehicle");
const VehicleType = require("../models/vehicleType");
const Booking = require("../models/booking");
const vehicleRouter = express.Router();
const { Op } = require("sequelize");

vehicleRouter.get("/:vehicleTypeId", async (req, res) => {
  const { vehicleTypeId } = req.params;
  const vehicles = await Vehicle.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: Booking,
        required: false,
        where: {
          endDate: { [Op.lte]: new Date() },
        },
      },
    ],
    where: {
      "$Bookings.id$": { [Op.is]: null },
      vehicleTypeId,
    },
  });
  res.json(vehicles);
});
module.exports = vehicleRouter;
