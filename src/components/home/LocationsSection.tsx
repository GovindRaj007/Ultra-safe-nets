import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Hyderabad",
    description: "Serving Madhapur, Gachibowli, Jubilee Hills, Banjara Hills, Kondapur & all areas",
    path: "/locations/hyderabad",
  },
  {
    name: "Visakhapatnam",
    description: "Complete coverage across Vizag including Beach Road, MVP Colony & surrounding areas",
    path: "/locations/vizag",
  },
  {
    name: "Warangal",
    description: "Professional installation services throughout Warangal city and suburbs",
    path: "/locations/warangal",
  },
  {
    name: "Chittoor",
    description: "Expert safety solutions for residential and commercial properties in Chittoor",
    path: "/locations/chittoor",
  },
  {
    name: "Rajahmundry",
    description: "Trusted invisible grill and safety net installation across Rajahmundry",
    path: "/locations/rajahmundry",
  },
];

const LocationsSection = () => {
  return (
    <section className="section-padding section-gradient-5 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-sky-light rounded-full text-sm font-medium mb-4">
            Service Areas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted Across Telangana & Andhra Pradesh
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            With a strong presence in major cities, we've become the preferred choice for families seeking modern, elegant safety solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={location.path}
                className="group block dark-location-card p-6 rounded-2xl shadow-lg card-hover h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-sky/30 flex items-center justify-center group-hover:from-primary group-hover:to-sky transition-all duration-300 shadow-md">
                    <MapPin className="w-6 h-6 text-sky-light group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2 group-hover:text-sky-light transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/70 mb-4">
                      {location.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sky-light font-medium text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
