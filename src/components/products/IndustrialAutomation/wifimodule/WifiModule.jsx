import { sections } from "../../../../data/products/IndustrialAutomation/WifiToRS485"
import mobdus_img from "../../../../assets/products/IndustrialAutomation/mobdus.webp"

function WifiModule() {
    return (
        <section className='bg-gray-50'>

            <div className="max-w-7xl mx-auto py-4 px-4 sm:py-6 lg:py-8 lg:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* --- Content Column --- */}
                    <div className="mb-10 lg:mb-0">
                        {/* Feature Cards from the original image */}
                        <div className="space-y-4">
                            <div className="p-4 bg-primary text-white rounded-md shadow-md">
                                <p className="text-base font-semibold">DIN Rail installable</p>
                            </div>
                            <div className="p-4 bg-primary text-white rounded-md shadow-md">
                                <p className="text-base font-semibold">Supports MQTT and HTTP Protocol</p>
                            </div>
                            <div className="p-4 bg-primary text-white rounded-md shadow-md">
                                <p className="text-base font-semibold">Easy integration</p>
                            </div>
                        </div>

                        {/* Paragraphs from the original image */}
                        <div className="mt-8 space-y-4 text-gray-700 text-base">
                            <p>
                                Wi-FI to MODBUS converter is developed for seamless integration of IoT connectivity with legacy
                                systems operating with MODBUS or RS485.
                            </p>
                            <p>
                                The system operated with Wi-Fi or Bluetooth connectivity and supports protocols like MQTT and HTTP.
                                The product can be customized for various cloud applications.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center rounded-xl bg-white border overflow-hidden shadow-lg">
                        <img
                            className="max-w-full h-auto object-contain max-h-[400px]"
                            src={mobdus_img} 
                            alt="VOLIGAVENT MODEL IQ-401 device"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200  shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            {/* Section Header */}
                            <div className="bg-primary text-white text-lg font-semibold px-5 py-3">
                                {section.title}
                            </div>

                            {/* Section Items */}
                            <ul className="p-6 text-gray-700">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 mb-1">
                                        <span className="text-primary text-sm mb-1">●</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WifiModule