const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const flightRouter = require("./routes/flightRoutes");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use("/flights", flightRouter);

module.exports = app;
