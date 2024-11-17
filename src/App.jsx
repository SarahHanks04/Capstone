import React from "react";
import "./App.css";
import MainForm from "./MainForms/mainForm";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard";

function App() {
  return (
    <div>
      <MainForm />
      <AdminDashboard />
    </div>
  );
}

export default App;
