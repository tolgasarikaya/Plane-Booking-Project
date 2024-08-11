import { useState } from "react";
import GetFlightsSearchSection from "./GetFlightsSearchSection";
import { FlightData } from "../interfaces/interfaces";
import Icon from "../assets/icons/Icon";

const GetFlightsSection = () => {
  const [data, setData] = useState<FlightData[]>([]);

  const setSearchResultData = (input: FlightData[]) => {
    setData(input);
  };

  return (
    <div className="w-3/4">
      <GetFlightsSearchSection setSearchResultData={setSearchResultData} />
      <div className="mt-5 w-[70%]">
        {data.map((fligth) => (
          <div className="relative mx-5 mb-14 w-full rounded-xl rounded-bl-none bg-white p-5">
            <h2 className="font-bold">
              {fligth.flightDirection === "A"
                ? `${fligth.route.destinations[0]} - AMS`
                : `AMS - ${fligth.route.destinations[0]}`}
            </h2>
            <div className="my-5 flex flex-row items-center gap-20">
              <div>
                <div className="flex flex-row gap-2 text-sm font-semibold text-gray-500">
                  <Icon className="" fill="#6b7280" type="plane-takeoff" />
                  Departure
                </div>
                <div>
                  <p className="text-xl font-bold">7:30 AM</p>
                  <p className="font-semibold text-slate-500">Airport: AMS</p>
                </div>
              </div>
              <div className="flex-grow border-b-2 border-black"></div>
              <div className="flex flex-col items-center">
                <Icon className="size-8" type="plane" fill="#4a0097" />
                <div className="font-semibold text-slate-500">
                  2h 25m (Nonstop)
                </div>
              </div>
              <div className="flex-grow border-b-2 border-black"></div>
              <div>
                <div className="flex flex-row gap-2 text-sm font-semibold text-gray-500">
                  <Icon className="" fill="#6b7280" type="plane-land" />
                  Arrival
                </div>
                <div>
                  <p className="text-xl font-bold">7:30 AM</p>
                  <p className="font-semibold text-slate-500">Airport: VCP</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-xl font-bold text-[#4a0097]">Price: $200</p>
                <p className="font-semibold text-slate-500">Round Trip</p>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 w-1/5 rounded-br-xl rounded-tl-xl bg-[#4a0097] py-6 font-semibold text-[#f6f4f8]">
              Book Flight
            </button>
            <button className="absolute -bottom-10 left-0 rounded-b-xl bg-[#e6e0eb] px-5 py-2 font-semibold text-[#4a0097] hover:underline">
              Check the details
            </button>
          </div>
        ))}

        {/* <div className="relative mx-5 mb-14 rounded-xl rounded-bl-none bg-white p-5">
          <h2 className="font-bold">AMS - VCP</h2>
          <div className="my-5 flex flex-row items-center gap-20">
            <div>
              <div className="flex flex-row gap-2 text-sm font-semibold text-gray-500">
                <Icon className="" fill="#6b7280" type="plane-takeoff" />
                Departure
              </div>
              <div>
                <p className="text-xl font-bold">7:30 AM</p>
                <p className="font-semibold text-slate-500">Airport: AMS</p>
              </div>
            </div>
            <div className="flex-grow border-b-2 border-black"></div>
            <div className="flex flex-col items-center">
              <Icon className="size-8" type="plane" fill="#4a0097" />
              <div className="font-semibold text-slate-500">
                2h 25m (Nonstop)
              </div>
            </div>
            <div className="flex-grow border-b-2 border-black"></div>
            <div>
              <div className="flex flex-row gap-2 text-sm font-semibold text-gray-500">
                <Icon className="" fill="#6b7280" type="plane-land" />
                Arrival
              </div>
              <div>
                <p className="text-xl font-bold">7:30 AM</p>
                <p className="font-semibold text-slate-500">Airport: VCP</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-xl font-bold text-[#4a0097]">Price: $200</p>
              <p className="font-semibold text-slate-500">Round Trip</p>
            </div>
          </div>
          <button className="absolute bottom-0 right-0 w-1/5 rounded-br-xl rounded-tl-xl bg-[#4a0097] py-6 font-semibold text-[#f6f4f8]">
            Book Flight
          </button>
          <button className="absolute -bottom-10 left-0 rounded-b-xl bg-[#e6e0eb] px-5 py-2 font-semibold text-[#4a0097] hover:underline">
            Check the details
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default GetFlightsSection;
