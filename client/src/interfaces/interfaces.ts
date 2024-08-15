export interface FlightQueryParams {
  page?: number;
  flightDirection?: string;
  fromScheduleDate?: string;
  toScheduleDate?: string;
}

export interface FlightData {
  flightDirection: string;
  route: {
    destinations: string[];
    eu: string;
    visa: boolean;
  };
  scheduleDateTime: string;
}
