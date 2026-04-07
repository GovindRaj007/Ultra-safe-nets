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
        <title>Urban Invisible Grills | Premium Invisible Grills Across Andhra Pradesh</title>
        <meta
          name="description"
          content="India's premium invisible grill specialists. Get child-safe, rust-proof stainless steel invisible grills installed across Andhra Pradesh. Free consultation!"
        />
        <meta
          name="keywords"
          content="invisible grills, balcony safety, child safety, ceiling cloth hanger, Andhra Pradesh, Visakhapatnam, Rajahmundry, Vijayawada, Guntur, Tirupati, Ongole, stainless steel grills"
        />
        <link rel="canonical" href="https://urbanigrills.com" />
        <meta property="og:title" content="Urban Invisible Grills | Premium Safety Solutions" />
        <meta property="og:description" content="India's premium invisible grill specialists. Protect your home with style and security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urbanigrills.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Urban Invisible Grills",
            "description": "Premium invisible grills and complete home safety solutions across Andhra Pradesh",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Address",
              "addressLocality": "Address",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "IN"
            },
            "telephone": "+91-7075232499",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-19:00",
            "areaServed": ["Andhra Pradesh", "Visakhapatnam", "Rajahmundry", "Vijayawada", "Guntur", "Tirupati", "Ongole"]
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
