import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import serviceHanger from "@/assets/service-hanger.jpg";
import serviceHanger2 from "@/assets/service-hanger2.jpg";
import serviceHanger3 from "@/assets/service-hanger3.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "Ceiling-mounted space-saving design",
  "Pulley system for easy operation",
  "Rust-proof stainless steel construction",
  "Manual and automatic options available",
  "Can hold up to 25kg of laundry",
  "Easy installation by professionals",
  "5-year warranty included",
  "Perfect for apartments and limited spaces",
];

const ceilingHangerFAQs = [
  {
    question: "How much weight can a ceiling cloth hanger hold?",
    answer: "Our ceiling cloth hangers are designed to hold up to 25 kg of wet laundry. The heavy-duty models can support up to 35 kg. The sturdy construction ensures safe and reliable daily use."
  },
  {
    question: "What is the operating mechanism?",
    answer: "We offer both manual pulley systems and motorized options. The manual version uses a simple pulley and lock mechanism that allows you to lower and raise the hanger effortlessly. The motorized version operates with a remote control."
  },
  {
    question: "How many rods are included in a ceiling hanger?",
    answer: "Our standard ceiling hangers come with 6 rods, but we offer configurations from 4 to 8 rods based on your space and requirements. Each rod is approximately 6 feet long."
  },
  {
    question: "Can ceiling hangers be installed on any ceiling type?",
    answer: "Yes, our hangers can be installed on concrete, POP, wooden, and false ceilings. Our technicians will assess your ceiling type and use appropriate mounting hardware for secure installation."
  },
  {
    question: "Is the hanger suitable for rainy seasons?",
    answer: "Absolutely! Ceiling cloth hangers are perfect for apartments with covered balconies, allowing you to dry clothes indoors during monsoon or when you have limited outdoor space."
  },
  {
    question: "How long does installation take?",
    answer: "Installation typically takes 1-2 hours depending on the ceiling type and hanger model. Our professional team ensures clean installation with minimal disruption."
  }
];

const hangerImages = [
  { src: serviceHanger, alt: "Ceiling Cloth Hanger Installation" },
  { src: serviceHanger2, alt: "Balcony Hanger View" },
  { src: serviceHanger3, alt: "Ceiling Cloth Hanger in Use" },
];

const CeilingClothHanger = () => {
  return (
    <>
      <Helmet>
        <title>Ceiling Cloth Hanger Installation | Space-Saving Drying Solution | Ultra Safe</title>
        <meta
          name="description"
          content="Premium ceiling cloth hanger installation in Hyderabad. Space-saving pulley system for modern apartments. Stainless steel, rust-proof. Call +91 97883 18444."
        />
        <link rel="canonical" href="https://ultrasafegrills.com/services/ceiling-cloth-hanger" />
      </Helmet>
      
      <Layout>
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={serviceHanger} 
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
                <span className="text-primary-foreground">Ceiling Cloth Hanger</span>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                ₹500 OFF
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ceiling Cloth Hanger</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Smart, space-saving ceiling-mounted clothes drying hangers. Perfect for modern apartments with limited balcony space.
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
                <h2 className="font-heading text-3xl font-bold text-white mb-6">About Ceiling Cloth Hangers</h2>
                <p className="text-white/70 mb-4">
                  The ceiling cloth hanger is a space-saving, stylish, and practical solution for drying clothes indoors. 
                  Crafted with durable stainless steel and a sleek design, it fits perfectly in any modern home or apartment.
                </p>
                <p className="text-white/70 mb-4">
                  The pulley system allows easy lowering and lifting, making it convenient for all ages. Whether it's rainy 
                  days or limited balcony space, our ceiling hangers ensure quick, efficient drying while keeping your laundry organized.
                </p>
                <ServiceImageSlider images={hangerImages} />
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
          faqs={ceilingHangerFAQs}
          subtitle="Everything you need to know about our ceiling cloth hanger installation."
        />

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Get Your Ceiling Hanger Installed</h2>
            <p className="text-primary-foreground/80 mb-8">Upgrade your drying experience today.</p>
            <Link to="/contact" className="btn-hero bg-background text-foreground">Contact Us</Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CeilingClothHanger;