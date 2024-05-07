const express = require("express");
const Booking = require("../models/booking");
const bookingRouter = express.Router();
bookingRouter.post("/", async (req, res) => {
  const { vehicleId, startDate } = req.body;
  const booking = await Booking.create({
    vehicleId,
    startDate,
  });
  res.json(booking);
});

module.exports = bookingRouter;
