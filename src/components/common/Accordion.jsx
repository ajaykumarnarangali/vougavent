import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ faqData }) => {
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="w-full mx-auto rounded-lg shadow-2xl overflow-hidden border border-gray-200">
      {/* Title */}
      <div className="p-6 text-center bg-[#08264F]">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
          FAQs
        </h2>
      </div>

      {/* Accordion */}
      <div>
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border-t border-gray-200 transition-all duration-300 bg-[#08264F] cursor-pointer"
          >
            {/* Question */}
            <button
              className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={openId === item.id}
              aria-controls={`faq-content-${item.id}`}
            >
              <div className="flex items-center">
                <span className="w-6 h-6 flex items-center justify-center text-sm font-semibold rounded-full bg-blue-600 mr-4 flex-shrink-0">
                  {item.id}
                </span>
                <span className="text-base sm:text-lg font-medium text-white">
                  {item.question}
                </span>
              </div>
              {openId === item.id ? (
                <ChevronUp className="w-5 h-5 text-blue-300 ml-4 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-300 ml-4 flex-shrink-0" />
              )}
            </button>

            {/* Answer */}
            <div
              id={`faq-content-${item.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openId === item.id
                  ? 'max-h-[9999px] opacity-100 p-5 pt-0 bg-[#0f396e]'
                  : 'max-h-0 opacity-0 p-0'
              }`}
            >
              {item.answers.length > 1 ? (
                <ul className="list-disc list-inside space-y-2">
                  {item.answers.map((ans, index) => (
                    <li key={index} className="text-sm sm:text-base text-white">
                      {ans.image ? (
                        <img
                          src={ans.content}
                          alt={`FAQ ${item.id} image ${index + 1}`}
                          className="rounded-md w-fit mt-1"
                        />
                      ) : (
                        ans.content
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base text-white">
                 Ans: {item.answers[0].image ? (
                    <img
                      src={item.answers[0].content}
                      alt={`FAQ ${item.id} image`}
                      className="rounded-md w-fit mt-1"
                    />
                  ) : (
                    item.answers[0].content
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
