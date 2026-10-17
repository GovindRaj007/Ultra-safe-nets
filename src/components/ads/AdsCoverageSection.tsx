import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Building2, PanelsTopLeft, Navigation } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AdsCoverageCard {
  icon: LucideIcon;
  title: string;
  copy: string;
  to: string;
}

export interface AdsAreaGroup {
  title: string;
  areas: string[];
}

export interface AdsCoverageSectionProps {
  /** Display label for the target, e.g. "Vijayawada & Guntur" or "Visakhapatnam" */
  cityLabel: string;
  /** Primary city used inside sentences, e.g. "Vijayawada" */
  primaryCity: string;
  /** Service named in the headings, e.g. "Invisible Grills" or "Ceiling Cloth Hangers" */
  serviceName?: string;
  /** On-page copy carrying the ad keywords */
  intro: string;
  /** Keyword-aligned service cards; defaults to the invisible grills set */
  cards?: AdsCoverageCard[];
  /** Flat list of localities, used when `areaGroups` is not given */
  areas?: string[];
  /** Localities grouped by region, for pages that target several cities */
  areaGroups?: AdsAreaGroup[];
  /** Nearby towns also served, shown as a single sentence */
  surroundingAreas: string[];
}

const invisibleGrillsCards = (city: string): AdsCoverageCard[] => [
  {
    icon: Building2,
    title: `Invisible Grills for Balcony in ${city}`,
    copy: "Apartment and villa balconies secured with SS316 cables — the view stays exactly as it is.",
    to: "/services/invisible-grills-balcony",
  },
  {
    icon: PanelsTopLeft,
    title: `Invisible Grills for Windows in ${city}`,
    copy: "Child-safe window grills that keep full daylight and cross-ventilation intact.",
    to: "/services/invisible-grills-windows",
  },
  {
    icon: Navigation,
    title: `Invisible Grills Near Me in ${city}`,
    copy: "Local installation teams, same-day site measurement and a fixed written quote.",
    to: "/services/invisible-grills",
  },
];

const AreaChips = ({ areas }: { areas: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {areas.map((area) => (
      <li
        key={area}
        className="ads-chip rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-primary-foreground/85"
      >
        {area}
      </li>
    ))}
  </ul>
);

const AdsCoverageSection = ({
  cityLabel,
  primaryCity,
  serviceName = "Invisible Grills",
  intro,
  cards,
  areas = [],
  areaGroups,
  surroundingAreas,
}: AdsCoverageSectionProps) => {
  const serviceCards = cards ?? invisibleGrillsCards(primaryCity);

  return (
    <section className="section-padding ads-coverage-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 ads-chip-accent rounded-full text-sm font-semibold text-sky-light mb-4">
            <MapPin className="w-4 h-4" />
            Local Coverage
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {serviceName} in {cityLabel} — Every Locality Covered
          </h2>
          <p className="text-primary-foreground/75 leading-relaxed">{intro}</p>
        </motion.div>

        {/* Keyword-aligned service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  to={card.to}
                  className="group ads-panel rounded-2xl p-5 h-full flex flex-col card-hover"
                >
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </span>
                  <h3 className="font-heading font-bold text-base text-primary-foreground mb-2 group-hover:text-sky-light transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 flex-grow">{card.copy}</p>
                  <span className="inline-flex items-center gap-2 text-sky-light font-medium text-sm mt-4">
                    View details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Locality chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="font-heading text-lg font-bold text-primary-foreground mb-4">
            Areas we install {serviceName.toLowerCase()} in {cityLabel}
          </h3>

          {areaGroups ? (
            <div className="grid md:grid-cols-3 gap-6">
              {areaGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-sky-light mb-3">
                    <MapPin className="w-4 h-4" />
                    {group.title}
                  </h4>
                  <AreaChips areas={group.areas} />
                </div>
              ))}
            </div>
          ) : (
            <AreaChips areas={areas} />
          )}

          <p className="text-sm text-primary-foreground/70 mt-5 max-w-3xl">
            We also serve all surrounding areas of {primaryCity} — including{" "}
            {surroundingAreas.join(", ")} — with the same materials, pricing and warranty.
            Not sure whether we cover your locality? Call{" "}
            <a
              href="tel:+917075232499"
              data-track="true"
              data-track-type="call"
              data-track-url="tel:+917075232499"
              className="text-sky-light font-semibold hover:underline"
            >
              +91 7075 232499
            </a>{" "}
            and we will confirm in a minute.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdsCoverageSection;
