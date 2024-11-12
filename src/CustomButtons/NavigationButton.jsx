import React from "react";

const NavigationButton = ({ activeForm, setActiveForm }) => {
  return (
    <div className="flex gap-14 space-x-4 mt-[1.8rem]">
      <button
        className={`px-4 py-2 font-medium rounded-lg focus:outline-none ${
          activeForm === "feedback"
            ? "text-white bg-[#FDBF17]"
            : "text-[#FDBF17] bg-white border-[1.4px] border-[#13162D]"
        }`}
        onClick={() => setActiveForm("feedback")}
      >
        Feedback
      </button>
      <button
        className={`px-4 py-2 font-medium rounded-lg focus:outline-none ${
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
