import React from "react";
import BarChart from "../Charts/BarChart";

const AdminDashboard = () => {
  return (
    <div className="px-10 w-full h-screen scroll-none">
      <header className="text-2xl font-bold mb-4">Admin Dashboard</header>
      <h2 className="text-xl font-normal">Activities</h2>
      <BarChart />
    </div>
  );
};

export default AdminDashboard;
