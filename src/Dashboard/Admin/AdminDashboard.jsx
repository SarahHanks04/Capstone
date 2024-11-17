import React from "react";
import BarChart from "../Charts/BarChart";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <header className="text-2xl font-bold mb-6">Admin Dashboard</header>
      <h2 className="text-xl font-normal mb-6">Activities</h2>
      <BarChart />
    </div>
  );
};

export default AdminDashboard;
