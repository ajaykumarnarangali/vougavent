import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import carouselData from '../../data/home/carouselData';

export default function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full relative">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={1200}
                modules={[Autoplay]}
                className="overflow-hidden h-fit xl:h-screen"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {carouselData.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative h-full"
                    >

                        <img
                            src={item.image}
                            alt={item.heading}
                            className="w-full h-full object-contain lg:object-cover"
                        />
                            <div className="absolute inset-0 flex flex-col items-start justify-center bg-[rgba(31,64,123,0.3)]  p-6 lg:p-12 text-white text-center">
                            <motion.h2
                                key={`${item.heading}-${activeIndex}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 1 }}
                                className="text-sm md:text-xl lg:text-3xl font-bold"
                            >
                                {item.heading}
                            </motion.h2>

                            <motion.p
                                key={`${item.content}-${activeIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="mt-1 text-xs md:text-base lg:text-xl max-w-2xl font-medium"
                            >
                                {item.content}
                            </motion.p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
