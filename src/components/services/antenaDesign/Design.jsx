import engineering_reability from '../../../assets/services/safetyAnalysis/engineering_reability.jpg'
import thermal_simulation from '../../../assets/services/safetyAnalysis/thermal_simulation.jpg'
import pcb_failure_analysis from '../../../assets/services/safetyAnalysis/pcb_failure_analysis.jpg'

const Design = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">

                {/* First full-width card */}
                <div className="bg-white overflow-hidden border-2 md:p-5 rounded-2xl shadow-xl mb-20 flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            src={engineering_reability}
                            alt="Engineering Reliability"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-primary mb-6">
                            Engineering Reliability
                        </h3>
                        <p className="text-gray-700 text-base mb-4">
                            With our immense experience in product engineering, we offer services for developing reliable products.
                            Reliability needs to be considered consistent from the concept phase to the Manufacturing phase.
                        </p>
                        <p className="text-gray-700 font-semibold mb-2">Services include:</p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>MTBF Calculation</li>
                            <li>FMEA</li>
                            <li>Reliability Prediction</li>
                            <li>Fault Tree Analysis (FTA)</li>
                        </ul>
                    </div>
                </div>

                {/* Full-width highlight section */}
                <div className="bg-secondary text-white px-10 py-20 md:py-32 mb-20 text-center">
                    <h3 className="text-3xl font-bold mb-6">
                        SIL Rating and more
                    </h3>
                    <p className="text-lg  max-w-4xl mx-auto">
                        Our certified professional supports the development of SIL-rated Electronics products,
                        especially for areas like Railways, Automotive, and Industrial Applications.
                    </p>
                </div>

                {/* Two half-width cards side by side */}
                <div className="grid xl:grid-cols-2 gap-5">
                    {/* PCB Failure Analysis */}
                    <div className="bg-white border md:p-5 overflow-hidden rounded-2xl shadow-xl flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={pcb_failure_analysis}
                                alt="PCB Failure Analysis"
                                className="w-full h-[100%] object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                PCB Failure Analysis
                            </h3>
                            <p className="text-gray-700">
                                Reliability is the base criterion for the success of any product. Regular design cycles often miss worst-case operating conditions,
                                which can lead to Field failures. The Field failures are often due to the factors like EOS (Electrical Overstress),
                                ESD (Electro Static Discharge), Thermal Stress, Mechanical Stress, premature Aging of components, Environment, etc.
                                We provide consultancy for failure analysis and developing countermeasures that helps to manufacture reliable products.
                            </p>
                        </div>
                    </div>

                    {/* Thermal Simulation */}
                    <div className="bg-white border overflow-hidden md:p-5 rounded-2xl shadow-xl flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={thermal_simulation}
                                alt="Thermal Simulation"
                                className="w-full h-[100%] object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Thermal Simulation
                            </h3>
                            <p className="text-gray-700">
                                Our Thermal simulation services ensure best-in-class thermal engineering by providing precise thermal simulation. We offer product level and PCB level simulations with approximating worst-case operating conditions. We will ensure that your product never exceeds the safe operating limits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Design;
