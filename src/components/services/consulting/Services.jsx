import { sections } from '../../../data/services/EmiEmc'

function Services() {
    return (
        <div className='bg-gray-50'>
            <div className="max-w-7xl mx-auto py-6 px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200  shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            {/* Section Header */}
                            <div className="bg-primary text-white text-lg font-semibold px-5 py-3">
                                {section.title}
                            </div>

                            {/* Section Items */}
                            <ul className="p-6 text-gray-700">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-primary text-sm mb-1">●</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services