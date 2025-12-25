import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import serviceInvisibleGrill from "@/assets/service-invisible-grill.jpg";
import serviceInvisibleGrill2 from "@/assets/service-invisible-grill-2.jpg";
import introElegantProtection from "@/assets/intro-elegant-protection.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "High-tensile SS316 marine-grade stainless steel",
  "Child-safe and pet-friendly design",
  "100% rust-proof and weather-resistant",
  "Transparent view without blocking natural light",
  "Custom designs for any window or balcony size",
  "Professional installation by experts",
  "10-year warranty on materials",
  "Low maintenance and easy cleaning",
];

const applications = [
  "High-rise apartments and balconies",
  "Window grills for all floors",
  "Staircase railings",
  "Villa and bungalow balconies",
  "Commercial building safety",
  "School and hospital windows",
];

const invisibleGrillsFAQs = [
  {
    question: "What material is used in invisible grills?",
    answer: "We use premium SS316 marine-grade stainless steel cables that are 3.2mm thick. This material is highly corrosion-resistant, can withstand harsh weather conditions, and has a tensile strength of over 250 kg per wire."
  },
  {
    question: "Are invisible grills truly invisible?",
    answer: "While not completely invisible, our grills use thin stainless steel cables spaced 25-50mm apart, making them nearly imperceptible from a distance of 3-4 meters. They maintain your view while providing robust protection."
  },
  {
    question: "How much weight can invisible grills withstand?",
    answer: "Each cable in our invisible grills can withstand up to 250 kg of force. The entire system, with multiple cables working together, provides exceptional strength to prevent accidents and break-in attempts."
  },
  {
    question: "What is the gap between invisible grill wires?",
    answer: "The standard gap between wires is 25mm to 50mm, which is narrow enough to prevent children and pets from passing through while maintaining visibility and airflow. Custom spacing can be arranged based on your requirements."
  },
  {
    question: "How long does installation take?",
    answer: "Typical installation takes 2-4 hours per balcony or window, depending on the size and complexity. Our professional team ensures minimal disruption to your daily routine."
  },
  {
    question: "Do invisible grills come with a warranty?",
    answer: "Yes, we provide a comprehensive 10-year warranty on materials and a 1-year warranty on installation. Our grills are designed to last 15-20 years with proper care."
  }
];

const invisibleGrillImages = [
  { src: serviceInvisibleGrill, alt: "Invisible Grill Installation" },
  { src: serviceInvisibleGrill2, alt: "Modern Invisible Grill" },
  { src: introElegantProtection, alt: "Elegant Protection Grill" },
];

const InvisibleGrills = () => {
  return (
    <>
      <Helmet>
        <title>Invisible Grills Installation | Stainless Steel Window Grills | Ultra Safe</title>
        <meta
          name="description"
          content="Premium invisible grills installation in Hyderabad, Vizag & across Telangana. Child-safe SS316 stainless steel balcony grills. Get free quote. Call +91 97883 18444."
        />
        <meta
          name="keywords"
          content="invisible grills, stainless steel grills, balcony safety grills, window grills, child safety grills, SS316 grills, Hyderabad"
        />
        <link rel="canonical" href="https://ultrasafegrills.com/services/invisible-grills" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Invisible Grills Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ultra Safe Grills & Nets"
            },
            "description": "Premium invisible grills made from SS316 stainless steel for windows and balconies",
            "areaServed": ["Hyderabad", "Visakhapatnam", "Warangal", "Chittoor", "Rajahmundry"]
          })}
        </script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={serviceInvisibleGrill} 
              alt="" 
              className="w-full h-full object-cover" 
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/60" />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6">
                <Link to="/" className="hover:text-primary-foreground">Home</Link>
                <span>/</span>
                <Link to="/services/invisible-grills" className="text-primary-foreground">Invisible Grills</Link>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                10% OFF - Limited Offer
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Invisible Grills
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Protect your loved ones with our premium SS316 stainless steel invisible grills. 
                Child-safe, rust-proof, and aesthetically pleasing - perfect for modern homes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-hero">Get Free Quote</Link>
                <a href="tel:+919788318444" className="btn-hero-outline">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding section-gradient-1">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold text-white mb-6">
                  What Are Invisible Grills?
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-white/70 mb-4">
                    Invisible grills are modern safety solutions made from high-tensile stainless steel wires 
                    that provide complete protection for your windows and balconies without obstructing your view.
                  </p>
                  <p className="text-white/70 mb-4">
                    Unlike traditional iron grills that block light and views, invisible grills use thin but 
                    incredibly strong SS316 marine-grade stainless steel cables that are virtually transparent 
                    from a distance, maintaining the aesthetic appeal of your home.
                  </p>
                  <p className="text-white/70">
                    Our invisible grills can withstand up to 250 kg of force per wire, making them strong enough 
                    to prevent accidents while keeping children and pets safe on balconies and near windows.
                  </p>
                </div>
                
                <div className="mt-8">
                  <ServiceImageSlider images={invisibleGrillImages} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Key Features
                </h3>
                <div className="space-y-3 mb-10">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Applications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-center gap-2 text-sm text-white/70">
                      <ArrowRight className="w-4 h-4 text-sky-light" />
                      {app}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection 
          faqs={invisibleGrillsFAQs}
          subtitle="Get answers to your questions about our invisible grill installation services."
        />

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Install Invisible Grills?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free site visit and consultation. Our experts will assess your requirements 
              and provide a detailed quotation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-hero bg-background text-foreground">
                Schedule Free Visit
              </Link>
              <a href="tel:+919788318444" className="btn-hero-outline border-primary-foreground/30">
                <Phone className="w-5 h-5" /> +91 97883 18444
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default InvisibleGrills;