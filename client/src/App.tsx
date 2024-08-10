import { getFlightsData } from "./http/http";
import useFetchData from "./hooks/useFetchData";
import Header from "./components/Header";
import Icon from "./assets/icons/Icon";

function App() {
  const { data } = useFetchData({ requestFn: getFlightsData });

  return (
    <>
      <Header />
      <div className="flex flex-row items-center gap-2 font-bold">
        <Icon className="" fill="black" type="plane" />
        <h2>BOOK YOUR FLIGHT</h2>
      </div>
    </>
  );
}

export default App;
