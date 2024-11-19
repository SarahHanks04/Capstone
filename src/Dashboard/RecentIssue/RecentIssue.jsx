// import React, { useContext, useState } from "react";
// import { CapstoneContext } from "../../Context/CapstoneContext";
// import { TbMessageReport } from "react-icons/tb";

// // Utility function to get the day suffix (st, nd, rd, th)
// const getDaySuffix = (day) => {
//   const suffixes = ["st", "nd", "rd"];
//   const lastDigit = day % 10;
//   const lastTwoDigits = day % 100;

//   if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
//     return "th";
//   }

//   return suffixes[lastDigit - 1] || "th";
// };

// const RecentIssue = () => {
//   const { formData, saveFormData, deleteActivity } =
//     useContext(CapstoneContext);
//   const complaints = formData.complaints || [];
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // Toggle expand/collapse of complaint details
//   const toggleExpanded = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   //   Delete complaint by index
//   const deleteComplaint = (index) => {
//     const updatedComplaints = complaints.filter((_, i) => i !== index);
//     saveFormData("complaints", updatedComplaints); // Save updated list to context
//   };

//   // const deleteComplaint = (index) => {
//   //   deleteActivity("feedback", index);  // Deletes the complaint by index
//   // //   const updatedComplaints = complaints.filter((_, i) => i !== index);
//   //   saveFormData("feedback", updatedComplaints);
//   // };

//   return (
//     <section className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Recent Issues</h2>
//       {complaints.length === 0 ? (
//         <p>No complaints submitted yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {complaints.map((complaint, index) => {
//             const complaintDate = new Date(complaint.date);
//             const day = complaintDate.getDate();
//             const formattedDate = `${day}${getDaySuffix(
//               day
//             )} ${complaintDate.toLocaleString("default", {
//               month: "long",
//               year: "numeric",
//             })}`;

//             return (
//               <li
//                 key={index}
//                 className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
//               >
//                 <div className="flex justify-between items-center cursor-pointer">
//                   <div>
//                     <p className="font-medium">{complaint.email}</p>
//                     <button
//                       className="text-sm text-[#13162D] hover:underline"
//                       onClick={() => toggleExpanded(index)}
//                       aria-expanded={expandedIndex === index}
//                     >
//                       {expandedIndex === index
//                         ? "Hide Details"
//                         : "View Details"}
//                     </button>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <p className="text-sm text-gray-500 flex items-center gap-2">
//                       <span>
//                         <TbMessageReport />
//                       </span>
//                       Reported on {formattedDate}
//                     </p>
//                     <button
//                       className="text-sm text-red-500 hover:underline"
//                       onClick={() => deleteComplaint(index)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>

//                 {expandedIndex === index && (
//                   <div className="mt-4">
//                     <p className="font-semibold">
//                       Category: {complaint.category}
//                     </p>
//                     <p className="font-semibold">
//                       Service: {complaint.service}
//                     </p>
//                     <p className="mt-4 font-semibold">
//                       Complaint: {complaint.complaint}
//                     </p>
//                   </div>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default RecentIssue;

// latest Try

import React, { useContext, useState } from "react";
import { CapstoneContext } from "../../Context/CapstoneContext";
import { TbMessageReport } from "react-icons/tb";

// Utility function to get the day suffix
const getDaySuffix = (day) =>
  day % 10 === 1 && day !== 11
    ? "st"
    : day % 10 === 2 && day !== 12
    ? "nd"
    : day % 10 === 3 && day !== 13
    ? "rd"
    : "th";

const RecentIssue = () => {
  const { formData, deleteActivity } = useContext(CapstoneContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const complaints = formData.complaints || [];

  // Toggle expand/collapse of complaint details
  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Format complaint date
  const formatComplaintDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    return `${day}${getDaySuffix(day)} ${date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    })}`;
  };

  return (
    <section className="p-4 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-left">Recent Issues</h2>
      {complaints.length === 0 ? (
        <p className="text-center text-gray-500">
          No complaints submitted yet.
        </p>
      ) : (
        <ul className="space-y-6">
          {complaints.map((complaint, index) => (
            <li
              key={index}
              className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-all"
            >
              {/* Complaint Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <p className="font-medium text-gray-900">{complaint.email}</p>
                  <button
                    className="text-sm text-blue-600 hover:underline mt-2 sm:mt-0"
                    onClick={() => toggleExpanded(index)}
                    aria-expanded={expandedIndex === index}
                  >
                    {expandedIndex === index ? "Hide Details" : "View Details"}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <TbMessageReport className="text-gray-400" />
                    Reported on {formatComplaintDate(complaint.date)}
                  </p>
                  <button
                    className="text-sm text-red-500 hover:underline"
                    onClick={() => deleteActivity("complaints", index)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Complaint Details */}
              {expandedIndex === index && (
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold text-gray-700">
                    Category: {complaint.category}
                  </p>
                  <p className="font-semibold text-gray-700">
                    Service: {complaint.service}
                  </p>
                  <p className="mt-4 text-gray-600">{complaint.complaint}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecentIssue;

// import React, { useContext, useState } from "react";
// import { CapstoneContext } from "../../Context/CapstoneContext";

// const RecentIssue = () => {
//   const { formData } = useContext(CapstoneContext);
//   const complaints = formData.complaints || [];
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleExpanded = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <section className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Recent Issues</h2>
//       {complaints.length === 0 ? (
//         <p>No complaints submitted yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {complaints.map((complaint, index) => (
//             <li
//               key={index}
//               className="border rounded-lg p-4 shadow-md"
//               onClick={() => toggleExpanded(index)}
//             >
//               <div className="flex justify-between items-center cursor-pointer">
//                 <div>
//                   <p className="font-medium">{complaint.email}</p>
//                   <p className="text-sm text-gray-500">{complaint.date}</p>
//                 </div>
//                 <button
//                   className="text-sm text-[#13162D] hover:underline"
//                   aria-expanded={expandedIndex === index}
//                 >
//                   {expandedIndex === index ? "Hide Details" : "View Details"}
//                 </button>
//               </div>
//               {expandedIndex === index && (
//                 <div className="mt-4">
//                   <p className="font-semibold">
//                     Category: {complaint.category}
//                   </p>
//                   <p className="font-semibold">Service: {complaint.service}</p>
//                   <p className="mt-4 font-semibold">
//                     Complaint: {complaint.complaint}
//                   </p>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default RecentIssue;
