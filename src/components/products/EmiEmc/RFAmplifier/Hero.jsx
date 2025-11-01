import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="bg-gray-50 py-8 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content Card */}
                <div className="bg-white shadow-md rounded-xl p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        RF power amplifiers are essential components of many RF systems.
                        Vougavent RF Power amplifiers are designed to be used in multiple applications
                        such as communication, radar, and testing.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The intelligent monitoring based on a microcontroller ensures safe operation
                        of the devices. The output power of up to 30W allows the device to be used
                        for Radiated Susceptibility testing according to various EMC standards.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The amplifiers designed by Vougavent are custom-built to suit your requirements.
                    </p>
                </div>

                {/* Right Buttons Section */}
                <div className="flex flex-col gap-3">
                    <button className="bg-[#002855] text-white text-lg font-medium py-3 rounded-md hover:bg-secondary transition-colors">
                        Broadband Frequency Response
                    </button>
                    <button className="bg-[#002855] text-white text-lg font-medium py-3 rounded-md hover:bg-secondary transition-colors">
                        Intelligent Monitoring
                    </button>
                    <button className="bg-[#002855] text-white text-lg font-medium py-3 rounded-md hover:bg-secondary transition-colors">
                        Custom Design
                    </button>

                    <Link to={'/contact'} className="bg-gray-200 text-[#002855] text-base font-semibold py-2 rounded-md mt-4
                     hover:bg-gray-300 transition-colors text-center">
                        Contact us for more details
                    </Link>
                </div>
            </div>
        </section>
    );
}
