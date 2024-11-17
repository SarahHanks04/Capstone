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
      stacked: true,
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
  // const feedbackCounts = useMemo(() =>
  //   weeks.map(
  //     (week) => feedbackData.filter((item) => item.date === week).length), [feedbackData]
  // );
  // const complaintCounts = useMemo(() =>
  //   weeks.map(
  //     (week) => complaintData.filter((item) => item.date === week).length), [complaintData]
  // );

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
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        label: "Complaints",
        data: complaintCounts,
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
