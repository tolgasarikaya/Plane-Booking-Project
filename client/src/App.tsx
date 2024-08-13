import Header from "./components/Header";
import GetFlightsSection from "./components/GetFlightsSection";
import OtherTopics from "./components/OtherTopics";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <GetFlightsSection />
        <OtherTopics />
      </div>
    </>
  );
}

export default App;
