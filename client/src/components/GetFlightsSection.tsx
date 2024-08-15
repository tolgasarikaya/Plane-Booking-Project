import { useState } from "react";
import GetFlightsSearchSection from "./GetFlightsSearchSection";
import { FlightData } from "../interfaces/interfaces";
import formatTimestampToTime from "../utils/formatTimestampToTime";
import GetFlightsMainSection from "./GetFlightsMainSection";
import GetFlightsFilterSection from "./GetFlightsFilterSection";

const GetFlightsSection = () => {
  const [data, setData] = useState<FlightData[]>([]);

  const setSearchResultData = (input: FlightData[]) => {
    setData(input);
  };
  console.log(formatTimestampToTime("2024-08-13T00:00:00.000+02:00"));
  return (
    <div className="w-3/4">
      <GetFlightsSearchSection setSearchResultData={setSearchResultData} />
      <div className="flex w-full min-w-full flex-row">
        <GetFlightsMainSection data={data} type="mainPage" />
        <GetFlightsFilterSection />
      </div>
    </div>
  );
};

export default GetFlightsSection;
