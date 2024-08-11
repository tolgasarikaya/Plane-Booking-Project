import { forwardRef, useRef, useState } from "react";
import Icon from "../assets/icons/Icon";

interface InputFieldsProps {
  type: string;
  placeholder: string;
  iconType: string;
  className: string;
  required: boolean;
}

const InputFields = forwardRef<HTMLInputElement, InputFieldsProps>(
  ({ type, placeholder, iconType, className, required }, ref) => {
    const showOptionsRef = useRef(false);
    const optionsContainerRef = useRef<HTMLDivElement>(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleFocus = () => {
      showOptionsRef.current = true;
      updateOptionsVisibility();
      if (type === "calender") {
        setShowCalendar(true);
      }
    };

    const handleBlur = () => {
      setTimeout(() => {
        showOptionsRef.current = false;
        updateOptionsVisibility();
        if (type === "calender") {
          setShowCalendar(false);
        }
      }, 300);
    };

    const handleOptionClick = (value: string) => {
      if (ref && typeof ref !== "string" && "current" in ref && ref.current) {
        ref.current.value = value;
      }
      showOptionsRef.current = false;
      updateOptionsVisibility();
    };

    const updateOptionsVisibility = () => {
      if (optionsContainerRef.current) {
        optionsContainerRef.current.style.display = showOptionsRef.current
          ? "block"
          : "none";
      }
    };

    // Calendar Logic
    const daysInMonth = (month: number, year: number) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const days = daysInMonth(currentMonth, currentYear);

    const handleDateSelect = (date: Date) => {
      if (ref && typeof ref !== "string" && "current" in ref && ref.current) {
        ref.current.value = date.toLocaleDateString(); // Format as needed
      }
      setShowCalendar(false);
    };

    let content;
    if (type === "flight-direction") {
      content = (
        <div
          ref={optionsContainerRef}
          className="absolute left-0 top-full z-10 w-full rounded-b-xl border bg-white shadow-md"
          style={{ display: "none" }}
        >
          <ul>
            <li
              onClick={() => handleOptionClick("")}
              className="cursor-pointer bg-[#4a0097] px-4 py-2 text-[#f6f4f8]"
            >
              {placeholder}
            </li>
            <li
              onClick={() => handleOptionClick("No")}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              No
            </li>
            <li
              onClick={() => handleOptionClick("Yes")}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              Yes
            </li>
          </ul>
        </div>
      );
    } else if (type === "calender" && showCalendar) {
      content = (
        <div
          ref={optionsContainerRef}
          className="absolute left-0 top-full z-10 w-full rounded-b-xl border bg-white shadow-md"
          style={{ display: "block" }} // Ensure calendar is visible
        >
          <div className="p-2 text-center">
            <h3 className="font-bold">{`${monthNames[currentMonth]} ${currentYear}`}</h3>
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: days }, (_, i) => (
              <div
                key={i}
                onClick={() =>
                  handleDateSelect(new Date(currentYear, currentMonth, i + 1))
                }
                className="cursor-pointer p-2 text-center hover:bg-gray-200"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex-grow">
        <input
          ref={ref}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly
          required={required}
          className={`w-full border-2 py-1 pl-10 outline-none ${className}`}
        />
        <Icon
          className="absolute left-2 top-[50%] size-7 -translate-y-1/2"
          fill="#4a0097"
          type={iconType}
        />
        {content}
      </div>
    );
  },
);

export default InputFields;
