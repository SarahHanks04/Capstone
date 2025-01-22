import React from "react";

const MainFeed = () => {
  return (
    <section className="bg-white py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Share More Details
      </h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default MainFeed;
