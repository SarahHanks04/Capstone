import React, { useContext, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CapstoneContext } from "../../Context/CapstoneContext";
import { div } from "framer-motion/client";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Options for the bar chart
export const options = {
  plugins: {
    title: {
      display: true,
      text: "Feedback and Complaint Chart Data",
    },
    legend: {
      position: "top",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacke: true,
      grid: {
        display: false, // Remove vertical grid lines
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      ticks: {
        stepSize: 2, // Set intervals to 2
      },
      grid: {
        display: false, // Remove horizontal grid lines
      },
    },
  },
  // elements: {
  //   bar: {
  //     barThickness: 10, // Set the maximum bar thickness for better spacing
  //     barPercentage: 0.9, // Adjust spacing between grouped bars
  //   },
  // },
};

// BarChart Component
const BarChart = () => {
  const { formData } = useContext(CapstoneContext);

  const feedbackData = formData.feedback || [];
  console.log(feedbackData);
  const complaintData = formData.complaints || [];
  console.log(complaintData);

  // Days of the week for grouping data
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Calculate counts for each day
  const feedbackCounts = useMemo(
    () =>
      weeks.map(
        (week) => feedbackData.filter((item) => item.date === week).length
      ),
    [feedbackData]
  );

  const complaintCounts = useMemo(
    () =>
      weeks.map(
        (week) => complaintData.filter((item) => item.date === week).length
      ),
    [complaintData]
  );

  // Chart data
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Feedback",
        data: feedbackCounts,
        backgroundColor: "#FDBF17",
        stack: "Stack 1",
      },
      {
        label: "Complaints",
        data: complaintCounts,
        backgroundColor: "#13162D",
        stack: "Stack 2",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
