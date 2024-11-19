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



// SECOND TRY


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
  const currentDate = new Date().toLocaleDateString("en-US", { weekday: "long" });
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



// THIRD TRY 

// import React, { createContext, useState, useEffect } from "react";

// export const CapstoneContext = createContext();

// const CapstoneProvider = ({ children }) => {
//   const [formData, setFormData] = useState({ complaints: [], feedbacks: [] });
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   // Load form data from localStorage on initial render
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("formData"));
//     if (storedData) {
//       setFormData(storedData);
//     }
//   }, []);

//   const saveFormData = (type, data) => {
//     setFormData((prevData) => {
//       const updatedData = {
//         ...prevData,
//         [type]: [...prevData[type], data],
//       };

//       localStorage.setItem("formData", JSON.stringify(updatedData));
//       return updatedData;
//     });
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
