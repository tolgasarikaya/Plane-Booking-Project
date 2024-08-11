const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

// Define a route to fetch data from the Schiphol API
app.get("/flights", async (req, res) => {
  const modifiedQuery = {
    ...req.query,
    sort: "+scheduleTime",
  };
  console.log(modifiedQuery);

  try {
    // Make an API request using axios
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ResourceVersion: "v4",
          app_id: "9c3afd65",
          app_key: "514a5bd8db9e756029e80b667ce63ad9",
        },
        params: modifiedQuery,
      }
    );

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
