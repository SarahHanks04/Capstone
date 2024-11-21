import React, { useContext, useState } from "react";
import { CapstoneContext } from "../../Context/CapstoneContext";
import { TbMessageReport } from "react-icons/tb";

const RecentIssue = () => {
  const { formData, deleteActivity } = useContext(CapstoneContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const complaints = formData.complaints || [];

  // Toggle Function Of Complaint Details
  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function To Get The Day Suffix
  // const getDaySuffix = (day) =>
  //   day % 10 === 1 && day !== 11
  //     ? "st"
  //     : day % 10 === 2 && day !== 12
  //     ? "nd"
  //     : day % 10 === 3 && day !== 13
  //     ? "rd"
  //     : "th";

  // Format Complaint Date
  // const formatComplaintDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   return `${day}${getDaySuffix(day)} ${date.toLocaleString("default", {
  //     month: "long",
  //     year: "numeric",
  //   })}`;
  // };

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
              <main className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
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
              </main>

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
