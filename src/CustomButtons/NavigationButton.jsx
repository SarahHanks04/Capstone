import React from "react";

const NavigationButton = () => {
  return (
    <div>
      <div className="flex gap-8 space-x-4 mt-4 mb-6">
        <button className="px-4 py-2 font-medium text-white bg-[#FDBF17] rounded-lg focus:outline-none">
          Feedback
        </button>
        <button className="px-4 py-2 font-medium text-[#FDBF17] bg-white border border-[#13162D] rounded-lg focus:outline-none">
          Complaints
        </button>
      </div>
    </div>
  );
};

export default NavigationButton;
