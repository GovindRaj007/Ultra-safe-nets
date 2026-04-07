import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import serviceWindowGrills from "@/assets/service-window-grills.jpg";
import serviceWindowGrills2 from "@/assets/service-window-grills-2.jpg";
import serviceWindowGrills3 from "@/assets/service-window-grills-3.jpg";
import FAQSection from "@/components/ui/FAQSection";
import ServiceImageSlider from "@/components/ui/ServiceImageSlider";

const features = [
  "Precision-engineered SS316 marine-grade cables for windows",
  "Child-safe design prevents accidental falls from windows",
  "Maintains 100% natural light and ventilation",
  "Invisible from inside and outside - pure aesthetics",
  "Prevents break-in attempts and unauthorized entry",
  "Works on windows of all sizes and types",
  "10-year warranty with lifetime corrosion protection",
  "Professional installation with precision measurements",
];

const security = [
  "Prevent child falls from high-floor windows",
  "Enhanced security against intrusion attempts",
  "Keep elderly family members safe",
  "Pet safety - prevents accidental window falls",
  "Maintain full emergency escape routes",
  "Insurance-approved safety solution",
];

const windowGrillsFAQs = [
  {
    question: "Are invisible grills suitable for all window types?",
    answer: "Yes! Our invisible grills work on aluminum frames, wooden frames, UPVC windows, steel frames, and more. We can install on any window from ground floor to high-rise apartments. Our team will assess your window type and provide a customized solution."
  },
  {
    question: "Will the grills affect my window's opening and closing?",
    answer: "Not at all! The grills are installed on the window frame perimeter, so they don't interfere with window operation. You can open and close windows freely, and the cables adjust seamlessly with the movement."
  },
  {
    question: "Can I still clean my windows easily?",
    answer: "Absolutely! The thin cable design doesn't obstruct window cleaning. You can clean both inside and outside surfaces without any difficulty. The cables are positioned to allow complete access to window panes."
  },
  {
    question: "How do invisible grills improve home security?",
    answer: "Each cable can withstand 250 kg of force, making forced entry extremely difficult. The systematic cable pattern creates a barrier that prevents intrusion while the invisibility means potential intruders can't easily assess the security measures from outside."
  },
  {
    question: "Are window invisible grills weather-resistant?",
    answer: "Yes! SS316 marine-grade stainless steel is designed for extreme weather conditions. Whether it's intense heat, cold, humidity, or heavy monsoons across Andhra Pradesh, the cables maintain their integrity without rust or degradation."
  },
  {
    question: "What maintenance do window grills require?",
    answer: "Minimal maintenance! Occasional cleaning with water and mild soap keeps them looking pristine. No repainting, no special treatments needed. The material is self-maintaining and designed to last 15-20 years."
  }
];

const windowImages = [
  { src: serviceWindowGrills, alt: "Window Invisible Grills" },
  { src: serviceWindowGrills2, alt: "Secure Window Protection" },
  { src: serviceWindowGrills3, alt: "Elegant Window Design" },
];

const InvisibleGrillsWindows = () => {
  return (
    <>
      <Helmet>
        <title>Window Invisible Grills | Child-Safe Window Protection | Urban Invisible Grills</title>
        <meta
          name="description"
          content="Premium invisible grills for windows across Andhra Pradesh. Child-safe, secure, and invisible. SS316 stainless steel, maintains view and light. Free consultation available!"
        />
        <meta
          name="keywords"
          content="window invisible grills, child-safe window grills, window safety grills, stainless steel window grills, Andhra Pradesh"
        />
        <link rel="canonical" href="https://urbanigrills.com/services/invisible-grills-windows" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Invisible Grills for Windows",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Urban Invisible Grills"
            },
            "description": "Premium invisible grills installation for windows across Andhra Pradesh",
            "areaServed": ["Andhra Pradesh", "Visakhapatnam", "Rajahmundry", "Vijayawada", "Guntur", "Tirupati", "Ongole"]
          })}
        </script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={serviceWindowGrills} 
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
                <span className="text-primary-foreground">Window Invisible Grills</span>
              </nav>
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-4">
                Child-Safe Window Security
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Invisible Grills for Windows
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Secure your windows without compromising on aesthetics. Our invisible grills provide 
                child safety, home security, and complete visibility - all virtually undetectable.
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
                  Invisible. Secure. Always Protecting.
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-white/70 mb-4">
                    Windows are your connection to the outside world - but they also need security. Traditional 
                    window grills are heavy, ugly, and block light. Invisible grills for windows solve this problem 
                    with elegance and strength.
                  </p>
                  <p className="text-white/70 mb-4">
                    Our SS316 marine-grade stainless steel cables are virtually invisible from both inside and 
                    outside your home. They maintain 100% natural light, allow unrestricted ventilation, and 
                    keep your family completely safe.
                  </p>
                  <p className="text-white/70">
                    Whether you're concerned about child safety, home security, or elderly family protection, 
                    our window grills provide comprehensive security without any visual compromise. Each cable 
                    withstands 250 kg of force - strong enough to prevent falls and intrusion attempts.
                  </p>
                </div>
                
                <div className="mt-8">
                  <ServiceImageSlider images={windowImages} />
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
                  Security & Safety Benefits
                </h3>
                <div className="space-y-2">
                  {security.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <ArrowRight className="w-4 h-4 text-sky-light flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection 
          faqs={windowGrillsFAQs}
          subtitle="Everything you need to know about our window invisible grills installation."
        />

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Protect Your Windows Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free site assessment and detailed quote. Our experts will design the perfect 
              invisible grill solution for your windows. Coverage across all of Andhra Pradesh!
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

export default InvisibleGrillsWindows;
