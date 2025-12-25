import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ServiceImageSlider = ({ images }: ServiceImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 md:h-80 lg:h-96">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        {/* Top-Right Feature Badge */}
        <motion.span
          key={`badge-${currentIndex}`}
          className="absolute top-4 right-4 inline-block px-4 py-2 bg-gradient-to-r from-primary/40 to-sky/40 backdrop-blur-md border border-primary/50 rounded-full text-sm font-medium shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-white drop-shadow-lg font-semibold">{images[currentIndex].alt}</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ServiceImageSlider;
