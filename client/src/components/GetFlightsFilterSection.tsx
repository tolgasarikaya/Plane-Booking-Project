const GetFlightsFilterSection = () => {
  return (
    <div className="w-[30%] min-w-[30%] pl-10">
      <div className="mt-5 h-40 w-full rounded-xl">
        <div className="mb-5 flex flex-col gap-2">
          <label htmlFor="sort" className="mb-3 font-bold">
            Sort By:
          </label>
          <select
            name="sort"
            id="sort"
            className="rounded-xl bg-white px-4 py-2 outline-none"
          >
            <option value="" disabled selected hidden>
              Select Sorting Option
            </option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <label className="mb-3 font-bold">Arrival Time</label>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="5:00 AM - 11:59 AM"
              name="arrival-first"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="arrival-first">5:00 AM - 11:59 AM</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="12:00 PM - 5:59 AM"
              name="arrival-second"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="arrival-second">12:00 PM - 5:59 AM</label>
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <label className="mb-3 font-bold">Stops</label>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Nonstop"
              name="nonstop"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="nonstop">Nonstop</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="1 Stop"
              name="oneStop"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="oneStop">1 Stop</label>
          </div>

          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="+2 Stop"
              name="twoStop"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="twoStop">+2 Stop</label>
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <label className="mb-3 font-bold">Airlines Included</label>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Alitalia"
              name="alitalia"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="alitalia">Alitalia</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Lufthansa"
              name="lufthansa"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="lufthansa">Lufthansa</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Air France"
              name="airFrance"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="airFrance">Air France</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Brussels Airlines"
              name="brusselsAirlines"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="brusselsAirlines">Brussels Airlines</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Air Italy"
              name="airItaly"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="airItaly">Air Italy</label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              value="Siberia"
              name="siberia"
              className="size-4 accent-[#4a0097] outline-none"
            />
            <label htmlFor="siberia">Siberia</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFlightsFilterSection;
