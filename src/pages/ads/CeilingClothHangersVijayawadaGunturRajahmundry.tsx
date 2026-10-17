import { ArrowUpDown, Shirt, ShieldCheck } from "lucide-react";
import AdsLandingPage, { AdsLandingPageConfig } from "@/components/ads/AdsLandingPage";
import serviceHanger from "@/assets/service-hanger.jpg";
import serviceHanger2 from "@/assets/service-hanger2.jpg";
import serviceHanger3 from "@/assets/service-hanger3.jpg";
import serviceBalconyGrills3 from "@/assets/service-balcony-grills-3.jpg";

// Ceiling hanger facts below (25 kg load, 4-8 rods of ~6 ft, manual/motorised,
// ceiling types, 1-2 hour install, 3-year warranty, ₹500 OFF) mirror the claims
// published on /services/ceiling-cloth-hanger. Keep the two pages in sync.
// Wall mount hangers are confirmed as offered, but no specs, warranty or
// pricing have been published for them — don't attach ceiling-hanger facts to
// wall mount copy until the business confirms them.

const config: AdsLandingPageConfig = {
  slug: "ceiling-cloth-hangers-vijayawada-guntur-rajahmundry",
  cityLabel: "Vijayawada, Guntur & Rajahmundry",
  primaryCity: "Vijayawada, Guntur & Rajahmundry",
  targetCities: [
    "Vijayawada",
    "Guntur",
    "Eluru",
    "Tenali",
    "Mangalagiri",
    "Amaravati",
    "Rajahmundry",
  ],
  geo: { latitude: 16.5062, longitude: 80.648 },

  serviceName: "Ceiling Cloth Hangers",
  serviceType: "Ceiling & Wall Mount Cloth Hanger Installation",
  offerItems: [
    "Balcony Ceiling Cloth Hangers",
    "Wall Mount Cloth Hangers",
    "Motorised Ceiling Cloth Hangers",
    "Invisible Grills for Balcony",
  ],

  metaTitle:
    "Balcony Ceiling Cloth Hangers in Vijayawada, Guntur & Rajahmundry | Wall Mount Cloth Hangers",
  metaDescription:
    "Cloth hangers in balcony — ₹500 OFF on ceiling cloth hangers. Pulley-operated balcony ceiling cloth hangers and wall mount cloth hangers installed across Vijayawada, Guntur, Eluru, Tenali, Mangalagiri, Amaravati and Rajahmundry. Free site visit — call +91 7075 232499.",
  metaKeywords:
    "cloth hangers in balcony, balcony ceiling cloth hangers, wall mount cloth hangers, ceiling cloth hanger Vijayawada, ceiling cloth hanger Guntur, ceiling cloth hanger Rajahmundry, wall mount cloth hanger Vijayawada, cloth hanger Eluru, cloth hanger Tenali, cloth hanger Mangalagiri, cloth hanger Amaravati, pulley cloth hanger for balcony, cloth drying hanger for apartments, cloth hangers near me, invisible grills for balcony",

  badge: "Vijayawada • Guntur • Rajahmundry & Nearby Areas",
  offer: { amount: "₹500 OFF", text: "on ceiling cloth hangers" },
  h1Lead: "Balcony Ceiling Cloth Hangers in",
  h1Highlight: "Vijayawada, Guntur & Rajahmundry",
  subline:
    "Pulley-operated ceiling cloth hangers and wall mount cloth hangers that dry a full family wash and keep your balcony floor free. Installed across Vijayawada, Guntur, Eluru, Tenali, Mangalagiri, Amaravati, Rajahmundry and nearby areas.",
  trustPoints: ["Ceiling & wall mount options", "Professional installation"],
  whatsappLabel: "WhatsApp to Claim ₹500 OFF",
  whatsappText:
    "Hi%2C%20I%27d%20like%20to%20claim%20the%20%E2%82%B9500%20OFF%20offer%20on%20a%20balcony%20ceiling%20cloth%20hanger.%20Please%20arrange%20a%20free%20site%20visit.",

  slides: [
    {
      image: serviceHanger3,
      imageAlt:
        "Balcony ceiling cloth hanger with clothes drying overhead on an apartment balcony with a glass railing",
      eyebrow: "Cloth Hangers in Balcony",
      headline: "Dry the whole family wash overhead — keep your balcony floor free",
      highlights: [
        "Holds up to 25 kg",
        "Rust-proof steel rods",
        "Frees up balcony floor",
        "Dries clothes in monsoon",
      ],
    },
    {
      image: serviceHanger,
      imageAlt:
        "Six stainless steel rods of a pulley-operated ceiling cloth hanger mounted on a balcony ceiling",
      eyebrow: "Balcony Ceiling Cloth Hangers",
      headline: "Pull down to load, pull up to dry — smooth pulley operation",
      highlights: [
        "Easy pulley lift & lower",
        "4 to 8 rods, ~6 ft each",
        "Manual or motorised",
        "3-year warranty",
      ],
    },
    {
      image: serviceHanger2,
      imageAlt:
        "Ceiling cloth hanger installed on an apartment balcony, shown in the lowered position",
      eyebrow: "Wall Mount Cloth Hangers",
      headline: "No ceiling to mount on? Wall mount cloth hangers do the job",
      highlights: [
        "Fixed to balcony wall",
        "No ceiling needed",
        "Same expert team",
        "Free site visit",
      ],
    },
  ],

  crossSell: {
    image: serviceBalconyGrills3,
    imageAlt:
      "Invisible grills for balcony installed on a high-rise apartment, keeping the city view clear",
    label: "We also install",
    title: "Invisible Grills for Balcony",
    points: ["Child & pet safe", "SS316 cable", "View stays clear"],
    to: "/services/invisible-grills-balcony",
    ctaLabel: "See balcony invisible grills",
  },

  coverageIntro:
    "Urban Invisible Grills installs ceiling cloth hangers and wall mount cloth hangers for balconies across Vijayawada, Guntur and Rajahmundry. Our pulley-operated ceiling hangers use rust-proof stainless steel rods that lower for loading and lift up out of the way, so wet laundry dries overhead and your balcony floor stays free — ideal for apartments and for drying clothes through the monsoon. Where the ceiling isn't suitable, we fit a wall mount cloth hanger to the balcony or utility wall instead. Ceiling cloth hangers currently come with ₹500 OFF. The same team also installs invisible grills for balconies, so both can be planned in one site visit.",

  coverageCards: [
    {
      icon: ArrowUpDown,
      title: "Balcony Ceiling Cloth Hangers",
      copy: "Pulley-operated rods that lower to load and lift to dry. Manual or motorised, 4 to 8 rods. ₹500 OFF.",
      to: "/services/ceiling-cloth-hanger",
    },
    {
      icon: Shirt,
      title: "Wall Mount Cloth Hangers",
      copy: "Fixed to the balcony or utility wall — the right choice when ceiling mounting isn't practical.",
      to: "/services/ceiling-cloth-hanger",
    },
    {
      icon: ShieldCheck,
      title: "Invisible Grills for Balcony",
      copy: "SS316 cable safety grills that keep children and pets safe without blocking the view.",
      to: "/services/invisible-grills-balcony",
    },
  ],

  areaGroups: [
    {
      title: "Vijayawada & nearby",
      areas: [
        "Benz Circle",
        "Patamata",
        "Labbipet",
        "Gunadala",
        "Bhavanipuram",
        "Poranki",
        "Kanuru",
        "Gollapudi",
        "Gannavaram",
        "Eluru",
      ],
    },
    {
      title: "Guntur & capital region",
      areas: [
        "Brodipet",
        "Arundelpet",
        "Lakshmipuram",
        "Pattabhipuram",
        "Mangalagiri",
        "Tadepalli",
        "Amaravati",
        "Tenali",
      ],
    },
    {
      title: "Rajahmundry & nearby",
      areas: [
        "Danavaipeta",
        "Morampudi",
        "Prakash Nagar",
        "Aryapuram",
        "Bommuru",
        "Kovvur",
        "Dowleswaram",
        "Kadiyam",
        "Rajanagaram",
      ],
    },
  ],
  surroundingAreas: [
    "Nuzvid",
    "Hanuman Junction",
    "Ibrahimpatnam",
    "Chilakaluripet",
    "Nidadavolu",
    "Anaparthi",
  ],

  faqs: [
    {
      question:
        "How much does a balcony ceiling cloth hanger cost in Vijayawada, Guntur and Rajahmundry?",
      answer:
        "The price depends on the number of rods (4 to 8), rod length, and whether you choose a manual pulley or motorised model — and ceiling cloth hangers currently come with ₹500 OFF. We give a fixed quote after a free site visit, with no hidden charges. Call +91 7075 232499 for an indicative price over the phone.",
    },
    {
      question: "Do you install wall mount cloth hangers?",
      answer:
        "Yes. Along with ceiling cloth hangers, we install wall mount cloth hangers fixed to the balcony or utility wall. They are the right choice when your balcony has no suitable ceiling, or when you'd rather not mount on the ceiling. Our technician checks your space during the free site visit and recommends ceiling or wall mount.",
    },
    {
      question: "How much weight can a ceiling cloth hanger hold?",
      answer:
        "Our standard ceiling cloth hangers hold up to 25 kg of wet laundry, and the heavy-duty models support up to 35 kg — enough for a full family wash including bedsheets and towels.",
    },
    {
      question: "Can a ceiling cloth hanger be installed on any ceiling type?",
      answer:
        "Yes. We install ceiling cloth hangers on concrete, POP, wooden and false ceilings, using mounting hardware suited to each. Most installations take 1–2 hours.",
    },
    {
      question: "Do you install cloth hangers in Eluru, Tenali, Mangalagiri and Amaravati?",
      answer:
        "Yes. Along with Vijayawada, Guntur and Rajahmundry, we install ceiling and wall mount cloth hangers in Eluru, Tenali, Mangalagiri, Amaravati, Tadepalli, Kovvur, Dowleswaram, Kadiyam and the surrounding areas.",
    },
    {
      question: "Will a ceiling cloth hanger rust in humid or rainy weather?",
      answer:
        "No. The rods are rust-proof stainless steel, suited to humid Andhra Pradesh weather and covered balconies used for monsoon drying. Ceiling cloth hangers include a 3-year warranty.",
    },
    {
      question: "Can you install invisible grills on the same balcony?",
      answer:
        "Yes. We also install invisible grills for balconies — SS316 stainless steel cables that keep children and pets safe without blocking your view. We can measure for both the cloth hanger and invisible grills in the same site visit.",
    },
  ],
};

const CeilingClothHangersVijayawadaGunturRajahmundry = () => <AdsLandingPage config={config} />;

export default CeilingClothHangersVijayawadaGunturRajahmundry;
