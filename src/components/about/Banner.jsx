import { motion } from 'framer-motion';
import Banner_image from '../../assets/about/banner_image.jpg';

function Banner() {
  return (
    <div className="relative w-full overflow-hidden h-[400px] sm:h-[450px] md:h-full">
      {/* Background Image */}
      <img
        src={Banner_image}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay: subtle blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(31,64,123,0.3)] to-[rgba(31,64,123,0)] flex items-center justify-start">
        <motion.h1
          className="text-white font-bold px-6 sm:px-12 lg:px-20 py-2 sm:py-3 lg:py-6 text-2xl sm:text-3xl lg:text-4xl bg-[rgba(0,0,0,0.4)] max-w-full sm:max-w-[80%] md:max-w-[60%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          Your trusted technology partner
        </motion.h1>
      </div>
    </div>
  );
}

export default Banner;
