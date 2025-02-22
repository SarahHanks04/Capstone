// ORIGINAL CODE

// import React, { createContext, useState } from "react";
// import axios from "axios";
// import { format } from "date-fns";

// export const CapstoneContext = createContext();

// const CapstoneProvider = ({ children }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   // Save FormData To The JSON Server
//   const saveFormData = async (type, data) => {
//     const currentDate = format(new Date(), "MMMM do, yyyy");
//     const newData = { ...data, date: currentDate };

//     try {
//       await axios.post(`http://localhost:4000/${type}`, newData);
//       console.log("Data saved successfully");
//     } catch (error) {
//       console.error("Error saving data:", error);
//     }
//   };

//   const values = {
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

// REFACTORED CODE

import React, { createContext, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

export const CapstoneContext = createContext();

const CapstoneProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState("user"); 

  // Save FormData To The JSON Server
  // const saveFormData = async (type, data) => {
  //   const currentDate = format(new Date(), "MMMM do, yyyy");
  //   const newData = { ...data, date: currentDate };

  //   try {
  //     await axios.post(`http://localhost:4000/${type}`, newData);
  //     console.log("Data saved successfully");
  //   } catch (error) {
  //     console.error("Error saving data:", error);
  //   }
  // };
  const saveFormData = async (type, data) => {
    const currentDate = new Date().toISOString(); // Convert to ISO format
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
    isAdmin,
    setIsAdmin
  };

  return (
    <CapstoneContext.Provider value={values}>
      {children}
    </CapstoneContext.Provider>
  );
};

export default CapstoneProvider;





