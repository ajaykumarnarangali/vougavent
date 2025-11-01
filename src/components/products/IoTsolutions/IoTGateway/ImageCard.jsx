import first_image from '../../../../assets/products/IoTsolutions/LoRa_IoT_Gateway.webp'
import second_image from '../../../../assets/products/IoTsolutions/iot-gateway-lora.webp'

export default function ImageCard() {
  return (
    <div className="bg-gray-50 pt-5 md:pt-10 px-4 sm:px-6 lg:px-4 2xl:px-0">
      <div className="max-w-7xl mx-auto border bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Image */}
          <div className="relative border-b md:border-b-0 md:border-r border-gray-200">
            <div className="aspect-[4/3] w-full p-8">
              <img
                src={first_image}
                alt="GW1000"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
              <h3 className="text-white text-sm sm:text-base font-semibold">GW1000</h3>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full">
              <img
                src={second_image}
                alt="Block diagram"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
              <h3 className="text-white text-sm sm:text-base font-semibold">Block Diagram</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
