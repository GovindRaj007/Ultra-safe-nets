import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationsSection from "@/components/home/LocationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ultra Safe Grills & Nets | Invisible Grills & Safety Nets in Hyderabad</title>
        <meta
          name="description"
          content="India's premium invisible grill and safety net specialists. Get child-safe, rust-proof stainless steel invisible grills installed in Hyderabad, Vizag, Warangal, Chittoor & Rajahmundry."
        />
        <meta
          name="keywords"
          content="invisible grills, safety nets, balcony safety, child safety nets, pigeon nets, ceiling cloth hanger, Hyderabad, Vizag, Warangal, stainless steel grills"
        />
        <link rel="canonical" href="https://ultrasafegrills.com" />
        <meta property="og:title" content="Ultra Safe Grills & Nets | Premium Safety Solutions" />
        <meta property="og:description" content="India's premium invisible grill and safety net specialists. Protect your home with style." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ultrasafegrills.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ultra Safe Grills & Nets",
            "description": "Premium invisible grills and safety nets installation services",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Door No 5-11, Madhapur",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500081",
              "addressCountry": "IN"
            },
            "telephone": "+91-9788318444",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-19:00",
            "areaServed": ["Hyderabad", "Visakhapatnam", "Warangal", "Chittoor", "Rajahmundry"]
          })}
        </script>
      </Helmet>
      
      <Layout>
        <HeroSlider />
        <IntroSection />
        <ServicesSection />
        <WhyChooseUs />
        <LocationsSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
