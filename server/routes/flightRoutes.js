const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

router
  .route("/myflights")
  .post(flightController.bookFlight)
  .get(flightController.getMyFlights);
router.route("/").get(flightController.getAllFlights);

module.exports = router;
