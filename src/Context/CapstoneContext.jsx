import React, { createContext, useState, useEffect } from "react";

export const CapstoneContext = createContext();

const CapstoneProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    // Load from localStorage or use defaults
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          feedback: [],
          complaints: [],
        };
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Save To LocalStorage When Updated
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const saveFormData = (type, data) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
    setFormData((prevData) => ({
      ...prevData,
      [type]: [...(prevData[type] || []), { ...data, date: currentDate }],
    }));
    // console.log(`${type} saved:`, data);
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
