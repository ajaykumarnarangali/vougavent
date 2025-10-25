

import React from 'react';
import { CheckCircle, MapPin, Globe, Award } from 'lucide-react';
import Journey from '../../data/about/Journey';
import About_image from '../../assets/about/about_image.png'

const Mission = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Mission + Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Mission Section */}
          <div className="border-2 border-gray-100 rounded-2xl p-8 flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Our Mission</h2>
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Innovating for a Connected Future
              </h3>
              <p className="text-gray-600 text-base mb-4 leading-relaxed">
                Founded in 2016 in Bengaluru, Vougavent specializes in product development across
                Radio Frequency and Electronic design, leveraging deep expertise to solve complex
                challenges for our B2B clients.
              </p>

              <h4 className="text-lg font-semibold text-primary mb-3">Our Key Focus Areas:</h4>
              <ul className="space-y-2">
                {[
                  'Wireless Communication',
                  'Mobility',
                  'Internet of Things (IoT)',
                  'Consumer Electronics',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="border-2 border-gray-100 rounded-2xl p-8 flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Our Journey</h2>
              <h3 className="text-lg font-semibold text-secondary mb-8">Milestones from 2016</h3>

              <div className="relative">
                <div className="absolute top-8 left-0 right-0 h-1 bg-blue-100"></div>
                <div className="flex justify-between gap-4 md:gap-2 items-start relative overflow-y-scroll md:overflow-hidden">
                  {Journey.map((milestone, i) => (
                    <div key={i} className="text-center w-36 relative">
                      <div
                        className="w-14 h-14 mx-auto bg-blue-600 text-white flex items-center 
                        justify-center rounded-full font-bold shadow-md border-4 border-white"
                      >
                        {milestone.year}
                      </div>
                      <div className="mt-3 text-sm font-semibold text-gray-800">
                        {milestone.title}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="border-2 border-gray-100 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl shadow-sm h-72 lg:h-96">
            <img
              src={About_image}
              alt="Hands holding a sophisticated circuit board"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-20 mix-blend-multiply rounded-xl"></div>
          </div>

          {/* Text */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-extrabold text-primary mb-4">Our Philosophy</h3>
            <p className="text-gray-600 mb-3 leading-relaxed">
              Vougavent stands apart through its strategic business model, driving innovation and
              development with unique technical expertise and a highly productive team. We prioritize
              quality, cost-effectiveness, and customer success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We serve critical sectors including{' '}
              <strong className='text-primary'>
                Defense, Industrial Automation, Instrumentation, Embedded Systems
              </strong>
              , and <strong>Wireless Communication</strong>, delivering reliable and cutting-edge
              product design services.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: <Award className="w-5 h-5 text-primary mr-2" />, text: 'Quality First' },
                { icon: <Globe className="w-5 h-5 text-primary mr-2" />, text: 'Customer-Centric' },
                { icon: <MapPin className="w-5 h-5 text-primary mr-2" />, text: 'Innovation Driven' },
                { icon: <Globe className="w-5 h-5 text-primary mr-2" />, text: 'Technical Expertise' },
              ].map((item, i) => (
                <div key={i} className="flex items-center text-gray-800 font-medium">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
