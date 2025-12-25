import { motion } from "framer-motion";
import { Shield, Award, Users, Wrench, CheckCircle, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Invisible Yet Powerful",
    description: "High-tensile stainless steel wires offering unmatched strength while remaining sleek and discreet.",
  },
  {
    icon: Award,
    title: "Marine-Grade SS316",
    description: "We use only marine-grade corrosion-resistant materials ensuring durability even in coastal environments.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Our experienced professionals ensure perfect alignment, secure anchoring, and flawless finishes.",
  },
  {
    icon: Users,
    title: "Customized Solutions",
    description: "Tailored designs for high-rise apartments, villas, or commercial properties to match your aesthetic.",
  },
];

const stats = [
  { value: "5000+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "5", label: "Cities Covered" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding section-gradient-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-sky-light rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              What Sets Ultra Safe Grills Apart?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Ultra Safe Grills & Nets stands out as a trusted name in modern home safety solutions. 
              What makes us different is our commitment to innovation, quality, and aesthetics — 
              ensuring protection that never compromises your view or your home's beauty.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-sky/30 flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-sky-light" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20 border border-white/10 p-6 text-center rounded-2xl shadow-lg cursor-pointer backdrop-blur-sm"
                >
                <div className="text-4xl md:text-5xl font-bold text-sky-light mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["Child Safe", "Rust Proof", "Weather Resistant", "10 Year Warranty", "Free Installation"].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 rounded-full border border-white/10 text-sm text-primary-foreground"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
