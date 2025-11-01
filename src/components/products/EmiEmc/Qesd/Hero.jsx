import esd_latest from '../../../../assets/products/EmiEmc/qsed/esd_latest.png'

const Hero = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col md:flex-row items-start justify-between min-h-screen mt-10 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto gap-10">

                {/* === Left Side === */}
                <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
                    <div className="text-white bg-primary p-4 rounded-lg text-sm sm:text-base leading-relaxed text-center md:text-left">
                        QESD-15A is a simple and effective tool for analyzing the electrostatic discharge performance of products.
                        The device has capability of Air and contact discharge from 1 kV to 10 kV which enables validation according to various product requirements.
                    </div>

                    {/* Heading + Description */}
                    <div className="max-w-xl">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-white mb-2 text-center md:text-left">
                            Smart way to analyze ESD
                        </h2>

                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                            Immunity to Electro Static Discharge is mandatory for any Electronics product. This has an impact on the product’s
                            functionality and reliability. To assess the performance of electronics devices, an <strong>ESD simulator</strong> has been
                            developed by <strong>Vougavent</strong>. QESD series is a handheld ESD simulator, suitable for design validation and
                            pre-compliance, supporting test voltage from <strong>500 V to 10 kV</strong> in 500 V steps.
                        </p>

                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            Our standard kit includes tips for Air and Contact discharge as per <strong>IEC/EN 61000-4-2</strong>. The device is powered by a
                            Lithium Ion battery and can be recharged using a micro USB charger. It has a simple user interface, making it easy to use. The
                            voltage level and polarity can be adjusted by buttons, and advanced configurations can be modified in the setting menu.
                        </p>
                    </div>

                    {/* === YouTube Video === */}
                    <div className="w-full flex flex-col items-center space-y-6">
                        <iframe
                            width="100%"
                            height="250"
                            src="https://www.youtube.com/embed/ZcISnV-Y_Vg"
                            title="Vougavent QESD15A, Pre compliance ESD Gun"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-xl shadow-md sm:h-72 md:h-80 lg:h-96"
                        ></iframe>
                    </div>
                </div>

                {/* === Right Side === */}
                <div className="flex-1 flex flex-col justify-center space-y-8 w-full">
                    {/* Features */}
                    <ul className="space-y-3">
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="font-medium text-gray-800 dark:text-gray-200">Discharge Voltage:</span>
                            <span className="font-bold text-blue-700 dark:text-blue-400">from 1kV to 10kV</span>
                        </li>
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="font-medium text-gray-800 dark:text-gray-200">Discharge Tip:</span>
                            <span className="font-bold text-blue-700 dark:text-blue-400">Air and Contact discharge</span>
                        </li>
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="font-medium text-gray-800 dark:text-gray-200">Polarity:</span>
                            <span className="font-bold text-blue-700 dark:text-blue-400">One-touch polarity change</span>
                        </li>
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            <span className="font-medium text-gray-800 dark:text-gray-200">Power:</span>
                            <span className="font-bold text-blue-700 dark:text-blue-400">Rechargeable Lithium Ion Battery</span>
                        </li>
                    </ul>

                    {/* === Responsive Image === */}
                    <div className="bg-gray-100 flex justify-center p-4 rounded-xl">
                        <img
                            src={esd_latest}
                            alt="esd_latest"
                            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 h-auto object-contain rounded-lg shadow-md transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
