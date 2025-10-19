import {AntenaServices} from '../../../data/services/Antena'

function Design() {
  return (
    <section className="relative py-6 bg-gray-50">
      {/* Top white gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-primary sm:text-3xl">
            Services in Focus
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {AntenaServices.map((AntenaService, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col"
            >
              {/* Image/Icon */}
              <div className="mb-4 flex justify-center items-center h-44 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={AntenaService.image}
                  alt={AntenaService.title}
                  className="object-contain w-full h-full p-4"
                />
              </div>

              {/* Title and Tagline */}
              <h3 className="text-xl font-bold text-primary mt-2">
                {AntenaService.title}
              </h3>
              <div className="w-10 h-0.5 bg-secondary my-2 rounded"></div>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed flex-grow">
                {AntenaService.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  )
}

export default Design