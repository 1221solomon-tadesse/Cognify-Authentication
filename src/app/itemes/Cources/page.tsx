import React from "react";

const Courses = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Courses Coming Soon!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We're working hard to bring you an amazing selection of courses. Stay
          tuned!
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition">
            Notify Me
          </button>
        </div>
        <div className="mt-8">
          <img
            src="/images/coming-soon.svg"
            alt="Coming Soon Illustration"
            className="max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
