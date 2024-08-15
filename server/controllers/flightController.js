const Flight = require("../models/flightModel");
const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
exports.getAllFlights = catchAsync(async (req, res, next) => {
  const modifiedQuery = {
    ...req.query,
    sort: "+scheduleTime",
  };
  console.log(modifiedQuery);

  const flightsResponse = await axios.get(
    "https://api.schiphol.nl/public-flights/flights",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ResourceVersion: "v4",
        app_id: process.env.APP_ID,
        app_key: process.env.APP_KEY,
      },
      params: modifiedQuery,
    }
  );

  const flights = flightsResponse.data;

  return res
    .status(200)
    .json({ status: "success", results: flights.length, flights });
});

exports.bookFlight = catchAsync(async (req, res, next) => {
  const newFlight = await Flight.create(req.body);

  return res
    .status(201)
    .json({ status: "success", data: { flight: newFlight } });
});

exports.getMyFlights = catchAsync(async (req, res, next) => {
  const flights = await Flight.find();
  return res
    .status(200)
    .json({ status: "success", results: flights.length, data: { flights } });
});
