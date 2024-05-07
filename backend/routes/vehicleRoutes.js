const express = require("express");
const Vehicle = require("../models/vehicle");
const Booking = require("../models/booking");
const vehicleRouter = express.Router();
const { Op } = require("sequelize");

vehicleRouter.get("/getVehicleByType/:vehicleTypeId", async (req, res) => {
  const { vehicleTypeId } = req.params;
  const vehicles = await Vehicle.findAll({
    // Perform a left join with Bookings to check for vehicles with no active bookings
    include: [
      {
        model: Booking,
        where: {
          endDate: {
            [Op.is]: null, // Only include bookings where endDate is null (still active)
          },
        },
        required: false, // Left join, so we get vehicles with no bookings
      },
    ],
    where: {
      vehicleTypeId: vehicleTypeId,

      "$Bookings.vehicleId$": {
        [Op.is]: null, // If there's no active booking, this will be true
      },
    },
  });
  res.json(vehicles);
});

module.exports = vehicleRouter;
