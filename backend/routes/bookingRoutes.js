const express = require("express");
const Booking = require("../models/booking");
const bookingRouter = express.Router();
bookingRouter.post("/", _validateRequest, async (req, res) => {
  const { vehicleModel, start, end, firstName, lastName } = req.body;
  const booking = await Booking.create({
    firstName: firstName,
    lastName: lastName,
    vehicleId: vehicleModel,
    startDate: start,
    endDate: end,
  });
  res.json(booking);
});
function _validateRequest(req, res, next) {
  const { start, end, firstName, lastName } = req.body;

  const isDateString = (dateStr) => !isNaN(Date.parse(dateStr));

  if (!isDateString(start)) {
    return res
      .status(400)
      .json({ error: "start Date must be a valid date string" });
  }

  if (!isDateString(end)) {
    return res
      .status(400)
      .json({ error: "end Date must be a valid date string" });
  }
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return res
      .status(400)
      .json({ error: "FirstName and lastName should be string" });
  }

  next();
}

module.exports = bookingRouter;
