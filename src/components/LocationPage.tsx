import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";

interface LocationPageProps {
  city: string;
  state: string;
  description: string;
  areas: string[];
  slug: string;
  backgroundImage: string;
}

const LocationPage = ({ city, state, description, areas, slug, backgroundImage }: LocationPageProps) => {
  const services = [
    { name: "Invisible Grills", path: "/services/invisible-grills" },
    { name: "Safety Nets", path: "/services/safety-nets" },
    { name: "Ceiling Cloth Hanger", path: "/services/ceiling-cloth-hanger" },
    { name: "Pigeon Nets", path: "/services/pigeon-nets" },
  ];

  return (
    <>
      <Helmet>
        <title>Invisible Grills & Safety Nets in {city} | Ultra Safe Grills</title>
        <meta
          name="description"
          content={`Premium invisible grills and safety nets installation in ${city}, ${state}. Child-safe, rust-proof SS316 stainless steel grills. Call +91 97883 18444 for free quote.`}
        />
        <meta
          name="keywords"
          content={`invisible grills ${city}, safety nets ${city}, balcony safety ${city}, child safety grills ${city}, pigeon nets ${city}`}
        />
        <link rel="canonical" href={`https://ultrasafegrills.com/locations/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Ultra Safe Grills & Nets - ${city}`,
            "description": `Premium invisible grills and safety nets installation in ${city}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city,
              "addressRegion": state,
              "addressCountry": "IN"
            },
            "telephone": "+91-9788318444",
            "areaServed": city
          })}
        </script>
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="relative pt-12 pb-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={backgroundImage} 
              alt={`${city} cityscape`} 
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
                <span className="text-primary-foreground">{city}</span>
              </nav>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-sky-light" />
                <span className="text-sky-light font-medium">{state}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Invisible Grills & Safety Nets in {city}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-hero">Get Free Quote</Link>
                <a href="tel:+919788318444" className="btn-hero-outline">
                  <Phone className="w-5 h-5" /> +91 97883 18444
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services in Location */}
        <section className="section-padding section-gradient-1">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services in {city}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We offer comprehensive safety solutions for homes and businesses across {city}. 
                All our services come with professional installation and warranty.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center h-full"
                  >
                    <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-sky-light transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-sm text-sky-light">in {city}</span>
                    <div className="mt-4">
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

        {/* Areas Covered */}
        <section className="section-padding section-gradient-2">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                Areas We Serve in {city}
              </h2>
              <p className="text-white/70">
                We provide installation services across all major areas in {city}.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-white">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding section-gradient-4">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Why Choose Us in {city}?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {[
                  { title: "Local Expertise", desc: `Years of experience serving ${city} customers` },
                  { title: "Quick Service", desc: "Same-day site visits and fast installation" },
                  { title: "Competitive Pricing", desc: "Best rates for premium quality products" },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Secure Your {city} Home?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our {city} team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-hero bg-background text-foreground">
                Get Free Quote
              </Link>
              <a href="tel:+919788318444" className="btn-hero-outline border-primary-foreground/30">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default LocationPage;