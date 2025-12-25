import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Hyderabad",
    rating: 5,
    text: "Excellent service! The invisible grills look amazing and my kids are now safe on our balcony. Highly recommend Ultra Safe Grills.",
  },
  {
    name: "Priya Sharma",
    location: "Vizag",
    rating: 5,
    text: "Very professional team. They completed the installation quickly and the quality of materials used is top-notch. Great value for money.",
  },
  {
    name: "Venkat Rao",
    location: "Warangal",
    rating: 5,
    text: "The ceiling cloth hanger has been a game changer for our apartment. Space-saving and very convenient to use. Thank you team!",
  },
  {
    name: "Lakshmi Devi",
    location: "Chittoor",
    rating: 5,
    text: "We got pigeon nets installed for our entire building. The team was punctual and completed the work within promised time. No more bird problems!",
  },
  {
    name: "Suresh Reddy",
    location: "Rajahmundry",
    rating: 5,
    text: "Best safety net service in Andhra Pradesh. The quality is unmatched and the pricing is very reasonable. Our balcony is now child-safe.",
  },
];

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [scrollStartX, setScrollStartX] = useState<number>(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
    setScrollStartX(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || !scrollRef.current) return;
    const touchDelta = touchStartX - e.touches[0].clientX;
    scrollRef.current.scrollLeft = scrollStartX + touchDelta;
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
    setIsPaused(false);
  };

  return (
    <section className="section-padding section-gradient-3 text-primary-foreground relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-sky/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-sky-light rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        {/* Horizontal Sliding Testimonials */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing touch-pan-x"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[400px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-primary-foreground/80 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-lg">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
