import React, { useContext } from "react";
import { CapstoneContext } from "../../Context/CapstoneContext";

const ClearDataButton = () => {
  const { clearAllData } = useContext(CapstoneContext);

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-2 lg:py-1 text-[10px] shadow-md transition-all duration-300 ease-in-out"
      onClick={clearAllData}
    >
      Clear All Data
    </button>
  );
};

export default ClearDataButton;
