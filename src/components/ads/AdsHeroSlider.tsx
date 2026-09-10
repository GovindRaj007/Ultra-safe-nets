import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export interface AdsHeroSlide {
  /** Imported invisible grills image from src/assets */
  image: string;
  /** Keyword-bearing alt text, e.g. "Invisible grills in Vijayawada balcony" */
  imageAlt: string;
  /** Tiny uppercase label above the rotating headline */
  eyebrow: string;
  /** Rotating headline (rendered as h2) - short and keyword-led */
  headline: string;
  /** Four short, highlighted feature points - no long descriptions */
  highlights: string[];
}

export interface AdsHeroSliderProps {
  /** Pill above the H1, e.g. "Vijayawada - Guntur - All Surrounding Areas" */
  badge: string;
  /** H1 text before the highlighted part */
  h1Lead: string;
  /** H1 highlighted (gradient) part - usually the city keyword */
  h1Highlight: string;
  /** One short supporting line under the H1 (static, keyword-rich) */
  subline: string;
  /** Three invisible grills slides */
  slides: AdsHeroSlide[];
  /** Short trust proof points shown under the CTAs */
  trustPoints: string[];
  /** Pre-filled WhatsApp enquiry text (already URL-encoded) */
  whatsappText: string;
}

const PHONE_DISPLAY = "+91 7075 232499";
const PHONE_TEL = "+917075232499";
const WA_NUMBER = "917075232499";
const AUTOPLAY_MS = 6000;

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.35,
  }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-28%" : "28%",
    opacity: 0,
  }),
};

const AdsHeroSlider = ({
  badge,
  h1Lead,
  h1Highlight,
  subline,
  slides,
  trustPoints,
  whatsappText,
}: AdsHeroSliderProps) => {
  const [[current, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const preloaded = useRef(false);

  const paginate = useCallback(
    (step: number) => {
      setSlide(([prev]) => [(prev + step + slides.length) % slides.length, step]);
    },
    [slides.length]
  );

  const goTo = useCallback((index: number) => {
    setSlide(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  // Warm up the non-LCP slides once the first paint is done
  useEffect(() => {
    if (preloaded.current) return;
    preloaded.current = true;
    const timeout = setTimeout(() => {
      slides.slice(1).forEach((slide) => {
        const img = new Image();
        img.src = slide.image;
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [slides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paginate, isPaused, current]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (touchStart.current === null || touchEnd.current === null) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) < 50) return;
    paginate(distance > 0 ? 1 : -1);
  };

  const slide = slides[current];
  const whatsappHref = `https://wa.me/${WA_NUMBER}?text=${whatsappText}`;

  return (
    <section
      className="relative overflow-hidden bg-navy touch-pan-y"
      aria-label={`${h1Lead} ${h1Highlight}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ---------------- Background image slides ---------------- */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover"
              loading={current === 0 ? "eager" : "lazy"}
              decoding="async"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: AUTOPLAY_MS / 1000 + 1, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------------- Colour overlays ---------------- */}
      <div className="absolute inset-0 ads-hero-overlay" />
      <div className="absolute inset-0 ads-hero-glow" />
      <div className="absolute inset-0 ads-hero-overlay-bottom" />

      {/* Soft floating orbs (desktop only, keeps mobile cheap) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-16 right-[12%] w-72 h-72 bg-sky/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 left-[6%] w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="container-custom relative z-10 py-14 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: identity, H1, CTAs (stable across slides) */}
          <div className="lg:col-span-7 text-primary-foreground">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold ads-chip-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="ads-pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <MapPin className="w-4 h-4 text-sky-light" />
              {badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-[2rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold mt-5 mb-4"
            >
              {h1Lead} <span className="ads-gradient-text">{h1Highlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-base sm:text-lg text-primary-foreground/85 max-w-xl mb-7"
            >
              {subline}
            </motion.p>

            {/* Rotating slide headline */}
            <div className="min-h-[76px] sm:min-h-[84px] mb-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="flex items-center gap-2 text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.18em] text-sky-light mb-2">
                    <span className="h-[2px] w-8 bg-gradient-to-r from-sky to-accent rounded-full" />
                    {slide.eyebrow}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-[1.7rem] font-bold text-white leading-snug">
                    {slide.headline}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Conversion CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <motion.a
                href={`tel:${PHONE_TEL}`}
                data-track="true"
                data-track-type="call"
                data-track-url={`tel:${PHONE_TEL}`}
                className="btn-hero justify-center ads-ring-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </motion.a>
              <motion.a
                href={whatsappHref}
                data-track="true"
                data-track-type="whatsapp"
                data-track-url={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-outline justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                WhatsApp for Free Site Visit
              </motion.a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 text-xs sm:text-sm text-primary-foreground/75">
              {trustPoints.map((point, i) => (
                <span key={point} className="inline-flex items-center gap-1.5">
                  {i === 0 ? (
                    <Star className="w-4 h-4 text-gold fill-gold" />
                  ) : (
                    <ShieldCheck className="w-4 h-4 text-accent" />
                  )}
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Right: per-slide highlighted feature tiles */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="ads-panel rounded-3xl p-4 sm:p-5"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-sky-light/90 px-1 pb-3">
                  {slide.eyebrow}
                </p>
                <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {slide.highlights.map((highlight, index) => (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32, delay: 0.06 * index }}
                      className="ads-chip rounded-2xl p-3 sm:p-3.5 flex flex-col gap-2"
                    >
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky to-primary flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-[0.78rem] sm:text-sm font-semibold text-white leading-snug">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ---------------- Slide controls ---------------- */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20">
        <div className="container-custom flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                onClick={() => goTo(index)}
                aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}
                aria-current={index === current}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-10 bg-gradient-to-r from-sky to-accent"
                    : "w-4 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full ads-chip flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full ads-chip flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsHeroSlider;
