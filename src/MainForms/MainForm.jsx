import React, { useState } from "react";
import DeskAtTheBulb from "../assets/DeskAtTheBulb.png";
import ComplaintForm from "../Complaints/ComplaintForm";
import FeedbackForm from "../Feedback/FeedbackForm";
import NavigationButton from "../CustomButtons/NavigationButton";

const MainForm = () => {
  const [activeForm, setActiveForm] = useState("feedback");

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden relative pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
      <section className="relative w-11/12 max-w-sm sm:max-w-md lg:max-w-lg z-10">
        {/* Rotating Background Div */}
        <div className="absolute inset-0 transform rotate-[-4deg] bg-[#FDBF17] rounded-xl z-10 h-full w-full"></div>

        {/* Form Container */}
        <div className="relative bg-white rotate-[2deg] p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg z-20">
          <img
            src={DeskAtTheBulb}
            alt="Logo"
            className="w-20 sm:w-24 lg:w-28 mb-4 sm:mb-6"
          />
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 pt-2 sm:pt-4">
              Feedback & Complaints
            </h2>
            <NavigationButton
              activeForm={activeForm}
              setActiveForm={setActiveForm}
            />
          </div>

          {/* Conditional Rendering The Forms */}
          {activeForm === "feedback" ? <FeedbackForm /> : <ComplaintForm />}
        </div>
      </section>
    </main>
  );
};

export default MainForm;
