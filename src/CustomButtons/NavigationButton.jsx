import React from "react";

const NavigationButton = ({ activeForm, setActiveForm }) => {
  return (
    <div className="flex space-x-12 gap-8 sm:gap-6 md:gap-8 mt-4">
      <button
        className={`px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-lg focus:outline-none ${
          activeForm === "feedback"
            ? "text-white bg-[#FDBF17]"
            : "text-[#FDBF17] bg-white border-[1.4px] border-[#13162D]"
        }`}
        onClick={() => setActiveForm("feedback")}
      >
        Feedback
      </button>
      <button
        className={`px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 font-medium text-sm sm:text-base md:text-lg lg:text-xl rounded-lg focus:outline-none ${
          activeForm === "complaint"
            ? "text-white bg-[#FDBF17]"
            : "text-[#FDBF17] bg-white border-[1.4px] border-[#13162D]"
        }`}
        onClick={() => setActiveForm("complaint")}
      >
        Complaints
      </button>
    </div>
  );
};

export default NavigationButton;
