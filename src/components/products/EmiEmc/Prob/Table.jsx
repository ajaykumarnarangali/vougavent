import { ChevronRight } from 'lucide-react';

const ConsultTable = ({ title, data }) => {
  return (
    <>
      <div className="bg-gray-50 px-5 mt-4 py-4 lg:py-0  lg:pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-start text-primary py-4 text-lg lg:text-2xl font-semibold">
            {title}
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-primary text-white font-semibold text-lg">
            <div className="p-4 border-r border-blue-700">Model</div>
            <div className="p-4 border-r border-blue-700">Frequency</div>
            <div className="p-4">Image</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <div
                key={item.model}
                className={`grid grid-cols-3 transition-colors duration-200 cursor-pointer
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
              >
                {/* Model */}
                <div className="p-4 font-medium text-primary border-r border-gray-200 flex items-center">
                  {item.model}
                </div>

                {/* Frequency / Specs */}
                <div className="p-4 text-gray-700 border-r border-gray-200 whitespace-pre-line">
                  {item.freq.split('\n').map((line, i) => (
                    <div key={i} className="flex items-start gap-1">
                      <ChevronRight className="w-4 h-4 text-primary mt-1" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="p-4 flex justify-center items-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-32 h-32 object-contain rounded-md shadow-sm border border-gray-200"
                    />
                  ) : (
                    <span className="text-gray-400 italic">No Image</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultTable;
