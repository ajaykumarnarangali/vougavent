import Hero_image from '../../../../assets/products/IoTsolutions/Iot_lora.webp'

export default function IoTSection() {
  const features = [
    { title: "Multiple protocol (LoRa, Wi-Fi and Sub 1 GHz)" },
    { title: "Simplified Wi-Fi gateway" },
    { title: "Expansion slots for custom sensor" },
  ];

  return (
    <div className="bg-gray-50 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-primary text-white rounded-xl p-4 text-center font-medium cursor-pointer"
                >
                  {f.title}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4">
              The Multi sensor IoT development Board is an off the shelf solution which helps
              to reduce the engineering efforts for building your IoT hardware components.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This combines multiple wireless protocols and Sensors which enables our customers
              to implement various functions like sensor node, Simple Gateway and Edge computer.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center md:justify-end flex-1">
            <img
              src={Hero_image}
              alt="IoT board"
              className="w-[475px] h-[285px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
