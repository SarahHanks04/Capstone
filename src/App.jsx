// import React from "react";
// import "./App.css";
// import MainForm from "./MainForms/mainForm";
// import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
// import RecentIssue from "./Dashboard/RecentIssue/RecentIssue";

// function App() {
//   return (
//     <div>
//       <MainForm />
//       {/* <AdminDashboard /> */}
//       {/* <RecentIssue /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComplaintForm from "./Complaints/ComplaintForm";
import FeedbackForm from "./Feedback/FeedbackForm";
import Navbar from "./NewPractice/Navbar";
import WelcomeSection from "./NewPractice/WelcomeSection";
import MainFeed from "./NewPractice/MainFeed";
import MainForm from "./MainForms/mainForm";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WelcomeSection />
                {/* <MainFeed /> */}
                <MainForm />
              </>
            }
          />
          <Route path="/complaint" element={<ComplaintForm />} />
          <Route path="/about" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
