'use client';
import React, { useState } from "react";
import Data from "@/data/data";

const AboutPage: React.FC = () => {
  const [data] = useState(Data); // Initialize with imported Data

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="text-indigo-600">Cognify Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Empowering Innovation Across Software Fields
          </p>
        </header>

        {/* Categories Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                {item.course}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Cognify Technology?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            At Cognify Technology, we combine expertise in various software
            fields with a passion for innovation. Whether it's data science,
            machine learning, or software development, our solutions are
            designed to drive growth and efficiency for our clients.
          </p>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
