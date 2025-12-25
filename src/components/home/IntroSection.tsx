import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import introBalconyView from "@/assets/intro-balcony-view.jpg";
import introElegantProtection from "@/assets/intro-elegant-protection.jpg";
import introInvisibleGrill from "@/assets/intro-invisible-grill.jpg";
import introFamilySafe from "@/assets/intro-family-safe.jpg";
import introChildrenSafe from "@/assets/intro-children-safe.jpg";
import introPetSafety from "@/assets/intro-pet-safety.jpg";
import introOuterProtection from "@/assets/intro-outer-protection.jpg";
import introWeatherProof from "@/assets/intro-weather-proof.jpg";
import introZeroMaintenance from "@/assets/intro-zero-maintenance.jpg";

const images = [
  {
    src: introBalconyView,
    // alt: "Ultra Safe Grills & Nets",
    animation: "slideRight",
    overlay: { line1: "Ultra Safe", line2: "Grills & Nets" },
    textColor1: "#1e3a5f",
    textColor2: "#2d5a87",
  },
  {
    src: introElegantProtection,
    alt: "Elegant Protection",
    animation: "slideDown",
    overlay: { line1: "ELEGANT", line2: "PROTECTION" },
    textColor1: "#ffffff",
    textColor2: "#fef3c7",
  },
  {
    src: introInvisibleGrill,
    alt: "Invisible Grill",
    animation: "slideLeft",
    overlay: { line1: "INVISIBLE", line2: "GRILL" },
    textColor1: "#1e3a5f",
    textColor2: "#374151",
  },
  {
    src: introFamilySafe,
    alt: "Keep Your Family Safe",
    animation: "fallRight",
    overlay: { line1: "KEEP YOUR", line2: "FAMILY SAFE" },
    textColor1: "#7c2d12",
    textColor2: "#1e3a5f",
  },
  {
    src: introChildrenSafe,
    alt: "Childrens Protection",
    animation: "slideUp",
    overlay: { line1: "CHILDRENS", line2: "PROTECTION" },
    textColor1: "#1e3a5f",
    textColor2: "#7c2d12",
  },
  {
    src: introPetSafety,
    alt: "Maximum Pet Safety",
    animation: "slideRight",
    overlay: { line1: "MAXIMUM PET", line2: "SAFETY" },
    textColor1: "#ffffff",
    textColor2: "#fef3c7",
  },
  {
    src: introOuterProtection,
    alt: "Outer Protection",
    animation: "slideDown",
    overlay: { line1: "OUTER", line2: "PROTECTION" },
    textColor1: "#1e3a5f",
    textColor2: "#374151",
  },
  {
    src: introWeatherProof,
    alt: "Weather Proof",
    animation: "fallRight",
    overlay: { line1: "WEATHER", line2: "PROOF" },
    textColor1: "#1e3a5f",
    textColor2: "#374151",
  },
  {
    src: introZeroMaintenance,
    alt: "Zero Maintenance",
    animation: "slideLeft",
    overlay: { line1: "ZERO", line2: "MAINTENANCE" },
    textColor1: "#1e3a5f",
    textColor2: "#065f46",
  },
];

const animationVariants = {
  slideRight: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  slideDown: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
  slideUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  fallRight: {
    initial: { opacity: 0, x: -50, y: -50, rotate: -10 },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
    exit: { opacity: 0, x: 50, y: 50, rotate: 10 },
  },
};

const features = [
  "Child & Pet Safe",
  "Rust-Proof SS316",
  "Transparent View",
  "Easy Maintenance",
];

const IntroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3500);
    return () => clearInterval(timer);
  }, [nextImage]);

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
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const currentAnimation = images[currentImage]
    .animation as keyof typeof animationVariants;

  return (
    <section className="section-padding section-gradient-1 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-56 h-56 bg-sky/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sky-light font-medium text-sm mb-4">
            <Shield className="w-4 h-4" />
            Premium Protection Solutions
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            UltraSafe Grills & Nets
          </h2>
          <p className="text-primary-foreground/70">
            India's Most Trusted Safety Solution
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Image Slider Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-card via-card/95 to-primary/5 border border-border/50"
          >
            {/* Image Container */}
            <div
              className="relative h-72 md:h-96 lg:h-[450px] touch-pan-y overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="absolute inset-0"
                  initial={animationVariants[currentAnimation].initial}
                  animate={animationVariants[currentAnimation].animate}
                  exit={animationVariants[currentAnimation].exit}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Top-Right Feature Badge */}
                  {images[currentImage].alt && (
                    <motion.span
                      key={`badge-${currentImage}`}
                      className="absolute top-4 right-4 inline-block px-4 py-2 bg-gradient-to-r from-primary/40 to-sky/40 backdrop-blur-md border border-primary/50 rounded-full text-sm font-medium shadow-lg"
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-white drop-shadow-lg font-semibold">
                        {images[currentImage].alt}
                      </span>
                    </motion.span>
                  )}

                  {/* Text Overlay - Removed */}
                </motion.div>
              </AnimatePresence>

              {/* Subtle bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/20 to-transparent" />
            </div>

            {/* Content Below Image - Dark Modern Gradient Background */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 via-blue-950/80 to-sky-900/50">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                Transform Your Space with Invisible Protection
              </h3>
              <p className="text-primary-foreground/70 mb-5 leading-relaxed">
                UltraSafe Grills & Nets brings you state-of-the-art invisible
                grills that provide uncompromising safety without obstructing
                your beautiful views. Made with premium marine-grade SS316
                stainless steel, our grills are designed to last a lifetime
                while keeping your family safe.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-sky-light flex-shrink-0" />
                    <span className="text-primary-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
