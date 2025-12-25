import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import serviceSafetyNet from "@/assets/service-safety-net.jpg";
import serviceSafetyNet2 from "@/assets/service-safety-net2.jpg";
import serviceSafetyNet3 from "@/assets/service-safety-net3.jpg";
import heroSafetyNet from "@/assets/hero-safety-net.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "High-density nylon/HDPE material",
  "UV-resistant and weather-proof",
  "Child and pet safety guaranteed",
  "Virtually invisible from distance",
  "Easy installation and removal",
  "Customizable sizes for any space",
  "5-year warranty on materials",
  "Eco-friendly and non-toxic",
];

const safetyNetsFAQs = [
  {
    question: "What is the mesh size of your safety nets?",
    answer: "Our safety nets come with a standard mesh size of 25mm to 50mm, which is small enough to prevent children and pets from slipping through while allowing adequate airflow and visibility. Custom mesh sizes are available upon request."
  },
  {
    question: "How much weight can safety nets hold?",
    answer: "Our high-quality safety nets can withstand impact force equivalent to 200-300 kg, making them highly effective at preventing accidental falls. The nets are tested rigorously to meet international safety standards."
  },
  {
    question: "Will safety nets block natural light and ventilation?",
    answer: "No, our safety nets are designed with thin, strong fibers that allow maximum light and air to pass through. From a distance, they are virtually invisible, preserving your view while ensuring safety."
  },
  {
    question: "How long do safety nets last?",
    answer: "With proper installation and minimal maintenance, our UV-resistant safety nets typically last 5-7 years. We provide a 5-year warranty on materials against manufacturing defects."
  },
  {
    question: "Can safety nets be installed on any type of balcony?",
    answer: "Yes, our safety nets can be customized to fit any balcony shape, size, or configuration. Our technicians will assess your space and create a tailored solution that fits perfectly."
  },
  {
    question: "Do safety nets require maintenance?",
    answer: "Safety nets require minimal maintenance. We recommend occasional cleaning with water to remove dust and debris, and periodic inspection to ensure the nets remain securely fastened."
  }
];

const safetyNetImages = [
  { src: serviceSafetyNet, alt: "Safety Net Installation" },
  { src: serviceSafetyNet2, alt: "Duct Area Nets" },
  { src: serviceSafetyNet3, alt: "Child Safe Nets" },
];

const SafetyNets = () => {
  return (
    <>
      <Helmet>
        <title>Safety Nets Installation | Balcony & Window Safety Nets | Ultra Safe</title>
        <meta
          name="description"
          content="Premium safety nets for balconies, windows & terraces. Child-safe, UV-resistant nets. Professional installation in Hyderabad & across Telangana. Call +91 97883 18444."
        />
        <link rel="canonical" href="https://ultrasafegrills.com/services/safety-nets" />
      </Helmet>
      
      <Layout>
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={heroSafetyNet} 
              alt="" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/60" />
          
          <div className="container-custom relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6">
                <Link to="/" className="hover:text-primary-foreground">Home</Link>
                <span>/</span>
                <span className="text-primary-foreground">Safety Nets</span>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                5% OFF
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Safety Nets</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                High-quality safety nets for balconies, windows, and terraces. Complete protection for your family and pets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-hero">Get Free Quote</Link>
                <a href="tel:+919788318444" className="btn-hero-outline"><Phone className="w-5 h-5" /> Call Now</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding section-gradient-1">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-3xl font-bold text-white mb-6">About Safety Nets</h2>
                <p className="text-white/70 mb-4">
                  Safety nets provide an additional layer of protection for high-rise apartments, preventing accidental falls 
                  while allowing fresh air and natural light to flow through your living spaces.
                </p>
                <p className="text-white/70 mb-4">
                  Made from high-density nylon or HDPE materials, our safety nets are UV-resistant, weather-proof, and 
                  designed to last for years without degradation.
                </p>
                <ServiceImageSlider images={safetyNetImages} />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="font-heading text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection 
          faqs={safetyNetsFAQs}
          subtitle="Find answers to common questions about our safety net installation services."
        />

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Need Safety Nets Installed?</h2>
            <p className="text-primary-foreground/80 mb-8">Get a free consultation and quote today.</p>
            <Link to="/contact" className="btn-hero bg-background text-foreground">Contact Us</Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SafetyNets;