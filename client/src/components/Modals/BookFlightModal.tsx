import { FlightData } from "../../interfaces/interfaces";

interface BookFlightModalProps {
  setDisplayBookFlightModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFlight: FlightData | null;
}

const BookFlightModal: React.FC<BookFlightModalProps> = ({
  setDisplayBookFlightModal,
  selectedFlight,
}) => {
  const bookFlightHandler = () => {
    console.log(selectedFlight);
  };

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80">
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
  );
};

export default BookFlightModal;
