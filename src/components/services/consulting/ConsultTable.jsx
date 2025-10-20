import { ChevronRight } from 'lucide-react';
import { EmiSpecData } from '../../../data/services/EmiEmc'

const consultTable = () => {
  return (
    <div className="bg-gray-50 lg:min-h-screen px-5 py-4 lg:py-0">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Table Header Section */}
        <div className="grid grid-cols-2 bg-primary text-white font-semibold text-lg">
          <div className="p-4 border-r border-blue-700">Domain</div>
          <div className="p-4">Specifications</div>
        </div>

        {/* Table Body Section */}
        <div className="divide-y divide-gray-200">
          {EmiSpecData.map((item, index) => (
            <div
              key={item.domain}
              className={`grid grid-cols-2 cursor-pointer
              transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
            >
              {/* Domain Column */}
              <div className="p-4 font-medium text-primary border-r border-gray-200 flex items-center">
                {item.domain}
              </div>

              {/* Specifications Column */}
              <div className="p-4 text-gray-700">
                <ul className="space-y-1">
                  {item.specs.map((spec, i) => (
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
  );
};

export default consultTable;
