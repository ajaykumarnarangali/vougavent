import React from 'react'
import valuesData from '../../data/about/valuesData';

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        p-8
        rounded-3xl
        bg-white
        border border-blue-100
        shadow-md
        hover:shadow-lg hover:-translate-y-2
        transition-all duration-300 ease-in-out
        flex flex-col cursor-pointer
      "
    >
      {/* Icon Wrapper */}
      <div
        className="
          w-14 h-14
          bg-gradient-to-br from-white to-blue-50
          rounded-2xl
          flex items-center justify-center
          shadow-sm
          mb-6
        "
      >
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


function Values() {
  return (
    <section className="bg-white pb-20 px-4 md:px-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-primary mb-4">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {valuesData.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values