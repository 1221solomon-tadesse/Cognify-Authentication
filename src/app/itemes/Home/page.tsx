import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-cyan-100 p-6">
      <div className="max-w-7xl mx-auto">

        <header className="text-center py-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-cyan-600">Cognify Technology</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Pioneering solutions in Data Science, Machine Learning, and Software
            Development to transform your vision into reality.
          </p>
          <button className="mt-8 bg-cyan-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
            Get Started
          </button>
        </header>

        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Explore Our Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300">
              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
                Data Science
              </h3>
              <p className="text-gray-600">
                Turning data into actionable insights to help you make smarter
                decisions and achieve your goals.
              </p>
            </div>

      
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300">
              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
                Machine Learning
              </h3>
              <p className="text-gray-600">
                Empowering automation and innovation through state-of-the-art
                machine learning technologies.
              </p>
            </div>

        
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300">
              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
                Software Development
              </h3>
              <p className="text-gray-600">
                Building robust and scalable software tailored to your unique
                business needs.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cyan-600 text-white py-16 rounded-lg mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Partner with Cognify Technology to unlock the potential of
            cutting-edge solutions in software and beyond.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
