import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceInvisibleGrill from "@/assets/service-invisible-grill.jpg";
import serviceBalconyGrills from "@/assets/service-balcony-grills.jpg";
import serviceWindowGrills from "@/assets/service-window-grills.jpg";
import serviceHanger2 from "@/assets/service-hanger2.jpg";

const services = [
  {
    title: "Invisible Grills",
    description: "Premium SS316 stainless steel invisible grills solution. High-tensile cables, child-safe design, rust-proof and weather-resistant for all applications.",
    image: serviceInvisibleGrill,
    link: "/services/invisible-grills",
    badge: "Most Popular",
  },
  {
    title: "Balcony Invisible Grills",
    description: "Specialized invisible grills designed specifically for balconies. Maintain panoramic views while ensuring complete family safety and protection.",
    image: serviceBalconyGrills,
    link: "/services/invisible-grills-balcony",
    badge: "Premium",
  },
  {
    title: "Window Invisible Grills",
    description: "Child-safe window protection solution. Invisible cables provide security without blocking light or ventilation. Perfect for high-rise apartments.",
    image: serviceWindowGrills,
    link: "/services/invisible-grills-windows",
    badge: "Child-Safe",
  },
  {
    title: "Ceiling Cloth Hanger",
    description: "Space-saving ceiling-mounted clothes drying hangers with pulley system. Rust-proof stainless steel, perfect for modern apartments with limited space.",
    image: serviceHanger2,
    link: "/services/ceiling-cloth-hanger",
    badge: "Space-Saving",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding section-gradient-2 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-sky/10 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-sky-light rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Premium Safety Solutions
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            We provide comprehensive safety solutions for your home and office. From invisible grills to ceiling cloth hangers, we have all your protection needs covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20 border border-white/10 rounded-2xl shadow-lg overflow-hidden card-hover h-full backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      {service.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2 group-hover:text-sky-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sky-light font-medium text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
