const express = require("express");
const app = express();
global.CONSTANTS = require("./constants");
var cors = require("cors");
const vehicleTypeRouter = require("./routes/vehicleTypesRoutes");
const vehicleRouter = require("./routes/vehicleRoutes");
const bookingRouter = require("./routes/bookingRoutes");

// middlewaeres
app.use(express.json());
app.use(
  cors({
    origin: [CONSTANTS.FRONTEND_URL],
  })
);
// regustering routes
app.use("/vehicleTypes", vehicleTypeRouter);
app.use("/vehicles", vehicleRouter);
app.use("/booking", bookingRouter);
app.listen(CONSTANTS.PORT, () =>
  console.log(`server running on the port ${CONSTANTS.PORT}`)
);
