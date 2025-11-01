import { ChevronRight } from 'lucide-react';
import { Rfspec } from '../../../../data/products/EmiEmc/Rfamp';

const Table = () => {
    return (
        <>
            <div className="bg-gray-50 lg:min-h-[65vh] px-5 mt-4 py-8 md:py-0 lg:pb-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className='text-start text-primary py-4 text-lg lg:text-2xl font-semibold'>
                        Standard Models
                    </h1>
                </div>

                <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Table Header Section */}
                    <div className="grid grid-cols-3 bg-primary text-white font-semibold text-lg">
                        <div className="p-4 border-r border-blue-700">Model</div>
                        <div className="p-4 border-r border-blue-700">Frequency Range</div>
                        <div className="p-4">Specifications</div>
                    </div>

                    {/* Table Body Section */}
                    <div className="divide-y divide-gray-200">
                        {Rfspec.map((item, index) => (
                            <div
                                key={item.model}
                                className={`grid grid-cols-3 transition-colors duration-200 cursor-pointer 
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
                            >
                                {/* Model Column */}
                                <div className="p-4 font-medium text-primary border-r border-gray-200 flex items-center">
                                    {item.model}
                                </div>

                                {/* Frequency Column */}
                                <div className="p-4 font-medium text-gray-700 border-r border-gray-200 flex items-center">
                                    {item.freq}
                                </div>

                                {/* Specifications Column */}
                                <div className="p-4 text-gray-700">
                                    <ul className="space-y-1">
                                        {item.spec.map((spec, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className='flex gap-1 text-base items-center'>
                                                    <ChevronRight className="w-4 h-4 text-primary" />
                                                    <span>{spec}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
