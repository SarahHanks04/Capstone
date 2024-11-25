import React from "react";

const TextError = (props) => {
  return (
    <div data-testid="error" className="text-red-600 text-sm mt-1">
      {props.children}
    </div>
  );
};

export default TextError;












// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { TbMessageReport } from "react-icons/tb";
// import { format, parse } from "date-fns";
// import Filter from "../Filter/Filter";

// const RecentIssues = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [active, setActive] = useState(null);

//   // Fetch Complaints
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/complaint");
//         setComplaints(response.data);
//         setFiltered(response.data);
//       } catch (error) {
//         console.error("Error fetching complaints:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const noComplaints = complaints.length === 0;
//   const noFiltered = filtered.length === 0;

//   // Toggle Complaint Details
//   const toggleDetails = (index) => setActive(active === index ? null : index);

//   // Format Complaint Date
//   const formatDate = (date) => {
//     const parsed = parse(date, "MMMM do, yyyy", new Date());
//     return format(parsed, "MMMM do, yyyy");
//   };

//   return (
//     <section className="p-4 w-full mx-auto max-w-6xl">
//       <div className="flex justify-between items-center gap-4 mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">Recent Issues</h2>
//         <Filter complaints={complaints} onFilter={setFiltered} />
//       </div>

//       {noComplaints ? (
//         <p className="text-center text-gray-500">
//           No complaints submitted yet.
//         </p>
//       ) : noFiltered ? (
//         <p className="text-center text-gray-500">
//           No complaints match the selected filters.
//         </p>
//       ) : (
//         <ul className="space-y-6 overflow-y-auto max-h-[70vh]">
//           {filtered.map((item, idx) => (
//             <li
//               key={idx}
//               className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-all"
//             >
//               <main className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                 <div className="mb-4 sm:mb-0">
//                   <p className="font-medium text-gray-900">{item.email}</p>
//                   <button
//                     className="text-sm text-blue-600 hover:underline mt-2 sm:mt-0"
//                     onClick={() => toggleDetails(idx)}
//                   >
//                     {active === idx ? "Hide Details" : "View Details"}
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-500 flex items-center gap-2">
//                   <TbMessageReport className="text-gray-400" />
//                   Reported on {formatDate(item.date)}
//                 </p>
//               </main>
//               {active === idx && (
//                 <div className="mt-4 border-t pt-4 text-sm text-gray-700">
//                   <p>
//                     <span className="font-semibold">Category:</span>{" "}
//                     {item.category}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Service:</span>{" "}
//                     {item.service}
//                   </p>
//                   <p className="mt-4 text-gray-600">{item.complaint}</p>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default RecentIssues;

// import React, { useState } from "react";
// import FilterIcon from "../../assets/Filter.svg";

// const Filter = ({ complaints, onFilter }) => {
//   const [open, setOpen] = useState(false);

//   const toggle = () => setOpen((prev) => !prev);

//   const applyFilter = (type) => {
//     let results = complaints;

//     if (type === "date") {
//       results = [...complaints].sort(
//         (a, b) => new Date(b.date) - new Date(a.date)
//       );
//     } else if (type === "email") {
//       const email = complaints[0]?.email || "";
//       results = complaints.filter((c) => c.email === email);
//     } else if (type === "service") {
//       results = complaints.filter((c) => c.service === "workspace");
//     } else if (type === "category") {
//       results = complaints.filter((c) => c.category === "support");
//     }

//     onFilter(results);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggle}
//         className="flex items-center gap-[4px] px-4 py-1 bg-[#FDBF17] text-[#13162D] border-2 border-[#13162D] rounded shadow hover:bg-[#13162D] hover:text-[#FDBF17] transition"
//       >
//         <img src={FilterIcon} alt="FilterIcon" sizes={20} />
//         Filter
//       </button>
//       {open && (
//         <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-[8rem] z-10">
//           <ul className="text-sm">
//             <li
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => applyFilter("date")}
//             >
//               By Date
//             </li>
//             <li
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => applyFilter("email")}
//             >
//               By Email
//             </li>
//             <li
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => applyFilter("service")}
//             >
//               By Service
//             </li>
//             <li
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => applyFilter("category")}
//             >
//               By Category
//             </li>
//             <li
//               className="px-2 py-1 hover:bg-[#13162D] hover:text-[#FDBF17] border-2 border-[#FDBF17] bg-red-500 text-white cursor-pointer"
//               onClick={() => onFilter(complaints)}
//             >
//               Clear Filters
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filter;


