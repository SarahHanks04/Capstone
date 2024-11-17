// import React, { createContext, useState } from "react";

// export const CapstoneContext = createContext();

// const CapstoneProvider = ({ children }) => {
//   const [formData, setFormData] = useState({complaints: [ ], feedbacks: [ ],});
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   // const saveFormData = (data) => {
//   //   setFormData(data);
//   //   console.log(data);
//   // };

//   // const saveFormData = (data) => {
//   //   localStorage.setItem("formData", JSON.stringify([...formData, data]));
//   //   setFormData([...formData, data]);
//   // };

//   const saveFormData = (type, data) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [type]: [...prevData[type], data], // Append data to the correct category
//     }));
//     console.log(`${type} saved:`, data);
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
    // Load from localStorage or use defaults
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          feedback: [
            { date: "Monday", message: "Great service!" },
            { date: "Monday", message: "Very helpful staff.", category: "service" },
            { date: "Wednesday", message: "Quick response time.", category: "service" },
            { date: "Friday", message: "Loved the user interface." },
            { date: "Friday", message: "Feedback on the website design.",category: "service"  },
          ],
          complaints: [
            { date: "Tuesday", message: "Long wait times." },
            { date: "Tuesday", message: "System crash issue." },
            { date: "Thursday", message: "Rude customer support." },
            { date: "Friday", message: "Delayed refund.", category: "service" },
          ],
        };
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Save form data to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // const saveFormData = (type, data) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [type]: [...(prevData[type] || []), data], // Append data to the correct category
  //   }));
  //   console.log(`${type} saved:`, data);
  // };

  const saveFormData = (type, data) => {
  const currentDate = new Date().toLocaleDateString("en-US", { weekday: "long" });
  setFormData((prevData) => ({
    ...prevData,
    [type]: [...(prevData[type] || []), { ...data, date: currentDate }],
  }));
  console.log(`${type} saved:`, data);
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
