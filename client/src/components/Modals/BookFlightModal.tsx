import { useNavigate } from "react-router-dom";
import { postMyFlightsData } from "../../http/http";
import { FlightData } from "../../interfaces/interfaces";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { createPortal } from "react-dom";
import "react-toastify/dist/ReactToastify.css";
interface BookFlightModalProps {
  setDisplayBookFlightModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFlight: FlightData;
}

const BookFlightModal: React.FC<BookFlightModalProps> = ({
  setDisplayBookFlightModal,
  selectedFlight,
}) => {
  const navigate = useNavigate();

  const bookFlightHandler = async () => {
    const givenDate = new Date(selectedFlight.scheduleDateTime);
    const currentDate = new Date();
    if (givenDate < currentDate) {
      toast.error("Cannot book a flight in the past.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    try {
      await postMyFlightsData(selectedFlight);
      toast.success("Flight booked successfully!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => navigate("/myflights"), 1500);
    } catch (err) {
      console.log(err);
      toast.error("An error occured during booking!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80">
        <div className="mx-auto flex w-1/2 flex-col items-center gap-5 rounded-lg bg-white">
          <div className="flex w-full justify-center rounded-t-lg border-b-2 bg-[#f6f4f8]">
            <h2 className="pl-5 text-lg font-semibold text-[#4a0097]">
              Book Flight
            </h2>
          </div>

          <p className="text-lg text-slate-700">
            Are you sure to book this flight?
          </p>
          <div className="flex w-full justify-end gap-4 py-4 pr-4">
            <button
              onClick={() => setDisplayBookFlightModal(false)}
              className="w-28 rounded-lg bg-[#f6f4f8] py-1 text-lg text-[#4a0097]"
            >
              Cancel
            </button>
            <button
              onClick={bookFlightHandler}
              className="w-28 rounded-lg bg-[#4a0097] py-1 text-lg text-[#f6f4f8]"
            >
              Book
            </button>
          </div>
        </div>
      </div>
      {createPortal(<ToastContainer />, document.body)}
    </>
  );
};

export default BookFlightModal;
