const express = require("express");
const app = express();

const vehicleTypeRouter = require("./routes/vehicleTypesRoutes");
const vehicleRouter = require("./routes/vehicleRoutes");
const bookingRouter = require("./routes/bookingRoutes");

// middlewaeres
app.use(express.json());

// regustering routes
app.use("/vehicleTypes", vehicleTypeRouter);
app.use("/vehicles", vehicleRouter);
app.use("/booking", bookingRouter);
app.listen(9090, () => console.log("server running"));
