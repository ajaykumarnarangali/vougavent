import React from 'react';
import industries from '../../data/about/Industry';

function Focus() {
  return (
    <section className="relative py-16 bg-gray-50">
      {/* Top white gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-primary sm:text-3xl">
            Industries in Focus
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col"
            >
              {/* Image/Icon */}
              <div className="mb-4 flex justify-center items-center h-40 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={industry.imageSrc}
                  alt={industry.title}
                  className="object-contain w-full h-full p-4"
                />
              </div>

              {/* Title and Tagline */}
              <h3 className="text-xl font-bold text-primary mt-2">
                {industry.title}
              </h3>
              <div className="w-10 h-0.5 bg-secondary my-2 rounded"></div>

              <p className="text-gray-500 text-sm mb-4 italic">
                {industry.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed flex-grow">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
}

export default Focus;