// import React from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { FeedbackSummaryConfig } from "./FeedbackSummaryConfig";

// const FeedbackSummary = () => {
//   const ratings = FeedbackSummaryConfig();

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const fractionStar = rating - fullStars > 0;

//     return (
//       <div className="flex items-center">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="relative">
//             {index < fullStars ? (
//               <span className="text-yellow-500">
//                 <FaStar />
//               </span>
//             ) : index === fullStars && fractionStar ? (
//               <span className="text-yellow-500">
//                 <FaStarHalfAlt />
//               </span>
//             ) : (
//               <span className="text-gray-300"></span>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6">
//       <div className="">
//         <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
//           <h2 className="text-lg font-medium">Satisfaction</h2>
//           {renderStars(ratings.satisfaction)}
//         </div>

//         <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
//           <h2 className="text-lg font-medium">Service Rating</h2>
//           {renderStars(ratings.emojis)}
//         </div>

//         <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center col-span-1 md:col-span-2 lg:col-span-1">
//           <h2 className="text-lg font-medium">Overall Rating</h2>
//           <span className="text-lg font-medium">{ratings.overall}/5</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSummary;


// import React from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { FeedbackSummaryConfig } from "./FeedbackSummaryConfig";

// const FeedbackSummary = () => {
//   const ratings = FeedbackSummaryConfig();

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const fractionStar = rating - fullStars > 0;

//     return (
//       <div className="flex items-center">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="relative">
//             {index < fullStars ? (
//               <span className="text-yellow-500">
//                 <FaStar />
//               </span>
//             ) : index === fullStars && fractionStar ? (
//               <span className="text-yellow-500">
//                 <FaStarHalfAlt />
//               </span>
//             ) : (
//               <span className="text-gray-300"></span>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Satisfaction */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-lg font-medium">Satisfaction</h2>
//           {renderStars(ratings.satisfaction)}
//         </div>

//         {/* Service Rating */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-lg font-medium">Service Rating</h2>
//           {renderStars(ratings.emojis)}
//         </div>

//         {/* Overall Rating */}
//         <div className="p-4 bg-white rounded-lg flex justify-between items-center md:col-span-2 lg:col-span-1">
//           <h2 className="text-lg font-medium">Overall Rating</h2>
//           <span className="text-lg font-medium">{ratings.overall}/5</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSummary;

// import React from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { FeedbackSummaryConfig } from "./FeedbackSummaryConfig";

// const FeedbackSummary = () => {
//   const ratings = FeedbackSummaryConfig();

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const fractionStar = rating - fullStars > 0;

//     return (
//       <div className="flex items-center">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="relative">
//             {index < fullStars ? (
//               <span className="text-yellow-500">
//                 <FaStar />
//               </span>
//             ) : index === fullStars && fractionStar ? (
//               <span className="text-yellow-500">
//                 <FaStarHalfAlt />
//               </span>
//             ) : (
//               <span className="text-gray-300"></span>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="grid grid-cols-1 gap-4">
//       <h1 className="text-lg font-medium text-gray-800">Feedback Summary</h1>
//         {/* Satisfaction */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-[16px] text-gray-800">Satisfaction</h2>
//           {renderStars(ratings.satisfaction)}
//         </div>

//         {/* Service Rating */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-[16px] text-gray-800">Service Rating</h2>
//           {renderStars(ratings.emojis)}
//         </div>
//         <hr />

//         {/* Overall Rating */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-[18px] font-normal text-gray-800">Overall Rating</h2>
//           <span className="text-lg font-bold text-[#13162D]">
//             {ratings.overall}/5
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSummary;
