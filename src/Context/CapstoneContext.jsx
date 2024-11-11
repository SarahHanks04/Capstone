import React, { createContext, useState } from "react";

export const CapstoneContext = createContext();

const CapstoneProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const saveFormData = (data) => {
    setFormData(data);
    console.log(data);
  };

  const values = {
    formData,
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
