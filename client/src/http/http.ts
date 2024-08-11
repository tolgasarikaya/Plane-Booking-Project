const apiUrl = "http://localhost:3000";

interface FlightQueryParams {
  page?: number;
  flightDirection?: string;
  fromScheduleDate?: string;
  toScheduleDate?: string;
}

export const getFlightsData = async (params: FlightQueryParams) => {
  // Convert all params to strings
  const stringParams: Record<string, string> = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  );

  const queryString = new URLSearchParams(stringParams).toString();

  const res = await fetch(`${apiUrl}/flights?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};
