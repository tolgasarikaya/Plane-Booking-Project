const apiUrl = "http://localhost:3000";

export const getFlightsData = async () => {
  const res = await fetch(`${apiUrl}/fetch-flights`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};
