import AdsLandingPage, { AdsLandingPageConfig } from "@/components/ads/AdsLandingPage";
import serviceInvisibleGrill from "@/assets/service-invisible-grill.jpg";
import serviceBalconyGrills3 from "@/assets/service-balcony-grills-3.jpg";
import serviceWindowGrills2 from "@/assets/service-window-grills-2.jpg";

const config: AdsLandingPageConfig = {
  slug: "invisible-grills-rajahmundry",
  cityLabel: "Rajahmundry",
  primaryCity: "Rajahmundry",
  targetCities: ["Rajahmundry", "Rajanagaram", "Kadiyam", "Dowleswaram", "Kovvur"],
  geo: { latitude: 17.0005, longitude: 81.804 },

  metaTitle:
    "Invisible Grills in Rajahmundry | Balcony & Window Invisible Grills Near You",
  metaDescription:
    "Searching for invisible grills in Rajahmundry? Urban Invisible Grills installs child-safe SS316 invisible grills for balconies and windows across Rajahmundry and all surrounding areas. Free site visit and fixed quote — call +91 7075 232499.",
  metaKeywords:
    "invisible grills in Rajahmundry, invisible grills near me, invisible grills for balcony in Rajahmundry, balcony invisible grills Rajahmundry, window invisible grills Rajahmundry, invisible grill installation Rajahmundry, invisible grills price Rajahmundry, SS316 invisible grills Rajahmundry, child safety grills Rajahmundry, apartment balcony safety grills Rajahmundry, invisible grills Kovvur, invisible grills Dowleswaram",

  badge: "Rajahmundry • Kovvur • All Surrounding Areas",
  h1Lead: "Invisible Grills in",
  h1Highlight: "Rajahmundry",
  subline:
    "Child-safe, rust-proof SS316 invisible grills for balconies and windows — installed across Rajahmundry and every surrounding area. Free site measurement, fixed written quote, 1-day installation.",
  trustPoints: [
    "4.9/5 from local customers",
    "Marine-grade SS316 cable",
    "10-year warranty",
  ],
  whatsappText:
    "Hi%2C%20I%20need%20a%20quote%20for%20invisible%20grills%20in%20Rajahmundry.%20Please%20arrange%20a%20free%20site%20visit.",

  slides: [
    {
      image: serviceInvisibleGrill,
      imageAlt:
        "Invisible grills installed on a Rajahmundry apartment balcony with a clear river-side view",
      eyebrow: "Invisible Grills in Rajahmundry",
      headline: "Riverside views kept clear, your balcony fully secured",
      highlights: [
        "SS316 marine-grade cable",
        "Zero view obstruction",
        "Child & pet safe",
        "Free site measurement",
      ],
    },
    {
      image: serviceBalconyGrills3,
      imageAlt:
        "Invisible grills for balcony in Rajahmundry fitted on a residential apartment railing",
      eyebrow: "Balcony Invisible Grills",
      headline: "Rajahmundry flats & independent houses fitted in a day",
      highlights: [
        "1-day installation",
        "Fixed written quote",
        "Flats & villas ready",
        "No damage to tiles",
      ],
    },
    {
      image: serviceWindowGrills2,
      imageAlt:
        "Window invisible grills in Rajahmundry keeping daylight and ventilation while securing children",
      eyebrow: "Invisible Grills Near Me",
      headline: "Covering Kovvur, Kadiyam, Dowleswaram & nearby towns",
      highlights: [
        "Local installation teams",
        "10-year warranty",
        "Rust-proof & weather-proof",
        "Same-day quote on call",
      ],
    },
  ],

  coverageIntro:
    "Urban Invisible Grills is the specialist team for invisible grills in Rajahmundry. We fit high-tensile SS316 stainless steel invisible grills on balconies, windows, staircases and open terraces — the cables are barely visible, so daylight, ventilation and your Godavari view stay exactly as they are, while children and pets stay completely secure. Every job in Rajahmundry starts with a free on-site measurement, a fixed written quote and installation that is usually finished within a day.",

  areas: [
    "Danavaipeta",
    "Morampudi",
    "Gandhipuram",
    "Aryapuram",
    "Kambala Cheruvu",
    "Prakash Nagar",
    "Sitampeta",
    "Bommuru",
    "Lalacheruvu",
    "Hukumpeta",
    "Vemagiri",
    "Diwancheruvu",
    "Katheru",
    "Konthamuru",
  ],
  surroundingAreas: [
    "Kovvur",
    "Dowleswaram",
    "Kadiyam",
    "Rajanagaram",
    "Nidadavolu",
    "Anaparthi",
    "Korukonda",
    "Seethanagaram",
  ],

  faqs: [
    {
      question: "How much do invisible grills cost in Rajahmundry?",
      answer:
        "Pricing for invisible grills in Rajahmundry depends on the running area, cable spacing (2 inch, 3 inch or 4 inch) and the grade of stainless steel used. We share a fixed written quote after a free site measurement — no hidden charges. Call +91 7075 232499 for an indicative rate over the phone.",
    },
    {
      question: "Do you install invisible grills for balcony in Rajahmundry apartments?",
      answer:
        "Yes. Balcony invisible grills are our most requested service in Rajahmundry. We install on apartment balconies, duplex terraces and independent house railings using SS316 marine-grade cable with aluminium track, without damaging your tiles or railing finish.",
    },
    {
      question: "Are invisible grills safe for children and pets?",
      answer:
        "Yes. The cables are high-tensile stainless steel spaced close enough that a child or pet cannot pass through, and the system is tested to withstand strong horizontal load. It is the safest option for high-rise balconies in Rajahmundry.",
    },
    {
      question: "Do you serve areas around Rajahmundry such as Kovvur and Kadiyam?",
      answer:
        "Yes. Along with Rajahmundry city we regularly install invisible grills in Kovvur, Dowleswaram, Kadiyam, Rajanagaram, Nidadavolu and all surrounding areas, at the same pricing and warranty.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most balconies and windows in Rajahmundry are completed within a single day. Larger houses or multiple balconies may take two days. We confirm the schedule when we give the quote.",
    },
    {
      question: "Will invisible grills rust in Rajahmundry's humid weather?",
      answer:
        "No. We use SS316 marine-grade cable and rust-proof aluminium track, which is specifically chosen for the humid Godavari-belt climate. The system is covered by a 10-year warranty.",
    },
  ],
};

const InvisibleGrillsRajahmundry = () => <AdsLandingPage config={config} />;

export default InvisibleGrillsRajahmundry;
