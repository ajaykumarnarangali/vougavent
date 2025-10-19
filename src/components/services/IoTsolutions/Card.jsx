
const InfoCards = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Row - Card 1 */}
                <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <h3 className="text-xl font-semibold text-primary mb-3">Gateways</h3>
                    <p className="text-gray-700 mb-4">
                        Various gateway platforms from VougaVent consist of interfaces like:
                    </p>
                    <ul className="list-none space-y-1 mb-4 text-black">
                        <li className="flex items-start"><span className="text-xl mr-2">•</span>LoRa</li>
                        <li className="flex items-start"><span className="text-xl mr-2">•</span>Bluetooth LE</li>
                        <li className="flex items-start"><span className="text-xl mr-2">•</span>Sub 1 GHz (433 MHz, 865 MHz and 915 MHz)</li>
                        <li className="flex items-start"><span className="text-xl mr-2">•</span>MODBUS</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-auto">
                        The cloud interface can be established via WiFi, Ethernet or Mobile network.
                    </p>
                </div>

                {/* First Row - Card 2 */}
                <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <h3 className="text-xl font-semibold text-primary mb-3">Sensor Node</h3>
                    <p className="text-gray-600">
                        The sensor nodes with ultra low power consumption have been developed by us which will offer battery life up to 5 Years.
                    </p>
                </div>

                {/* Second Row - Full Width Card */}
                <div className="md:col-span-2 mb-2 md:mb-0 flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <h3 className="text-xl font-semibold text-primary mb-3">Linux Based Edge Computing</h3>
                    <p className="text-gray-600 mt-auto">
                        Our integrated gateways with edge computing supports algorithms running locally to avoid latency with cloud computing.
                        The powerful iMX 8 based system enable applications like image processing in Edge mode.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default InfoCards;
