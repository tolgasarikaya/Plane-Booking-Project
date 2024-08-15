import GetFlightsSection from "../components/GetFlightsSection";
import OtherTopics from "../components/OtherTopics";

const MainPage = () => {
  return (
    <div className="flex flex-row">
      <GetFlightsSection />
      <OtherTopics />
    </div>
  );
};

export default MainPage;
