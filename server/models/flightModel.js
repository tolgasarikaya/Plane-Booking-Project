const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    flightDirection: String,

    route: {
      destinations: [{ type: String }],
      eu: String,
      visa: Boolean,
    },
    scheduleDateTime: Date,
  },
  { collection: "myflights" }
);

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
