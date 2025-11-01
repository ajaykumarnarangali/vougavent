import EMI_EMC_Precompliance from '../../../../assets/products/EmiEmc/gtem/EMI_EMC_Precompliance.jpeg'
import gtem_lat from '../../../../assets/products/EmiEmc/gtem/gtem_lat.png'

const Hero = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 pb-10">
            <div className="flex flex-col md:flex-row items-start justify-between min-h-screen mt-10 px-4 sm:px-6 max-w-7xl mx-auto gap-10">

                {/* === Left Side === */}
                <div className="flex-1 flex flex-col items-center md:items-start space-y-8">
                    <div className="text-white bg-primary p-4 rounded-lg text-sm sm:text-base leading-relaxed text-center md:text-left">
                        GT003G GTEM (Giga Hertz Transverse Electromagnetic Cell) enables shield EMI-EMC measurement for Emission and Immunity.
                        Vougavent designs and Manufactures custom GTEM cells which enable you for in-house validation and failure analysis.
                    </div>

                    {/* Heading + Description */}
                    <div className="max-w-2xl">
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                            Vougavent GT003G is a powerful and versatile testing tool that is designed to simulate electromagnetic environments for electronic devices.
                            It is an ideal solution for testing the Emission and immunity of electronic devices to electromagnetic interference (EMI) and electromagnetic compatibility (EMC).
                        </p>

                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            Vougavent GT003G is a highly advanced testing tool that is built with a unique electromagnetic shielding technology.
                            This allows for the creation of a precise and consistent electromagnetic environment, which can be customized to meet the specific requirements of each test.
                        </p>

                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            With its high frequency range of up to 3 GHz, the GTEM cell can simulate a wide range of EMI and EMC scenarios.
                            It is perfect for testing electronic devices that operate in different frequency bands, including wireless communications,
                            satellite systems, and industrial control systems. The GTEM cell is a cost-effective testing solution, as it eliminates the
                            need for expensive anechoic chambers.
                        </p>
                    </div>

                    {/* === Key Specifications === */}
                    <div className="space-y-3 text-primary font-semibold">
                        <h3 className="text-lg font-bold text-center md:text-left text-gray-800 dark:text-gray-200">
                            Key Specifications
                        </h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 md:h-20 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">Frequency Range:</span>
                                <span className="text-blue-700 dark:text-blue-400">DC – 3 GHz</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 p-3 md:h-20 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">Impedance:</span>
                                <span className="text-blue-700 dark:text-blue-400">50 Ohms</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 p-3 md:h-20 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">VSWR:</span>
                                <span className="text-blue-700 dark:text-blue-400">Refer product datasheet</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 p-3 md:h-20 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">Testable Volume:</span>
                                <span className="text-blue-700 dark:text-blue-400">500 mm × 500 mm × 300 mm</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 p-3 md:h-20 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">Door Size:</span>
                                <span className="text-blue-700 dark:text-blue-400">450 mm × 450 mm</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 p-3 md:h-20 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">Input Connector:</span>
                                <span className="text-blue-700 dark:text-blue-400">N Type</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 col-span-2 p-3 md:h-20 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-800 dark:text-gray-200">Max Power:</span>
                                <span className="text-blue-700 dark:text-blue-400">46 dBm</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* === Right Side === */}
                <div className="flex-1 flex flex-col justify-center space-y-6 w-full">
                    {/* Features */}
                    <ul className="space-y-3 text-primary font-semibold">
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            Frequency range from DC to 3 GHz
                        </li>
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            Best suited for Design, Failure analysis and Pre compliance
                        </li>
                        <li className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-2 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm">
                            Required lower power RF amplifiers
                        </li>
                    </ul>

                    {/* === Side-by-Side Equal Images === */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="sm:w-4/5 flex justify-center">
                            <img
                                src={EMI_EMC_Precompliance}
                                alt="EMI_EMC_Precompliance"
                                className="w-full h-64 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="sm:w-4/5 flex justify-center">
                            <img
                                src={gtem_lat}
                                alt="gtem_lat"
                                className="w-full h-64 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-blue-100 dark:border-gray-700">
                        <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-blue-400 mb-3 text-center md:text-left">
                            Customized Solution
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            Apart from our standard design, <strong>Vougavent</strong> can also support designing custom GTEM cells based on your requirement.
                            The requirement can vary based on the <strong>testable volume</strong>, <strong>input connectors</strong>,
                            <strong> monitoring options</strong>, etc.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
