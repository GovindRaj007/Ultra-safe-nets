import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBalcony from "@/assets/hero-balcony.jpg";
import heroSafetyNet from "@/assets/hero-safety-net.jpg";
import heroPigeonNet from "@/assets/hero-pigeon-net.jpg";
import heroSportsNet from "@/assets/hero-sports-net.jpg";
import heroCloseup from "@/assets/hero-closeup.jpg";

const slides = [
  {
    image: heroBalcony,
    title: "Invisible Grills",
    subtitle: "Stainless Steel Window Grills & Balcony Safety",
    description: "Get child-safe, rust-proof stainless steel invisible grills installed by India's most trusted professionals.",
  },
  {
    image: heroSafetyNet,
    title: "Safety Nets",
    subtitle: "Complete Building Protection Solutions",
    description: "Protect your loved ones with our premium quality safety nets for balconies, windows, and terraces.",
  },
  {
    image: heroPigeonNet,
    title: "Pigeon Nets",
    subtitle: "Bird Control & Protection Solutions",
    description: "Keep birds away with our durable anti-pigeon nets. Protect your balcony from bird droppings and nesting.",
  },
  {
    image: heroSportsNet,
    title: "Sports Nets",
    subtitle: "Professional Sports Safety Netting",
    description: "High-quality sports nets for stadiums, cricket practice, and athletic facilities ensuring player and spectator safety.",
  },
  {
    image: heroCloseup,
    title: "Premium Quality",
    subtitle: "Marine-Grade SS316 Materials",
    description: "We use only the finest materials ensuring durability and long-lasting protection for your home.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const handleTouchHoldStart = () => {
    setIsPaused(true);
  };

  const handleTouchHoldEnd = () => {
    setIsPaused(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section 
      className="relative h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden touch-pan-y"
      onTouchStart={(e) => {
        handleTouchHoldStart();
        onTouchStart(e);
      }}
      onTouchMove={onTouchMove}
      onTouchEnd={(e) => {
        onTouchEnd();
        handleTouchHoldEnd();
      }}
      onMouseDown={handleTouchHoldStart}
      onMouseUp={handleTouchHoldEnd}
      onMouseLeave={handleTouchHoldEnd}
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                India's Premium Safety Grill Specialists
              </motion.span>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-sky-light mb-6">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="https://wa.me/919788318444?text=Hi%2C%20I%27m%20interested%20in%20your%20safety%20grills%20and%20nets%20services.%20Please%20provide%20a%20free%20quote." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Free Quote
                </motion.a>
                <motion.a 
                  href="tel:+919788318444" 
                  className="btn-hero-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call: +91 97883 18444
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
