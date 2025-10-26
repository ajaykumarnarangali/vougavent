function Subsection() {
  const inputsConsidered = [
    "System requirements",
    "Interface requirements",
    "Power input requirements",
    "Mechanical constraints",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        {/* --- Title --- */}
        <h2 className="text-3xl font-bold text-primary mb-4">
          Custom Carrier Card Development
        </h2>

        {/* --- Description --- */}
        <p className="text-gray-700 text-base leading-relaxed max-w-6xl mx-auto mb-10">
          Vougavent supports custom carrier card development for our system-on-module (SOM) for your
          custom application by providing additional functionality and interfaces. The carrier card acts
          as an interface between the SOM and the rest of the system, allowing for easy integration.
        </p>

        {/* --- Inputs Section --- */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          When developing, the following inputs are considered
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {inputsConsidered.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1"
            >
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* --- Footer Line --- */}
        <p className="mt-12 text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
          This enables your product with high-performance embedded computing and seamless integration of our SOM.
        </p>

      </div>
    </section>
  );
}

export default Subsection;
