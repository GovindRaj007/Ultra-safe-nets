import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import servicePigeonNet from "@/assets/service-pigeon-net.jpg";
import servicePigeonNet2 from "@/assets/service-Pigeon-Net2.jpg";
import servicePigeonNet3 from "@/assets/service-pigeon-net3.jpg";
import heroPigeonNet from "@/assets/hero-pigeon-net.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "High-quality nylon/HDPE nets",
  "Humane bird deterrent solution",
  "UV-resistant and durable",
  "Invisible from a distance",
  "Prevents bird droppings and mess",
  "Protects AC units and ventilation",
  "Easy maintenance",
  "Long-lasting protection",
];

const pigeonNetsFAQs = [
  {
    question: "Is pigeon netting harmful to birds?",
    answer: "No, our pigeon nets are completely humane. They simply act as a physical barrier that prevents birds from entering your space without causing them any harm. The nets are designed to deter, not injure."
  },
  {
    question: "What areas can be covered with pigeon nets?",
    answer: "Pigeon nets can be installed on balconies, terraces, windows, AC outdoor units, duct areas, parking spaces, warehouse roofs, and any open area where birds tend to gather or nest."
  },
  {
    question: "How durable are pigeon nets?",
    answer: "Our pigeon nets are made from high-quality HDPE or nylon materials that are UV-stabilized to withstand harsh sunlight. They typically last 3-5 years with minimal maintenance."
  },
  {
    question: "Will the nets affect the appearance of my building?",
    answer: "Our pigeon nets are available in colors that blend with your building's facade. When properly installed, they are nearly invisible from ground level and don't affect the aesthetic appeal."
  },
  {
    question: "Do pigeon nets block air circulation?",
    answer: "Not at all. Our nets have appropriate mesh sizes that allow complete air circulation while effectively blocking birds. You'll still enjoy fresh air and natural ventilation."
  },
  {
    question: "How often should pigeon nets be replaced?",
    answer: "With proper care, our nets last 3-5 years. We recommend annual inspections to check for any wear and tear, especially after monsoon season. We offer maintenance services at competitive rates."
  }
];

const pigeonNetImages = [
  { src: servicePigeonNet, alt: "Pigeon Net Installation" },
  { src: servicePigeonNet2, alt: "Bird Protection Net" },
  { src: servicePigeonNet3, alt: "Outer Building Protection" },
];

const PigeonNets = () => {
  return (
    <>
      <Helmet>
        <title>Pigeon Nets Installation | Bird Protection Nets | Ultra Safe Grills</title>
        <meta
          name="description"
          content="Effective pigeon and bird protection nets in Hyderabad. Keep your balcony clean and bird-free. Humane, durable nets. Professional installation. Call +91 97883 18444."
        />
        <link rel="canonical" href="https://ultrasafegrills.com/services/pigeon-nets" />
      </Helmet>
      
      <Layout>
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={heroPigeonNet} 
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
                <span className="text-primary-foreground">Pigeon Nets</span>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                Special Price
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Pigeon Nets</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Effective pigeon and bird protection nets. Keep your balcony clean and bird-free without harming them.
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
                <h2 className="font-heading text-3xl font-bold text-white mb-6">About Pigeon Nets</h2>
                <p className="text-white/70 mb-4">
                  Pigeon nets provide an effective and humane solution to keep birds away from your balconies, 
                  windows, and terraces. Our high-quality nets prevent pigeons from nesting and leaving droppings 
                  that can damage your property and create health hazards.
                </p>
                <p className="text-white/70 mb-4">
                  Made from durable nylon or HDPE materials, these nets are virtually invisible from a distance, 
                  maintaining the aesthetic appeal of your building while providing effective bird protection.
                </p>
                <ServiceImageSlider images={pigeonNetImages} />
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
          faqs={pigeonNetsFAQs}
          subtitle="Common questions about our pigeon and bird protection net services."
        />

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Get Pigeon Net Installation</h2>
            <p className="text-primary-foreground/80 mb-8">Protect your space from birds humanely.</p>
            <Link to="/contact" className="btn-hero bg-background text-foreground">Contact Us</Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PigeonNets;