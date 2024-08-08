const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Define a route to fetch data from the Schiphol API
app.get("/fetch-flights", async (req, res) => {
  try {
    // Make an API request using axios
    const response = await axios.get("https://api.schiphol.nl/public-flights", {
      headers: {
        Accept: "application/json",
        ResourceVersion: "v4",
        app_id: "9c3afd65", // Replace with your actual app ID
        app_key: "514a5bd8db9e756029e80b667ce63ad9", // Replace with your actual app key
      },
    });

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
