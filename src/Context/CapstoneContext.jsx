import React, { createContext, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

export const CapstoneContext = createContext();

const CapstoneProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  // Save FormData To The JSON Server
  const saveFormData = async (type, data) => {
    const currentDate = format(new Date(), "MMMM do, yyyy");
    const newData = { ...data, date: currentDate };

    try {
      await axios.post(`http://localhost:4000/${type}`, newData);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const values = {
    saveFormData,
    modalIsOpen,
    setModalIsOpen,
  };

  return (
    <CapstoneContext.Provider value={values}>
      {children}
    </CapstoneContext.Provider>
  );
};

export default CapstoneProvider;
