import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getFlightsData = async () => {
      const res = await fetch(
        "https://api.schiphol.nl/public-flights/flights",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            ResourceVersion: "v4",
            app_id: "9c3afd65",
            app_key: "514a5bd8db9e756029e80b667ce63ad9",
          },
        }
      );

      const resJson = await res.json();
      console.log(resJson);
    };
    getFlightsData();
  });

  return <div>App</div>;
}

export default App;
