import { CoreServices, MainExpertise, MeasurementFacilities } from '../../../data/services/Antena'

const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">{title}</h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description, colorClass = 'text-primary' }) => (
    <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border-2 cursor-pointer border-gray-100">
        <div className={`p-3 rounded-xl inline-flex mb-4 ${colorClass} bg-indigo-50`}>
            <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
    </div>
);

const FeatureListItem = ({ icon: Icon, title, colorClass = 'text-secondary' }) => (
    <div className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-indigo-50 rounded-lg transition duration-150">
        <div className={`flex-shrink-0 ${colorClass}`}>
            <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <span className="text-gray-700 font-medium">{title}</span>
    </div>
);

const RfAntennaSections = () => {
    return (
        <div className="bg-white px-4 py-6 md:py-12">
            <div className="max-w-7xl mx-auto">

                <SectionHeader
                    title="RF & Antenna Design Excellence"
                    subtitle="At Vougavent, we specialize in RF and antenna design for a wide range of RF Devices and Antennas. Our team of engineers has extensive experience in the design and development of antennas, RF circuits, and wireless systems."
                />

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {CoreServices.map((service, index) => (
                        <FeatureCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                <hr className="my-8 md:my-14 border-gray-200" />

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                    {/* Our Main Expertise Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Main Expertise</h2>
                        <p className="text-gray-600 mb-8">
                            We are committed to providing our customers with the highest quality RF and antenna design services.
                        </p>
                        <div className="space-y-4">
                            {MainExpertise.map((item, index) => (
                                <FeatureListItem key={index} icon={item.icon} title={item.title} />
                            ))}
                        </div>
                    </div>

                    {/* Measurement Facilities Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Measurement Facilities</h2>
                        <p className="text-gray-600 mb-8">
                            Our in-house measurement facilities support the following capabilities.
                        </p>
                        <div className="space-y-4">
                            {MeasurementFacilities.map((item, index) => (
                                <FeatureListItem key={index} icon={item.icon} title={item.title} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RfAntennaSections;