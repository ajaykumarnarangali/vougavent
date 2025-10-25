import {
    Zap,
    Cpu,
    Globe,
    Check,
    Lightbulb,
    Settings,
} from 'lucide-react';

const ServiceItem = ({ number, title }) => (
    <div className="flex items-center border p-4 bg-white rounded-lg shadow-sm mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-primary font-semibold text-sm mr-4">
            {number}
        </div>
        <div className="flex items-center">
            <span className="text-gray-700 font-medium">{title}</span>
        </div>
    </div>
);

// --- Component for the main sections ---
const Hero = () => {
    return (
        <div className="font-sans bg-gray-50 min-h-screen p-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="space-y-8">
                    {/* Expert Team, Tailored Solutions */}
                    <section className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary">
                            Expert Team, Tailored Solutions
                        </h1>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                            Voyavent team consist of skilled and experienced engineers dedicated to
                            providing the best electronics design solutions to our clients.
                        </p>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                            At our company, we understand that every project is unique, which is why we offer
                            customized design services to meet the specific needs of our clients.
                        </p>
                    </section>

                    {/* Industry Expertise */}
                    <section className="space-y-4">
                        <h2 className="flex items-center text-xl font-semibold text-gray-800">
                            <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                            Industry Expertise
                        </h2>
                        <div className="grid grid-cols-2 gap-4 max-w-xl">
                            {['Medical', 'Automotive', 'Aerospace', 'Consumer electronics'].map((expertise) => (
                                <div key={expertise} className="flex items-center p-3 border border-gray-200 rounded-lg bg-white shadow-sm">
                                    <Check className="w-4 h-4 mr-2 text-green-500" />
                                    <span className="text-gray-600 text-sm md:text-base">{expertise}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Capabilities */}
                    <section className="space-y-4">
                        <h2 className="flex items-center text-xl font-semibold text-gray-800">
                            <Settings className="w-5 h-5 mr-2 text-primary" />
                            Technical Capabilities
                        </h2>
                        <ul className="space-y-3 list-disc list-inside text-gray-600 ml-4">
                            <li>Processor and FPGA based Embedded Hardware</li>
                            <li>Microcontroller based Embedded hardware</li>
                            <li>Analog circuit design</li>
                            <li>Switching Power Supplies and Inverters</li>
                            <li>Motor drivers</li>
                            <li>Precision sensors</li>
                            <li>IoT and Communication systems</li>
                        </ul>
                    </section>
                    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-secondary mt-6">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our **electronics design services** include everything from concept design to final product
                            delivery. We utilize the latest design tools and techniques to ensure that our solutions
                            are of the highest quality. Our engineers are skilled in both **hardware and software
                            design**, which allows us to provide **comprehensive solutions** to our clients.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* What Sets Us Apart */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">What Sets Us Apart</h2>
                        <div className="space-y-3">
                            <div className="p-4 bg-primary text-white rounded-xl shadow-md flex items-center">
                                <Zap className="w-5 h-5 mr-3" />
                                <span className="font-medium">Well proven platforms for fast and reliable development</span>
                            </div>
                            <div className="p-4 bg-primary text-white rounded-xl shadow-md flex items-center">
                                <Cpu className="w-5 h-5 mr-3" />
                                <span className="font-medium">Core expertise of **RF and Processor based design**</span>
                            </div>
                            <div className="p-4 bg-primary text-white rounded-xl shadow-md flex items-center">
                                <Globe className="w-5 h-5 mr-3" />
                                <span className="font-medium">Multi domain expertise</span>
                            </div>
                        </div>
                    </section>

                    {/* Our Services (Combined from both images) */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Our Services</h2>
                        <p className="text-gray-600 text-sm">
                            We offer a wide range of electronics design services, including:
                        </p>
                        <div className="space-y-2">
                            <ServiceItem number={1} title="Circuit Design" />
                            <ServiceItem number={2} title="PCB Design" />
                            <ServiceItem number={3} title="Firmware and Software Development" />
                            <ServiceItem number={4} title="Design Verification and Testing" />
                            <ServiceItem number={5} title="Manufacturing Support" />
                            <ServiceItem number={6} title="System Integration" />
                            <ServiceItem number={7} title="Prototyping" />
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default Hero;