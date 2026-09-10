import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import AdsHeroSlider, { AdsHeroSlide } from "@/components/ads/AdsHeroSlider";
import AdsCoverageSection from "@/components/ads/AdsCoverageSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationsSection from "@/components/home/LocationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/ui/FAQSection";
import { useNoIndexPage } from "@/hooks/useNoIndexPage";

const SITE_URL = "https://urbansafetygrills.in";
const PHONE = "+91-7075232499";
const EMAIL = "urbaninvisiblegrills.ap@gmail.com";

export interface AdsLandingPageConfig {
  /** URL path without a leading slash, e.g. "invisible-grills-vijayawada-guntur" */
  slug: string;
  /** Display label for the target, e.g. "Vijayawada & Guntur" */
  cityLabel: string;
  /** Primary city used inside sentences, e.g. "Vijayawada" */
  primaryCity: string;
  /** Every city this page is targeted at (used for schema areaServed) */
  targetCities: string[];
  /** Latitude / longitude of the primary city, for local schema */
  geo: { latitude: number; longitude: number };

  /* ---- SEO ---- */
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;

  /* ---- Hero ---- */
  badge: string;
  h1Lead: string;
  h1Highlight: string;
  subline: string;
  slides: AdsHeroSlide[];
  trustPoints: string[];
  whatsappText: string;

  /* ---- Local relevance ---- */
  coverageIntro: string;
  areas: string[];
  surroundingAreas: string[];
  faqs: { question: string; answer: string }[];
}

const AdsLandingPage = ({ config }: { config: AdsLandingPageConfig }) => {
  const pageUrl = `${SITE_URL}/${config.slug}`;

  // Remove index.html's hardcoded "index, follow" robots tags and its homepage
  // canonical for as long as this ads-only route is mounted.
  useNoIndexPage();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${pageUrl}#business`,
        name: `Urban Invisible Grills - ${config.cityLabel}`,
        description: config.metaDescription,
        url: pageUrl,
        telephone: PHONE,
        email: EMAIL,
        priceRange: "$$",
        image: `${SITE_URL}/favicon.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "61-19-21/6, A Challa Rao St, Ramalingeswara Nagar",
          addressLocality: "Vijayawada",
          postalCode: "520013",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: config.geo.latitude,
          longitude: config.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: config.targetCities.map((city) => ({
          "@type": "City",
          name: city,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        serviceType: "Invisible Grills Installation",
        name: `Invisible Grills in ${config.cityLabel}`,
        description: config.coverageIntro,
        provider: { "@id": `${pageUrl}#business` },
        areaServed: config.targetCities.map((city) => ({
          "@type": "City",
          name: city,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Invisible Grills Services in ${config.cityLabel}`,
          itemListElement: [
            `Balcony Invisible Grills in ${config.primaryCity}`,
            `Window Invisible Grills in ${config.primaryCity}`,
            `Invisible Grills for Apartments in ${config.primaryCity}`,
            `Ceiling Cloth Hanger in ${config.primaryCity}`,
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      // No FAQPage / BreadcrumbList here: those exist only to earn search
      // result features, which a noindex page can never show. LocalBusiness and
      // Service are kept because they describe the advertiser and the offer,
      // which supports Google Ads business-identity and landing page checks.
    ],
  };

  return (
    <>
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <meta name="keywords" content={config.metaKeywords} />
        {/*
          Ads-only destination: kept out of the search index, but fully
          crawlable so AdsBot can score it. "follow" preserves link equity to
          the real site pages linked from the sections below.
          No canonical tag — a canonical asks to index a version of this URL,
          which contradicts noindex.
        */}
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        {/* Preload the first hero slide — it is the LCP element on this page */}
        <link rel="preload" as="image" href={config.slides[0].image} fetchPriority="high" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content={config.targetCities.join(", ")} />
        <meta
          name="geo.position"
          content={`${config.geo.latitude};${config.geo.longitude}`}
        />
        <meta name="ICBM" content={`${config.geo.latitude}, ${config.geo.longitude}`} />

        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Urban Invisible Grills" />
        <meta property="og:image" content={`${SITE_URL}/favicon.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.metaTitle} />
        <meta name="twitter:description" content={config.metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/favicon.jpg`} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Layout>
        <AdsHeroSlider
          badge={config.badge}
          h1Lead={config.h1Lead}
          h1Highlight={config.h1Highlight}
          subline={config.subline}
          slides={config.slides}
          trustPoints={config.trustPoints}
          whatsappText={config.whatsappText}
        />
        <AdsCoverageSection
          cityLabel={config.cityLabel}
          primaryCity={config.primaryCity}
          intro={config.coverageIntro}
          areas={config.areas}
          surroundingAreas={config.surroundingAreas}
        />
        <IntroSection />
        <ServicesSection />
        <WhyChooseUs />
        <LocationsSection />
        <TestimonialsSection />
        <FAQSection
          title={`Invisible Grills in ${config.cityLabel} — FAQs`}
          subtitle={`Common questions from customers booking invisible grills in ${config.primaryCity} and nearby areas.`}
          faqs={config.faqs}
        />
        <CTASection />
      </Layout>
    </>
  );
};

export default AdsLandingPage;
