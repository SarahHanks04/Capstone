import React, { useContext } from "react";
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
import ClearDataButton from "../ClearDataButton/ClearDataButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
        display: false,
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      ticks: {
        stepSize: 2,
      },
      grid: {
        display: false,
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

  // Days Of The Week For Grouping Data
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const feedbackCounts = weeks.map(
    (week) =>
      feedbackData.filter(
        (item) =>
          new Date(item.date).toLocaleDateString("en-US", {
            weekday: "long",
          }) === week
      ).length
  );

  const complaintCounts = weeks.map(
    (week) =>
      complaintData.filter(
        (item) =>
          new Date(item.date).toLocaleDateString("en-US", {
            weekday: "long",
          }) === week
      ).length
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
    <div className="w-full h-full">
      <Bar options={options} data={data} />
      <div className="text-right pt-3">
        <ClearDataButton />
      </div>
    </div>
  );
};

export default BarChart;
