import React from "react";
import BarChart from "../Charts/BarChart";

const AdminDashboard = () => {
  return (
    <div className="px-10 w-full h-full flex flex-col">
      <header className="text-2xl font-bold mb-4 pl-[4rem] pt-[1rem]">
        Admin Dashboard
      </header>
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-5xl h-full">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
