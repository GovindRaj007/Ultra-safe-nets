import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import serviceBalconyGrills from "@/assets/service-balcony-grills.jpg";
import serviceBalconyGrills2 from "@/assets/service-balcony-grills-2.jpg";
import serviceBalconyGrills3 from "@/assets/service-balcony-grills-3.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "Premium SS316 marine-grade stainless steel cables",
  "Unobstructed 360-degree panoramic views",
  "Weatherproof and corrosion-resistant design",
  "Child-safe and pet-friendly protection",
  "Handles high wind pressure and outdoor elements",
  "Seamless integration with modern architecture",
  "10-year warranty on materials and hardware",
  "Quick professional installation with minimal disruption",
];

const benefits = [
  "Maintain your balcony's aesthetic appeal while ensuring family safety",
  "Prevent children and pets from falling or climbing",
  "Keep balconies open and airy - no traditional grill obstruction",
  "Protect against unauthorized intrusion attempts",
  "Withstand harsh weather conditions across Andhra Pradesh",
  "UV-resistant cables that don't degrade in sun exposure",
];

const balconyGrillsFAQs = [
  {
    question: "Why choose invisible grills for balconies specifically?",
    answer: "Invisible grills for balconies provide maximum visibility while ensuring complete safety. Unlike traditional grills that block your view and airflow, our SS316 cables maintain the open feel of your balcony while protecting children, elderly family members, and pets from falls."
  },
  {
    question: "Will the grills block my balcony's view or natural light?",
    answer: "No! Our invisible grills use thin stainless steel cables (3.2mm) spaced 25-50mm apart. From 3-4 meters away, they're nearly imperceptible. Natural light flows freely, and you maintain unobstructed views of your surroundings."
  },
  {
    question: "How do invisible grills handle monsoon and heavy rains?",
    answer: "Our SS316 marine-grade stainless steel is specifically designed for harsh weather conditions. The cables allow water to flow through while maintaining structural integrity. No rust or corrosion issues even during heavy monsoons across Andhra Pradesh."
  },
  {
    question: "Can invisible grills be installed on all balcony types?",
    answer: "Yes! We can install on concrete railings, metal railings, wall-mounted, floor-mounted, and corner balconies. Our team will assess your balcony structure and provide a customized solution that fits your specific layout."
  },
  {
    question: "What is the installation timeline for balcony grills?",
    answer: "Typical balcony installation takes 3-6 hours depending on balcony size and complexity. We work around your schedule and handle all measurements, drilling, and safety protocols professionally."
  },
  {
    question: "How do I maintain balcony invisible grills?",
    answer: "Maintenance is minimal! Occasional cleaning with water and mild soap keeps them looking new. No repainting or special treatments needed. The SS316 material is self-maintaining and designed to last 15-20 years."
  }
];

const balconyImages = [
  { src: serviceBalconyGrills, alt: "Balcony Invisible Grills" },
  { src: serviceBalconyGrills2, alt: "Modern Balcony Protection" },
  { src: serviceBalconyGrills3, alt: "Elegant Balcony Design" },
];

const InvisibleGrillsBalcony = () => {
  return (
    <>
      <Helmet>
        <title>Balcony Invisible Grills | Premium Balcony Protection | Urban Invisible Grills</title>
        <meta
          name="description"
          content="Premium invisible grills for balconies across Andhra Pradesh. Maintain views while ensuring family safety. SS316 stainless steel, rust-proof, 10-year warranty. Free consultation!"
        />
        <meta
          name="keywords"
          content="balcony invisible grills, balcony safety grills, stainless steel balcony protection, child-safe balcony grills, Andhra Pradesh"
        />
        <link rel="canonical" href="https://urbansafetygrills.in/services/invisible-grills-balcony" />
        <meta property="og:title" content="Balcony Invisible Grills | Premium Balcony Protection" />
        <meta property="og:description" content="Premium invisible grills for balconies. Maintain views while ensuring complete family safety. SS316 stainless steel with 10-year warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urbansafetygrills.in/services/invisible-grills-balcony" />
        <meta property="og:image" content="https://urbansafetygrills.in/favicon.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balcony Invisible Grills | Premium Protection" />
        <meta name="twitter:description" content="Premium invisible grills for balconies - maintain views with complete safety." />
        <meta name="twitter:image" content="https://urbansafetygrills.in/favicon.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Invisible Grills for Balconies",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Urban Invisible Grills"
            },
            "description": "Premium invisible grills installation for balconies across Andhra Pradesh",
            "areaServed": ["Andhra Pradesh", "Visakhapatnam", "Rajahmundry", "Vijayawada", "Guntur", "Tirupati", "Ongole"]
          })}
        </script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={serviceBalconyGrills} 
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
                <Link to="/#services" className="hover:text-primary-foreground">Services</Link>
                <span>/</span>
                <span className="text-primary-foreground">Balcony Invisible Grills</span>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                Premium Balcony Protection
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Invisible Grills for Balconies
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Perfect balcony safety solutions that preserve your view. Premium SS316 stainless steel cables 
                keep your family safe without compromising aesthetics or natural light.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-hero">Get Free Quote</Link>
                <a href="tel:+917075232499" className="btn-hero-outline">
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
                  Professional Balcony Safety Solutions
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-white/70 mb-4">
                    Your balcony is your private outdoor space - but it needs to be safe. Traditional grills 
                    are unsightly and block your view. Our invisible grills for balconies provide complete safety 
                    without the visual obstruction.
                  </p>
                  <p className="text-white/70 mb-4">
                    Designed specifically for balcony conditions, our grills withstand wind pressure, temperature 
                    fluctuations, and harsh weather conditions across Andhra Pradesh. The premium SS316 marine-grade 
                    stainless steel cables are UV-resistant and virtually corrosion-proof.
                  </p>
                  <p className="text-white/70">
                    Each cable can withstand up to 250 kg of force, providing robust protection while maintaining 
                    the elegance and openness of your balcony space. Perfect for high-rise apartments, villas, 
                    and commercial properties.
                  </p>
                </div>
                
                <div className="mt-8">
                  <ServiceImageSlider images={balconyImages} />
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
                  Why Choose Us for Balcony Grills?
                </h3>
                <div className="space-y-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-sm text-white/70">
                      <ArrowRight className="w-4 h-4 text-sky-light flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection 
          faqs={balconyGrillsFAQs}
          subtitle="Common questions about our balcony invisible grills installation services."
        />

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Transform Your Balcony Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free site visit and personalized consultation. Our experts will recommend 
              the perfect invisible grill solution for your balcony. Serving all of Andhra Pradesh!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-hero bg-background text-foreground">
                Schedule Free Visit
              </Link>
              <a href="tel:+917075232499" className="btn-hero-outline border-primary-foreground/30">
                <Phone className="w-5 h-5" /> +91 7075 232499
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default InvisibleGrillsBalcony;
