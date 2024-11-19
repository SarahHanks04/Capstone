import React, { useContext, useState } from "react";
import { CapstoneContext } from "../../Context/CapstoneContext";

// Utility function to get the day suffix (st, nd, rd, th)
const getDaySuffix = (day) => {
  const suffixes = ["st", "nd", "rd"];
  const lastDigit = day % 10;
  const lastTwoDigits = day % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  }

  return suffixes[lastDigit - 1] || "th";
};

const RecentIssue = () => {
  const { formData, saveFormData, deleteActivity } = useContext(CapstoneContext);
  const complaints = formData.complaints || [];
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle expand/collapse of complaint details
  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Delete complaint by index
//   const deleteComplaint = (index) => {
//     const updatedComplaints = complaints.filter((_, i) => i !== index);
//     saveFormData("complaints", updatedComplaints); // Save updated list to context
//   };

const deleteComplaint = (index) => {
  deleteActivity("feedback", index);  // Deletes the complaint by index
//   const updatedComplaints = complaints.filter((_, i) => i !== index);
  saveFormData("feedback", updatedComplaints);
};


  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recent Issues</h2>
      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {complaints.map((complaint, index) => {
            const complaintDate = new Date(complaint.date);
            const day = complaintDate.getDate();
            const formattedDate = `${day}${getDaySuffix(day)} ${complaintDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}`;

            return (
              <li
                key={index}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <div>
                    <p className="font-medium">{complaint.email}</p>
                    <p className="text-sm text-gray-500">
                      <span>
                        
                      </span>
                      Reported on {formattedDate}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      className="text-sm text-[#13162D] hover:underline"
                      onClick={() => toggleExpanded(index)}
                      aria-expanded={expandedIndex === index}
                    >
                      {expandedIndex === index ? "Hide Details" : "View Details"}
                    </button>
                    <button
                      className="text-sm text-red-500 hover:underline"
                      onClick={() => deleteComplaint(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="mt-4">
                    <p className="font-semibold">Category: {complaint.category}</p>
                    <p className="font-semibold">Service: {complaint.service}</p>
                    <p className="mt-4 font-semibold">Complaint: {complaint.complaint}</p>
                  </div>
                )}
              </li>
            );
          })}
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
