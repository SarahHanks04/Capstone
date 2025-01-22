// src/components/WelcomeSection.jsx
import React from "react";

const WelcomeSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          We Value Your Feedback
        </h2>
        <p className="mt-2">
          Help us to improve your experience by sharing your opinions and
          suggestions.
        </p>
        <input
          type="text"
          placeholder="Tell us what you think..."
          className="mt-4 p-2 rounded border border-gray-300 w-3/4 md:w-1/2 lg:w-1/3"
        />
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
