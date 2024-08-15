import GetFlightsMainSection from "../components/GetFlightsMainSection";
import useFetchData from "../hooks/useFetchData";
import { getMyFlightsData } from "../http/http";

const MyFlights = () => {
  const { data, loading } = useFetchData({
    requestFn: getMyFlightsData,
    enabled: true,
  });
  console.log(data);
  let content;
  if (loading) {
    content = <div>Loding</div>;
  }
  if (data) {
    content = (
      <GetFlightsMainSection data={data.data.flights} type="myflights" />
    );
  }

  return (
    <div className="flex w-full flex-col">
      <h2 className="mx-auto font-bold">MY FLIGHTS</h2>
      <div className="flex w-full justify-center">{content}</div>
    </div>
  );
};

export default MyFlights;
