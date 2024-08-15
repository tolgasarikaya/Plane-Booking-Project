import { FlightData } from "../interfaces/interfaces";

const apiUrl = "http://localhost:3000";

interface FlightQueryParams {
  page?: number;
  flightDirection?: string;
  fromScheduleDate?: string;
  toScheduleDate?: string;
}

export const getFlightsData = async (params: FlightQueryParams) => {
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

export const postMyFlightsData = async (data: FlightData) => {
  const res = await fetch(`${apiUrl}/flights/myflights`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await res.json();
  return response;
};

export const getMyFlightsData = async () => {
  const res = await fetch(`${apiUrl}/flights/myflights`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();
  return response;
};
