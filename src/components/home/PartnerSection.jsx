import { Link } from 'react-router-dom'

function PartnerSection() {
    return (
        <section className="bg-white">
            <div className="max-w-5xl flex flex-col items-center mx-auto text-center p-10 md:p-14 lg:p-20">
                {/* Heading */}
                <h2 className="text-xl md:text-3xl font-bold mb-6 text-[#004AAD]">
                    We are a Global Partner for the Radio Frequency and Antenna Solutions
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base w-full max-w-2xl md:max-w-5xl text-center leading-relaxed mb-10 text-[#1E3A8A]">
                    The Vougavent engineering team is composed of seasoned industry experts with
                    deep expertise in embedded hardware, high-speed design, power electronics,
                    and related fields. Driven by a strong passion for electronics design, we have
                    established ourselves as a trusted design house, consistently delivering
                    high-quality products across diverse segments, including:
                </p>

                {/* Button */}
                <Link to="/services/rf-antenna">
                    <button
                        className="
              px-8 py-3 rounded-lg font-semibold text-white 
              shadow-md transition-all duration-300 ease-in-out
              bg-gradient-to-r from-[#004AAD] to-[#2563EB]
              hover:from-[#2563EB] hover:to-[#004AAD]
              hover:scale-105
            "
                    >
                        Read More
                    </button>
                </Link>
            </div>

            <div className="bg-secondary w-full py-10 px-6 text-center  shadow-inner">
                <h1 className="text-white text-2xl font-bold mb-2 leading-tight">
                    Reliable Designs. Innovative Solutions.
                </h1>
                <p className="text-white text-sm md:text-base">
                    Is our focus point
                </p>
            </div>

        </section>
    )
}

export default PartnerSection