// {
//   "feedback": [
//     {
//       "id": "0558",
//       "satisfaction": "4",
//       "emojis": "4",
//       "reasons": ["Limited networking opportunities", "High cost"],
//       "date": "November 20th, 2024"
//     },
//     {
//       "id": "04b4",
//       "satisfaction": "2",
//       "emojis": "5",
//       "reasons": ["Lack of quiet workspaces"],
//       "date": "November 20th, 2024"
//     },
//     {
//       "id": "570f",
//       "satisfaction": "4",
//       "emojis": "4",
//       "reasons": [
//         "Limited networking opportunities",
//         "Insufficient amenities",
//         "High cost",
//         "Wi-Fi connectivity issues"
//       ],
//       "date": "November 20th, 2024"
//     },
//     {
//       "id": "4b59",
//       "satisfaction": "4",
//       "emojis": "5",
//       "reasons": ["High cost", "Insufficient amenities"],
//       "date": "November 21st, 2024"
//     },
//     {
//       "id": "79de",
//       "satisfaction": "3",
//       "emojis": "4",
//       "reasons": ["Wi-Fi connectivity issues"],
//       "date": "November 21st, 2024"
//     },
//     {
//       "id": "0daf",
//       "satisfaction": "3",
//       "emojis": "4",
//       "reasons": ["High cost"],
//       "date": "November 21st, 2024"
//     },
//     {
//       "id": "3651",
//       "satisfaction": "2",
//       "emojis": "3",
//       "reasons": ["Lack of quiet workspaces"],
//       "date": "November 21st, 2024"
//     },
//     {
//       "id": "5080",
//       "satisfaction": "3",
//       "emojis": "3",
//       "reasons": ["High cost"],
//       "date": "November 21st, 2024"
//     },
//     {
//       "id": "5bb8",
//       "satisfaction": "3",
//       "emojis": "3",
//       "reasons": ["Wi-Fi connectivity issues"],
//       "date": "November 24th, 2024"
//     },
//     {
//       "id": "42d4",
//       "satisfaction": "4",
//       "emojis": "5",
//       "reasons": ["High cost"],
//       "date": "November 24th, 2024"
//     },
//     {
//       "id": "031e",
//       "satisfaction": "5",
//       "emojis": "4",
//       "reasons": ["Lack of quiet workspaces"],
//       "date": "November 25th, 2024"
//     },
//     {
//       "id": "a523",
//       "satisfaction": "1",
//       "emojis": "1",
//       "reasons": ["Insufficient amenities", "Wi-Fi connectivity issues"],
//       "date": "November 26th, 2024"
//     },
//     {
//       "id": "db29",
//       "satisfaction": "3",
//       "emojis": "5",
//       "reasons": [
//         "Wi-Fi connectivity issues",
//         "Limited networking opportunities"
//       ],
//       "date": "November 26th, 2024"
//     },
//     {
//       "id": "9957",
//       "satisfaction": "5",
//       "emojis": "2",
//       "reasons": ["High cost", "Insufficient amenities"],
//       "date": "November 26th, 2024"
//     },
//     {
//       "id": "4a11",
//       "satisfaction": "1",
//       "emojis": "3",
//       "reasons": ["Wi-Fi connectivity issues"],
//       "date": "November 26th, 2024"
//     },
//     {
//       "id": "9468",
//       "satisfaction": "3",
//       "emojis": "5",
//       "reasons": ["Lack of quiet workspaces"],
//       "date": "November 28th, 2024"
//     },
//     {
//       "id": "1654",
//       "satisfaction": "2",
//       "emojis": "4",
//       "reasons": ["Limited networking opportunities", "High cost"],
//       "date": "January 9th, 2025"
//     },
//     {
//       "id": "19fd",
//       "satisfaction": "5",
//       "emojis": "5",
//       "reasons": ["Wi-Fi connectivity issues"],
//       "date": "January 9th, 2025"
//     },
//     {
//       "id": "4261",
//       "satisfaction": "5",
//       "emojis": "3",
//       "reasons": [
//         "Lack of quiet workspaces",
//         "Wi-Fi connectivity issues",
//         "High cost"
//       ],
//       "date": "January 9th, 2025"
//     },
//     {
//       "id": "bc31",
//       "satisfaction": "4",
//       "emojis": "5",
//       "reasons": [
//         "Limited networking opportunities",
//         "Insufficient amenities"
//       ],
//       "date": "January 10th, 2025"
//     },
//     {
//       "id": "c14a",
//       "satisfaction": "5",
//       "emojis": "3",
//       "reasons": [
//         "Wi-Fi connectivity issues",
//         "High cost"
//       ],
//       "date": "January 10th, 2025"
//     },
//     {
//       "id": "9f06",
//       "satisfaction": "2",
//       "emojis": "1",
//       "reasons": [
//         "Limited networking opportunities"
//       ],
//       "date": "January 11th, 2025"
//     }
//   ],
  // "complaint": [
  //   {
  //     "id": "43a5",
  //     "email": "Sarah@yahoo.com",
  //     "category": "support",
  //     "service": "workspace",
  //     "complaint": "Testing, testing",
  //     "date": "November 20th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "7700",
  //     "email": "sarahhanks@gmail.com",
  //     "category": "product",
  //     "service": "workspace",
  //     "complaint": "Testing 3",
  //     "date": "November 20th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "7b2b",
  //     "email": "akoje@yahoo.com",
  //     "category": "service",
  //     "service": "workspace",
  //     "complaint": "Capstong Testing",
  //     "date": "November 20th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "4f04",
  //     "email": "hanks04@yahoo.com",
  //     "category": "service",
  //     "service": "meeting-room",
  //     "complaint": "Dashboard testing",
  //     "date": "November 20th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "a8a9",
  //     "email": "gabrielakoje@yahoo.com",
  //     "category": "service",
  //     "service": "internet",
  //     "complaint": "Latest test",
  //     "date": "November 20th, 2024",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "f18b",
  //     "email": "ojogundugbengben@gmail.com",
  //     "category": "service",
  //     "service": "internet",
  //     "complaint": "Last try",
  //     "date": "November 20th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "5bdd",
  //     "email": "sarahhanks04@gmail.com",
  //     "category": "product",
  //     "service": "internet",
  //     "complaint": "sssss",
  //     "date": "November 21st, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "aafc",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "product",
  //     "service": "internet",
  //     "complaint": "poor internet",
  //     "date": "November 21st, 2024",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "6c48",
  //     "email": "sarahhanks04@gmail.com",
  //     "category": "product",
  //     "service": "internet",
  //     "complaint": "Great service",
  //     "date": "November 21st, 2024",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "f67d",
  //     "email": "sarahhanks04@gmail.com",
  //     "category": "service",
  //     "service": "meeting-room",
  //     "complaint": "yy",
  //     "date": "November 24th, 2024",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "ce3b",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "support",
  //     "service": "meeting-room",
  //     "complaint": "bbbbb",
  //     "date": "November 25th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "9498",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "product",
  //     "service": "workspace",
  //     "complaint": "aaaaaa",
  //     "date": "November 25th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "421a",
  //     "email": "Sarah@gmail.com",
  //     "category": "service",
  //     "service": "internet",
  //     "complaint": "Percentage trial",
  //     "date": "November 26th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "35ed",
  //     "email": "Sarah@yahoo.com",
  //     "category": "product",
  //     "service": "workspace",
  //     "complaint": "More trial",
  //     "date": "November 26th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "d846",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "support",
  //     "service": "meeting-room",
  //     "complaint": "Testing",
  //     "date": "November 26th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "c4d0",
  //     "email": "Sarah@gmail.com",
  //     "category": "service",
  //     "service": "meeting-room",
  //     "complaint": "Testing!",
  //     "date": "November 20th, 2024",
  //     "status": "resolved"
  //   },
  //   {
  //     "id": "49b6",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "support",
  //     "service": "workspace",
  //     "complaint": "Thursday!",
  //     "date": "November 28th, 2024",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "3a6f",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "support",
  //     "service": "workspace",
  //     "complaint": "Monday morning",
  //     "date": "December 9th, 2024",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "b74c",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "internet",
  //     "service": "workspace",
  //     "complaint": "Friday",
  //     "date": "January 9th, 2025",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "a31e",
  //     "email": "Sarah@gmail.com",
  //     "category": "Product",
  //     "service": "workspace",
  //     "complaint": "Thursday",
  //     "date": "January 9th, 2025",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "f035",
  //     "email": "Sarah@gmail.com",
  //     "category": "support",
  //     "service": "meeting-room",
  //     "complaint": "Friday",
  //     "date": "January 10th, 2025",
  //     "status" : "unresolved"
  //   },
  //   {
  //     "id": "682f",
  //     "email": "Sarah@gmail.com",
  //     "category": "product",
  //     "service": "workspace",
  //     "complaint": "Metaaaa",
  //     "date": "January 10th, 2025",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "6b25",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "service",
  //     "service": "internet",
  //     "complaint": "Cooking",
  //     "date": "January 10th, 2025",
  //     "status": "unresolved"
  //   },
  //   {
  //     "id": "1b3a",
  //     "email": "gabrielakoje@gmail.com",
  //     "category": "product",
  //     "service": "workspace",
  //     "complaint": "Saturday",
  //     "date": "January 11th, 2025",
  //     "status": "unresolved"
  //   }
  // ],
  

//   "profile": [
//     {
//       "fullName": "Admin@TheBulb",
//       "email": "akoje@yahoo.com",
//       "phone": "+1-22-33-4445",
//       "location": "lagos",
//       "role": "Admin",
//       "membersince": "january 15, 2025",
//       "lastlogin": "July 10,2024",
//       "image": "ttp://www.w3.org/2000/svg"
//     }
//   ]
// }