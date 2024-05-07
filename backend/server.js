const express = require("express");
const app = express();

// middlewaeres
app.use(express.json());

app.listen(9090, () => console.log("server running"));
