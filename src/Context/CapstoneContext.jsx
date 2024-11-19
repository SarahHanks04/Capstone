// import React, { createContext, useState, useEffect } from "react";

// export const CapstoneContext = createContext();

// const CapstoneProvider = ({ children }) => {
//   const [formData, setFormData] = useState(() => {
//     // Load From LocalStorage Or Use Defaults
//     const storedData = localStorage.getItem("formData");
//     return storedData
//       ? JSON.parse(storedData)
//       : {
//           feedback: [],
//           complaints: [],
//         };
//   });

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   // Save To LocalStorage When Updated
//   useEffect(() => {
//     localStorage.setItem("formData", JSON.stringify(formData));
//   }, [formData]);

//   const saveFormData = (type, data) => {
//     const currentDate = new Date().toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//     setFormData((prevData) => ({
//       ...prevData,
//       [type]: [...(prevData[type] || []), { ...data, date: currentDate }],
//     }));
//     // console.log(`${type} saved:`, data);
//   };

//   const values = {
//     formData,
//     saveFormData,
//     modalIsOpen,
//     setModalIsOpen,
//   };

//   return (
//     <CapstoneContext.Provider value={values}>
//       {children}
//     </CapstoneContext.Provider>
//   );
// };

// export default CapstoneProvider;

import React, { createContext, useState, useEffect } from "react";

export const CapstoneContext = createContext();

const CapstoneProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    // Load From LocalStorage Or Use Defaults
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
    try {
      localStorage.setItem("formData", JSON.stringify(formData));
    } catch (error) {
      console.error("Error saving data to localStorage", error);
      // You can add additional handling like clearing old data here if needed
    }
  }, [formData]);

  // Save Form Data to localStorage
  const saveFormData = (type, data) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [type]: [...(prevData[type] || []), { ...data, date: currentDate }],
      };
      return newData;
    });
  };

  // Delete Activity from formData
  const deleteActivity = (type, index) => {
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [type]: prevData[type].filter((_, i) => i !== index),
      };
      return updatedData;
    });
  };

  const values = {
    formData,
    saveFormData,
    deleteActivity,
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
