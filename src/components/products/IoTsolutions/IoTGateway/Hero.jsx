export default function Hero() {
  const blocks = [
    "Powerful edge computing",
    "Excellent wireless performance",
    "Indoor and Outdoor installations",
  ];

  return (
    <section className="bg-gray-50 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden md:p-6">
        {/* Top 3 blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
          {blocks.map((title, index) => (
            <div
              key={index}
              className="bg-primary text-white text-center py-4 p-4 font-medium rounded-lg cursor-pointer"
            >
              {title}
            </div>
          ))}
        </div>

        {/* Content section */}
        <div className="p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            LoRa IoT Gateway GW1000
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The market is now headed to a phase where the Internet of Things is
            well understood across industries. The journey to smart-business
            value creation is complex and, when done right, offers significant
            opportunities.
          </p>

          <p className="text-gray-700 leading-relaxed">
            To meet the expectations of the ever-growing market, Vougavent has
            developed the IoT Gateway GW1000 as the backbone of IoT solutions.
            The GW1000 is a highly agile product with the ability to switch the
            RF protocol based on customer requirements. It is available in two
            variants:
          </p>

          <ul className="list-disc list-inside text-gray-700">
            <li>Indoor</li>
            <li>Outdoor (meets IP65)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Our IoT Gateway enables faster implementation by making it
            compatible with a wide variety of sensor nodes. The device supports
            multiple RF protocols like:
          </p>

          <ul className="list-disc list-inside text-gray-700">
            <li>LoRa</li>
            <li>Bluetooth LE</li>
            <li>Sub 1 GHz (433 MHz, 865 MHz, and 915 MHz)</li>
            <li>MODBUS</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            The cloud interface can be established via Ethernet or 4G
            communication. The gateway can also be used as a web server for
            light applications.
          </p>
        </div>
      </div>
    </section>
  );
}
