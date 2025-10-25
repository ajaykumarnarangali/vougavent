import { expertiseItems, serviceItems } from '../../../data/services/EmiEmc'
import EMC_simulation_img from '../../../assets/services/consulting/EMC-Simulation.png'
import EMI_EMC_Precompliance_img from '../../../assets/services/consulting/EMI_EMC_Precompliance.jpeg'

const Hero = () => {

    return (
        <div className=' bg-gray-50'>
            <div className="max-w-7xl mx-auto py-6 md:py-12 font-sans px-4 lg:px-0">
                {/* Expertise Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {expertiseItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-primary text-white p-6 rounded-lg flex md:flex-col lg:flex-row items-center justify-center h-20 md:h-24 transition duration-300 cursor-pointer"
                        >
                            <item.icon className="w-6 h-6 mr-3" />
                            <p className="text-lg font-semibold text-center">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-64 flex items-center justify-center bg-gray-300">
                            <img
                                src={EMC_simulation_img}
                                alt="Radiated Emission failure analysis at Vougavent"
                                className="w-full h-full object-cover hover:scale-105 transition ease-in cursor-pointer"
                            />
                        </div>
                        <p className="p-3 text-center text-sm text-gray-600 border-t border-gray-200">
                            Radiated Emission failure analysis at Vougavent
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-64 flex items-center justify-center bg-gray-300">
                            <img
                                src={EMI_EMC_Precompliance_img}
                                alt="Conducted Emission testing setup"
                                className="w-full h-full object-cover hover:scale-105 transition ease-in cursor-pointer"
                            />
                        </div>
                        <p className="p-3 text-center text-sm text-gray-600 border-t border-gray-200">
                            Conducted Emission testing setup
                        </p>
                    </div>
                </div>

                <div className="text-gray-700 mb-6">
                    <p>
                        <strong className='text-primary'>EMI (Electromagnetic Interference)</strong> and <strong className='text-primary'>EMC (Electromagnetic Compatibility)</strong> are
                        critical considerations in electronic design. Compliance ensures that devices function correctly and don’t interfere
                        with others.
                        At <strong className='text-primary'>Vougavent</strong>, we provide <strong className='text-primary'>EMI-EMC consulting services</strong> for a wide range of electronic systems.
                        Our experts help ensure your products meet global compliance requirements efficiently.
                    </p>
                </div>

                <hr className="mb-10 border-gray-200" />

                <h2 className="text-xl md:text-3xl font-extrabold text-primary mb-10 text-center">
                    Our EMI-EMC Consulting Services Include
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {serviceItems.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-2xl p-4 
                            shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer"
                        >
                            <div className="flex flex-col items-start space-y-4">
                                <div>
                                    <div className="p-3 bg-blue-50 rounded-xl flex gap-2 items-center">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Hero;