const express = require("express");
const VehicleType = require("../models/vehicleType");
const vehicleTypeRouter = express.Router();

vehicleTypeRouter.get("/", async (req, res) => {
  const types = await VehicleType.findAll({
    attributes: ["id", "name"],
  });
  res.json(types);
});
vehicleTypeRouter.get("/getWheelTypes", async (req, res) => {
  const wheelTypes = await VehicleType.findAll({
    attributes: ["num_of_wheels"],
    group: ["num_of_wheels"],
  });
  res.json(wheelTypes);
});

vehicleTypeRouter.get(
  "/VehicleTypesByWheelType/:wheelNum",
  async (req, res) => {
    const num_of_wheels = req.params.wheelNum;
    const vehiclTypes = await VehicleType.findAll({
      attributes: ["id", "name"],

      where: {
        num_of_wheels,
      },
    });
    res.json(vehiclTypes);
  }
);
module.exports = vehicleTypeRouter;
