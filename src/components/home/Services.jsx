import { useState } from 'react';
import serviceCardData from '../../data/home/serviceCard'
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from "lucide-react";

const mainBgFrom = '#1f407b'; // Top - Medium blue
const mainBgMid = '#2460a0'; // Middle - in-between blue
const mainBgTo = '#2e75c3'; // Bottom - lighter blue


const cardBgColor = '#F8F8F8'; // Very light grey/off-white

const titleColor = '#163968'; // Dark blue (same as mainBgTo)
const textColor = '#333333';  // Dark grey

const buttonFrom = "#4A90E2"; // lighter blue
const buttonTo = "#2E75C3"; // bottom gradient blue
const buttonHoverFrom = "#357ABD";
const buttonHoverTo = "#1F407B";

const Card = ({ title, description, features, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`bg-white rounded-lg  lg:rounded-2xl shadow-lg p-4 lg:p-8 flex flex-col justify-between
                 transition-transform transform hover:-translate-y-2 cursor-pointer duration-300
                 ${isOpen ?'md:h-[730px] lg:h-[780px] xl:h-[700px]' : 'md:h-[520px] lg:h-[550px] xl:h-[490px]'}`}
            style={{ backgroundColor: cardBgColor }}
        >
            <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: titleColor }}>
                    {title}
                </h3>
                <p className="text-sm lg:text-base mb-2 leading-relaxed" style={{ color: textColor }}>
                    {description}
                </p>

                {/* Features toggle */}
                {features && features.length > 0 && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center text-sm font-medium text-primary mb-4 hover:underline"
                    >
                        {isOpen ? "Hide Services" : "View Services"}
                        {isOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>
                )}

                {/* Animated features list */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out`}
                    style={{ maxHeight: isOpen ? `${features.length * 50}px` : '0' }}
                >
                    <ul className={`mb-4 space-y-2`}>
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className={`flex items-start text-sm lg:text-base transform transition-all duration-500
                                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 lg:hidden'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="h-2 w-2 mt-2 mr-3 rounded-full bg-black flex-shrink-0" />
                                <span style={{ color: textColor }}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
            <Link
                to={link || '/services/electronic-product-design'}
                className="mt-auto py-3 px-6 rounded-md font-medium text-white text-sm
                 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out text-center inline-block"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${buttonFrom}, ${buttonTo})`,
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundImage = `linear-gradient(to bottom, ${buttonHoverFrom}, ${buttonHoverTo})`)
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundImage = `linear-gradient(to bottom, ${buttonFrom}, ${buttonTo})`)
                }
            >
                More about Product Engineering
            </Link>
        </div>
    );
};



const Services = () => {
    return (
        <div
            className="h-fit py-5 px-6 lg:p-10"
            style={{
                backgroundImage: `linear-gradient(to bottom, ${mainBgFrom}, ${mainBgMid}, ${mainBgTo})`,
            }}
        >
            <header className="text-center text-white mb-16 w-full lg:max-w-6xl mx-auto">
                <h1 className="text-lg lg:text-2xl font-semibold mb-4">
                    Vougavent is a reliable technology partner with strong focus. Founded in 2016, committed to delivering
                    <span className="font-bold ms-2">
                        state-of-the-art engineering solutions that drive innovation and excellence
                    </span>
                </h1>
            </header>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
                {serviceCardData.map((data) => (
                    <Card
                        key={data.key}
                        title={data.title}
                        description={data.description}
                        features={data.features}
                        link={data.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;