import Header from "./components/Header";
import GetFlightsSection from "./components/GetFlightsSection";
import carRental from "./assets/images/car-rentals.webp";
import hostels from "./assets/images/hostels.webp";
import travelPackage from "./assets/images/travel-package.webp";
import Icon from "./assets/icons/Icon";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <GetFlightsSection />
        <div className="w-1/4 px-8">
          <div className="relative mt-5 cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 ease-in-out hover:scale-110">
            <img
              src={carRental}
              alt="rent a car"
              className="h-[200px] w-[280px]"
            />
            <div className="absolute bottom-3 left-3">
              <Icon type="car" className="size-12" fill="white" />
              <p className="font-bold text-white">CAR RENTALS</p>
            </div>
          </div>
          <div className="relative mt-5 cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 ease-in-out hover:scale-110">
            <img src={hostels} alt="hostels" className="h-[200px] w-[280px]" />
            <div className="absolute bottom-3 left-3">
              <Icon type="hotel" className="size-12" fill="white" />
              <p className="font-bold text-white">HOTELS</p>
            </div>
          </div>
          <div className="relative mt-5 cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 ease-in-out hover:scale-110">
            <img
              src={travelPackage}
              alt="travel package"
              className="h-[200px] w-[280px]"
            />
            <div className="absolute bottom-3 left-3">
              <Icon type="travel" className="size-12" fill="white" />
              <p className="font-bold text-white">TRAVEL PACKAGE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
