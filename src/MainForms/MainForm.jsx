import React, { useState } from "react";
import DeskAtTheBulb from "../assets/DeskAtTheBulb.png";
import ComplaintForm from "../Complaints/ComplaintForm";
import FeedbackForm from "../Feedback/FeedbackForm";
import NavigationButton from "../CustomButtons/NavigationButton";

const MainForm = () => {
  const [activeForm, setActiveForm] = useState("feedback");
  const [contactMethod, setContactMethod] = useState("");

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden relative sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-16">
      <section className="relative w-11/12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10">
        {/* Rotating Background Div */}
        <div className="absolute inset-0 transform rotate-[-4deg] bg-[#FDBF17] rounded-xl z-10 h-full w-full"></div>

        {/* Form Container */}
        <div className="relative bg-white rotate-[2deg] p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg z-20">
          <img
            src={DeskAtTheBulb}
            alt="Logo"
            className="w-16 sm:w-20 md:w-24 lg:w-28 mb-4 sm:mb-6"
          />
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 pt-2 sm:pt-4">
              Feedback & Complaints
            </h2>
            <p className="pt-5 pb-5 text-sm sm:text-base text-gray-600">
              We would love to hear your thoughts, concerns, or problems so we
              can improve or continue providing a great service! You can remain
              anonymous by leaving the Name field blank.
            </p>
            <hr className="my-4" />
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 pb-6">
                Optional: Contact Details
              </h3>

              <div className="space-y-4">
                {/* Name Fields */}
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstName"
                      className="text-lg pb-3 font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="border border-gray-300 p-2 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#FDBF17]"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex flex-col w-full mt-3 sm:mt-0">
                    <label
                      htmlFor="lastName"
                      className="text-lg pb-3 font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="border border-gray-300 p-2 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#FDBF17]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Contact Method Selector */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact"
                    className="text-lg pb-3 font-medium text-gray-700"
                  >
                    Best Contact Method for Us to Respond
                  </label>
                  <select
                    name="contact"
                    id="contact"
                    className="border border-gray-300 p-2 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#FDBF17]"
                    onChange={(e) => setContactMethod(e.target.value)}
                    value={contactMethod}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="phone">Phone Number</option>
                    <option value="email">Email</option>
                    <option value="in-person">In Person</option>
                  </select>
                </div>

                {/* Conditional Fields Based on Contact Method */}
                {contactMethod === "phone" && (
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="border border-gray-300 p-2 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#FDBF17]"
                      placeholder="Your phone number"
                    />
                  </div>
                )}
                {contactMethod === "email" && (
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border border-gray-300 p-2 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#FDBF17]"
                      placeholder="Your email address"
                    />
                  </div>
                )}
              </div>
            </div>
            <hr className="my-10" />
            <NavigationButton
              activeForm={activeForm}
              setActiveForm={setActiveForm}
            />
          </div>

          {/* Conditional Rendering of Forms */}
          {activeForm === "feedback" ? <FeedbackForm /> : <ComplaintForm />}
        </div>
      </section>
    </main>
  );
};

export default MainForm;
