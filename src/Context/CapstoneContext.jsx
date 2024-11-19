// import React, { createContext, useState, useEffect } from "react";

// export const CapstoneContext = createContext();

// const CapstoneProvider = ({ children }) => {
//   const [formData, setFormData] = useState(() => {
//     // Store My Data To LocalStorage
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
//     try {
//       localStorage.setItem("formData", JSON.stringify(formData));
//     } catch (error) {
//       console.error("Error saving data to localStorage", error);
//     }
//   }, [formData]);

//   // Save FormData & Date to localStorage
//   const saveFormData = (type, data) => {
//     const currentDate = new Date().toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//     setFormData((prevData) => {
//       const newData = {
//         ...prevData,
//         [type]: [...(prevData[type] || []), { ...data, date: currentDate }],
//       };
//       return newData;
//     });
//   };

//   // Delete Activities From FormData
//   const deleteActivity = (type, index) => {
//     setFormData((prevData) => {
//       const updatedData = {
//         ...prevData,
//         [type]: prevData[type].filter((_, i) => i !== index),
//       };
//       return updatedData;
//     });
//   };

//   // Clear Both Feedback&Complaint Activities From FormData
//   const clearAllData = () => {
//     if (window.confirm("Are you sure you want to clear all data?")) {
//       setFormData({
//         feedback: [],
//         complaints: [],
//       });
//       localStorage.removeItem("formData");
//     }
//   };

//   const values = {
//     formData,
//     setFormData,
//     saveFormData,
//     deleteActivity,
//     modalIsOpen,
//     setModalIsOpen,
//     clearAllData,
//   };

//   return (
//     <CapstoneContext.Provider value={values}>
//       {children}
//     </CapstoneContext.Provider>
//   );
// };

// export default CapstoneProvider;

// SECOND TRY WITH API
import React, { createContext, useState } from "react";
import axios from "axios";

export const CapstoneContext = createContext();

const CapstoneProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Save FormData to the JSON server
  const saveFormData = async (type, data) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const newData = { ...data, date: currentDate };

    try {
      if (type === "feedback") {
        await axios.post("http://localhost:3000/feedback", newData); // Post to Feedback API
      } else if (type === "complaints") {
        await axios.post("http://localhost:3000/complaint", newData); // Post to Complaint API
      }
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
