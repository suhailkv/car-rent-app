const express = require("express");
const Vehicle = require("../models/vehicle");
const Booking = require("../models/booking");
const vehicleRouter = express.Router();
const { Op } = require("sequelize");

vehicleRouter.get("/:vehicleTypeId", async (req, res) => {
  const { vehicleTypeId } = req.params;
  const vehicles = await Vehicle.findAll({
    include: [
      {
        model: Booking,
        where: {
          endDate: {
            [Op.is]: null,
          },
        },
        required: false,
      },
    ],
    where: {
      vehicleTypeId: vehicleTypeId,

      "$Bookings.vehicleId$": {
        [Op.is]: null,
      },
    },
  });
  res.json(vehicles);
});
module.exports = vehicleRouter;
