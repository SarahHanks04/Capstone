import React from "react";
import BarChart from "../Charts/BarChart";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <BarChart />
    </div>
  );
};

export default AdminDashboard;
