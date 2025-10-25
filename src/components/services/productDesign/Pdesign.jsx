import { electronicProductDesigns } from '../../../data/services/ProductDesign'

function Pdesign() {
  return (
    <section className="relative py-16 bg-gray-50">
      {/* Top white gradient transition */}
      {/* <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div> */}

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-primary sm:text-3xl">
            Innovative Electronic Product Design Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Alternating Layout */}
        <div className="flex flex-col gap-10">
          {electronicProductDesigns.map((design, index) => (
            <div
              key={index}
              className={`bg-white cursor-pointer border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col md:flex-row items-center gap-6 p-6 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } hover:scale-[1.02]`}
            >
              {/* Image Section */}
              <div className="flex justify-center items-center md:w-[45%] h-56 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={design.image}
                  alt={design.title}
                  className="object-contain w-full h-full p-4"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-center md:w-[55%]">
                <h3 className="text-xl font-bold text-primary mt-2">
                  {design.title}
                </h3>
                <div className="w-10 h-0.5 bg-secondary my-2 rounded"></div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {design.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  )
}

export default Pdesign
