import { motion } from 'framer-motion';

function Banner({ image_url, title, content, height = '' }) {
    return (
        <div className="relative w-full overflow-hidden h-[400px] sm:h-[450px] md:h-full">
            {/* Background Image */}
            <img
                src={image_url}
                alt="Banner"
                className="w-full h-full object-cover"
            />

            {/* Overlay: subtle blue gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(31,64,123,0.3)] to-[rgba(31,64,123,0)] flex flex-col items-start gap-3 justify-center">
                <motion.h1
                    className="text-white font-bold px-6 sm:px-12 lg:px-20 py-2 sm:py-3 lg:py-4 text-xl md:text-2xl lg:text-3xl bg-[rgba(0,0,0,0.4)] max-w-full sm:max-w-[80%] md:max-w-[60%]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    {title}
                    <p className='text-lg md:text-xl'>
                        {content}
                    </p>
                </motion.h1>
            </div>
        </div>
    );
}

export default Banner;
