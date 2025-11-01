import first_image from '../../../../assets/products/IoTsolutions/LoRa_Iot_Gateway_lat.webp';
import second_image from '../../../../assets/products/IoTsolutions/Lora-Iot-development-kit.webp';

function Subsection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 space-y-8">

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white rounded-lg border border-gray-200 shadow-md p-8">
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Vougavent recommends LoRa
            </h2>
            <p className="text-gray-700 mb-4">
              LoRa is the best-suited communication protocol for IoT applications
              with low data rates. The spread spectrum technology and use of sub MHz
              carrier frequencies enable longer range and flexibility.
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Longer network coverage</li>
              <li>Indoor penetration</li>
              <li>Longer battery life for LoRa-based nodes</li>
              <li>Flexibility</li>
              <li>Trouble-free installation in urban and remote applications</li>
            </ul>
          </div>

          <div className="md:w-1/2 w-full">
            <img
              src={first_image}
              alt="LoRa IoT Gateway"
              className="w-full h-auto max-h-[420px] rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white rounded-lg border border-gray-200 shadow-md p-8">
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <img
              src={second_image}
              alt="Custom High Performance Nodes"
              className="w-full h-auto max-h-[420px] rounded-lg shadow-lg object-contain"
            />
          </div>
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Custom High Performance Nodes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vougavent has expertise in developing low-power IoT sensing nodes
              that ensure a battery life of up to 5 years. The existing platform
              can be integrated with various sensors and actuators with the
              shortest possible development time. Our development SDK enables
              faster turnaround for proof of concepts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Subsection;
