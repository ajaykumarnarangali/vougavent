import precompliance from '../../../assets/services/consulting/precompliance_lab.jpg'
import scanning from '../../../assets/services/consulting/Scanning.gif'

function Subsection() {
    return (
        <section className="bg-gray-50 py-4">
            <div className="max-w-7xl mx-auto px-4 lg:px-0 space-y-8">

                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white rounded-lg border border-gray-200 shadow-md p-8">
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            VougaVent EMI-EMC Pre-compliance Lab
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Located at Bangalore, India, VougaVent has a measurement facility for debugging and analysing the EMI-EMC performance.
                            Our in-house facility supports the following measurements:
                        </p>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                            <li>Radiated Emission</li>
                            <li>Radiated Susceptibility</li>
                            <li>ElectroStatic Discharge (ESD)</li>
                            <li>Surges and Fast Transients</li>
                        </ul>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <img
                            src={precompliance}
                            alt="EM Field Near Field Scanning"
                            className="w-full h-[400px] md:h-[350px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white rounded-lg border border-gray-200 shadow-md p-8">
                    <div className="md:w-1/2 w-full">
                        <img
                            src={scanning}
                            alt="EMI-EMC Lab"
                            className="w-full h-[400px] md:h-[350px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Visualize EM Field with Near Field Scanning
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We provide the EMI nearfield scanning service to support Emission analysis.
                            Near field scanning enables quick identification of noise sources and hot spots in the PCB.
                            By using the EMI Near field probing, faster turnaround is possible for EMI failure analysis at VougaVent.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Subsection