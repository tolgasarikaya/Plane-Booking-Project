import { FormEvent, useRef } from "react";
import Icon from "../assets/icons/Icon";
import InputFields from "./InputFields";
import { getFlightsData } from "../http/http";
import useFetchData from "../hooks/useFetchData";
import dateConverter from "../utils/dateConverter";
import { FlightQueryParams, FlightData } from "../interfaces/interfaces";

interface GetFlightsSearchSectionProps {
  setSearchResultData: (data: FlightData[]) => void; // Corrected the type here
}

const GetFlightsSearchSection: React.FC<GetFlightsSearchSectionProps> = ({
  setSearchResultData,
}) => {
  const arrivingFlightRef = useRef<HTMLInputElement>(null);
  const departingFlightRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const { refetch } = useFetchData({
    requestFn: getFlightsData,
    enabled: false,
  });

  const getFlightsHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !arrivingFlightRef.current?.value ||
      !departingFlightRef.current?.value ||
      !startDateRef.current?.value ||
      !endDateRef.current?.value
    )
      return;

    let flightDirection;
    if (arrivingFlightRef.current?.value === "Yes") {
      if (departingFlightRef.current?.value === "Yes") {
        flightDirection = "";
      } else {
        flightDirection = "A";
      }
    }
    if (arrivingFlightRef.current?.value === "No") {
      if (departingFlightRef.current?.value === "Yes") {
        flightDirection = "D";
      } else {
        flightDirection = "";
      }
    }

    const fromScheduleDate = dateConverter(startDateRef.current?.value);
    const toScheduleDate = dateConverter(endDateRef.current?.value);

    const params: FlightQueryParams = {
      page: 0,
      fromScheduleDate,
      toScheduleDate,
    };

    if (flightDirection) {
      params.flightDirection = flightDirection;
    }

    const result = await refetch(params);
    console.log(result);
    setSearchResultData(result.flights as FlightData[]); // Ensure the result is correctly typed
  };

  return (
    <form onSubmit={getFlightsHandler} className="w-full py-5">
      <div className="ml-5 rounded-xl bg-white p-5">
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row items-center gap-2 font-bold">
            <Icon className="" fill="black" type="plane" />
            <h2>BOOK YOUR FLIGHT</h2>
          </div>
          <div className="flex flex-row">
            <button
              type="button"
              className="rounded-l-3xl bg-[#4a0097] px-4 py-2 text-sm font-semibold text-[#f6f4f8]"
            >
              Round trip
            </button>
            <button
              type="button"
              className="rounded-r-3xl bg-[#f6f4f8] px-4 py-2 text-sm font-semibold text-[#4a0097]"
            >
              One way
            </button>
          </div>
        </div>
        <div className="flex w-full flex-row gap-1 py-5">
          <InputFields
            ref={arrivingFlightRef}
            type="flight-direction"
            placeholder="Get Arriving Flights?"
            iconType="plane-takeoff"
            required={true}
            className="rounded-l-3xl"
          />
          <InputFields
            ref={departingFlightRef}
            type="flight-direction"
            placeholder="Get Departing Flights?"
            iconType="plane-land"
            required={true}
            className="mr-4 rounded-r-3xl"
          />
          <InputFields
            placeholder="Starting Date"
            iconType="calender"
            ref={startDateRef}
            type="calender"
            required={true}
            className="mr-4 rounded-l-3xl"
          />
          <InputFields
            placeholder="Ending Date"
            iconType="calender"
            ref={endDateRef}
            type="calender"
            required={true}
            className="mr-4 rounded-r-3xl"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-[#4a0097] px-4 py-2 font-semibold text-[#f6f4f8]"
        >
          Show flights
        </button>
      </div>
    </form>
  );
};

export default GetFlightsSearchSection;
