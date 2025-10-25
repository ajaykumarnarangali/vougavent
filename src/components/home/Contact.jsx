import React from "react";
import { Link } from "react-router-dom";
import { Cpu, BriefcaseBusiness } from "lucide-react";

const Contact = () => {
  return (
    <div className="md:min-h-[80vh] lg:min-h-screen flex items-center justify-center bg-white px-2 md:px-6 py-10">
      <div className="bg-white border border-gray-200 shadow-lg rounded-3xl p-4 md:p-10 flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-primary leading-tight text-center md:text-left">
            What makes our <br /> solutions stand out
          </h2>
          <Link
            to={"/contact"}
            className="bg-gradient-to-r from-blue-500 to-sky-400 text-white font-semibold rounded-full px-8 py-3 w-fit shadow-md hover:opacity-90 transition"
          >
            Contact us
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:w-1/2 space-y-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex flex-col items-start space-y-3 py-3">
              <div className="flex gap-2 items-center">
               <Cpu className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                <h3 className="text-xl font-bold text-primary">
                  State of the art engineering facility
                </h3>
              </div>
              <p className="text-gray-600 text-base">
                The Vougavent engineering team is composed of seasoned industry
                experts with deep expertise in embedded hardware, high-speed
                design, power electronics, and related fields. Driven by a strong
                passion for electronics design, we have established ourselves as a
                trusted design house, consistently delivering high-quality products
                across diverse segments.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex flex-col items-start space-y-3 py-3">
              <div className="flex gap-2 items-center">
                <BriefcaseBusiness className="text-blue-500 w-9 h-9 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                <h3 className="text-xl font-bold text-primary">
                  Decades of experience with diverse industries
                </h3>
              </div>
              <p className="text-gray-600 text-base">
                The Vougavent engineering team is composed of seasoned industry
                experts with deep expertise in embedded hardware, high-speed
                design, power electronics, and related fields. Driven by a strong
                passion for electronics design, we have established ourselves as a
                trusted design house, consistently delivering high-quality products
                across diverse segments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
