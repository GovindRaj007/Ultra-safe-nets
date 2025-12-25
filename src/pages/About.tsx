import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Award, Users, Target, CheckCircle } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every product and installation prioritizes the safety of your loved ones.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We use only premium marine-grade materials that last for years.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We ensure flawless service every time.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Constantly improving our solutions with modern technology and designs.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Ultra Safe Grills & Nets - Leading Safety Solutions Provider</title>
        <meta
          name="description"
          content="Learn about Ultra Safe Grills & Nets - India's trusted invisible grill and safety net specialists. 10+ years experience, 5000+ projects completed across Telangana and Andhra Pradesh."
        />
        <link rel="canonical" href="https://ultrasafegrills.com/about" />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-navy text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={heroBuilding} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                India's Trusted Safety Solutions Provider
              </h1>
              <p className="text-lg text-primary-foreground/80">
                With over 10 years of experience and 5000+ successful installations, we've become the 
                preferred choice for families and businesses seeking modern, elegant safety solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding section-gradient-1">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-primary-foreground/70">
                  <p>
                    Ultra Safe Grills & Nets was founded with a simple mission: to provide modern, 
                    aesthetically pleasing safety solutions that protect families without compromising 
                    the beauty of their homes.
                  </p>
                  <p>
                    What started as a small operation in Hyderabad has grown into a trusted brand 
                    serving customers across Telangana and Andhra Pradesh. Our commitment to quality, 
                    innovation, and customer satisfaction has earned us the trust of thousands of 
                    homeowners, builders, and corporate clients.
                  </p>
                  <p>
                    Today, we offer a comprehensive range of safety products including invisible grills, 
                    safety nets, ceiling cloth hangers, and pigeon nets – all designed to blend seamlessly 
                    with modern architecture while providing uncompromising protection.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "5000+", label: "Projects Done" },
                  { value: "5", label: "Cities Served" },
                  { value: "98%", label: "Happy Customers" },
                ].map((stat, index) => (
                  <div key={stat.label} className="bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20 border border-white/10 p-6 text-center rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-bold text-sky-light mb-2">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding section-gradient-2">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                These principles guide everything we do, from product selection to installation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20 border border-white/10 p-6 text-center rounded-2xl card-hover backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-sky-light" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding section-gradient-4">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Why Customers Trust Us
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Proven track record of timely project completion",
                "High-grade materials and expert engineering",
                "Custom designs suited to every architectural style",
                "Commitment to safety, innovation, and lasting quality",
                "Free site visit and consultation",
                "Warranty on all products and installation",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-primary/20 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
