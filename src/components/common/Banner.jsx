import { motion } from 'framer-motion';

function Banner({ image_url, title, content, bg = true }) {
    return (
        <div className="relative w-full overflow-hidden h-[400px] sm:h-[450px] md:h-full">
            {/* Background Image */}
            <img
                src={image_url}
                alt="Banner"
                className="w-full h-fit md:h-full object-cover"
            />

            {/* Overlay: subtle gradient fading into white at bottom */}
            <div className="absolute inset-0 flex flex-col items-start md:justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,64,123,0.3)] via-[rgba(31,64,123,0.3)] to-transparent"></div>

                <motion.h1
                    className={`relative text-white font-bold px-6 sm:px-12 lg:px-20 py-2 sm:py-3 lg:py-4 text-base md:text-xl lg:text-3xl ${bg ? 'md:bg-[rgba(0,0,0,0.4)]' : ''} max-w-full sm:max-w-[80%] md:max-w-[60%]`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    {title}
                    <p className="text-xs lg:text-xl mt-2">{content}</p>
                </motion.h1>
            </div>
        </div>
    );
}

export default Banner;
