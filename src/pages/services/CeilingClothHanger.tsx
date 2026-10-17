import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import serviceHanger from "@/assets/service-hanger.jpg";
import serviceHanger2 from "@/assets/service-hanger2.jpg";
import serviceHanger3 from "@/assets/service-hanger3.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "Ceiling/Wall-mounted space-saving design",
  "Pulley system for easy operation",
  "Rust-proof stainless steel construction",
  "Manual and automatic options available",
  "Can hold up to 25kg of laundry",
  "Wall mount option where ceiling mounting isn't practical",
  "Easy installation by professionals",
  "3-year warranty included",
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
    question: "Do you also install wall mount cloth hangers?",
    answer: "Yes. Where a balcony or utility area has no suitable ceiling, or you'd rather not mount on the ceiling, we install wall mount cloth hangers fixed to the wall. Our technician checks your space during the site visit and recommends the right option — ceiling or wall mount."
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
        <title>Ceiling & Wall Mount Cloth Hanger Installation | Space-Saving Drying Solution | Urban Invisible Grills</title>
        <meta
          name="description"
          content="Ceiling and wall mount cloth hanger installation across Andhra Pradesh — Vijayawada, Guntur, Visakhapatnam, Rajahmundry, Tirupati and Ongole. Space-saving pulley system, rust-proof stainless steel. ₹500 OFF. Call +91 7075 232499."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://urbansafetygrills.in/services/ceiling-cloth-hanger" />
        <meta property="og:title" content="Ceiling & Wall Mount Cloth Hangers | Space-Saving Laundry Solution" />
        <meta property="og:description" content="Ceiling-mounted pulley cloth hangers and wall mount cloth hangers. Stainless steel, rust-proof, space-saving solution for modern apartments across Andhra Pradesh." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urbansafetygrills.in/services/ceiling-cloth-hanger" />
        <meta property="og:image" content="https://urbansafetygrills.in/favicon.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ceiling & Wall Mount Cloth Hangers | Space-Saving Solution" />
        <meta name="twitter:description" content="Space-saving ceiling pulley cloth hangers and wall mount cloth hangers. Stainless steel and rust-proof." />
        <meta name="twitter:image" content="https://urbansafetygrills.in/favicon.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ceiling & Wall Mount Cloth Hanger Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Urban Invisible Grills",
              "telephone": "+91-7075232499",
              "email": "urbaninvisiblegrills.ap@gmail.com"
            },
            "description": "Space-saving ceiling-mounted clothes drying hangers with pulley system, and wall mount cloth hangers",
            "areaServed": ["Andhra Pradesh", "Visakhapatnam", "Rajahmundry", "Vijayawada", "Guntur", "Tirupati", "Ongole"]
          })}
        </script>
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
                <Link to="/#services" className="hover:text-primary-foreground">Services</Link>
                <span>/</span>
                <span className="text-primary-foreground">Ceiling Cloth Hanger</span>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                ₹500 OFF
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ceiling & Wall Mount Cloth Hangers</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Smart, space-saving clothes drying hangers — ceiling-mounted with a pulley system, or wall mount where ceiling mounting isn't practical. Perfect for modern apartments with limited balcony space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-hero">Get Free Quote</Link>
                <a
                  href="tel:+917075232499"
                  data-track="true"
                  data-track-type="call"
                  data-track-url="tel:+917075232499"
                  className="btn-hero-outline"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding section-gradient-1">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-3xl font-bold text-white mb-6">About Ceiling & Wall Mount Cloth Hangers</h2>
                <p className="text-white/70 mb-4">
                  The ceiling cloth hanger is a space-saving, stylish, and practical solution for drying clothes indoors.
                  Crafted with durable stainless steel and a sleek design, it fits perfectly in any modern home or apartment.
                </p>
                <p className="text-white/70 mb-4">
                  The pulley system allows easy lowering and lifting, making it convenient for all ages. Whether it's rainy
                  days or limited balcony space, our ceiling hangers ensure quick, efficient drying while keeping your laundry organized.
                </p>
                <p className="text-white/70 mb-4">
                  Not every balcony has a ceiling that suits mounting. For those spaces we install wall mount cloth hangers,
                  fixed to the balcony or utility wall, so you still get an organized drying area without using floor space.
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
          subtitle="Everything you need to know about our ceiling and wall mount cloth hanger installation."
        />

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Get Your Cloth Hanger Installed</h2>
            <p className="text-primary-foreground/80 mb-8">Upgrade your drying experience today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917075232499?text=Hi%2C%20I%27m%20interested%20in%20a%20ceiling%20%2F%20wall%20mount%20cloth%20hanger.%20Please%20share%20a%20free%20quote."
                data-track="true"
                data-track-type="whatsapp"
                data-track-url="https://wa.me/917075232499"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero bg-background text-foreground"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+917075232499"
                data-track="true"
                data-track-type="call"
                data-track-url="tel:+917075232499"
                className="btn-hero-outline border-primary-foreground/30"
              >
                <Phone className="w-5 h-5" /> +91 7075 232499
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CeilingClothHanger;
