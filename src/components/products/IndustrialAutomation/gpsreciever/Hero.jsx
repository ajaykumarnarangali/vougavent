import system_diagram_image from '../../../../assets/products/IndustrialAutomation/blockd.webp';
import board from '../../../../assets/products/IndustrialAutomation/precision_gps_product.webp';

function Hero() {
  const features = [
    "Concurrent reception of GPS, GLONASS and Galileo",
    "High refresh rate and accuracy",
    "Bluetooth with extended range"
  ];

  return (
    <section className="py-16 sm:py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        
        {/* --- First Row: Key Features + Description --- */}
        <div className="mb-16">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 text-center">Key Features</h2>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-4 bg-primary text-white text-base font-medium rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Description Block below features */}
          <div className="p-6 bg-white border-l-4 border-primary rounded-2xl shadow-sm text-gray-700 text-base max-w-7xl mx-auto">
            <p>
              This reference board supports <strong>ZED-F9P & NINA-B3 open CPU BLE</strong>. 
              The development can be directly integrated to <strong>Arduino</strong> for faster software development environment.
            </p>
          </div>
        </div>

        {/* --- Second Row: Two Images --- */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image 1: System Block Diagram */}
          <div className="flex justify-center">
            <div className="p-4 border border-gray-200 rounded-2xl shadow-lg bg-white w-full h-96 sm:h-[28rem] md:h-[32rem] flex justify-center items-center">
              <img
                src={system_diagram_image}
                alt="System block diagram"
                className="max-h-full max-w-full object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Image 2: Product Board */}
          <div className="flex justify-center">
            <div className="p-4 border border-gray-200 rounded-2xl shadow-lg bg-white w-full h-96 sm:h-[28rem] md:h-[32rem] flex justify-center items-center">
              <img
                src={board}
                alt="Vougavent reference board"
                className="max-h-full max-w-full object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
