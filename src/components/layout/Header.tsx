import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, ChevronDown, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Invisible Grills", path: "/services/invisible-grills" },
  { name: "Safety Nets", path: "/services/safety-nets" },
  { name: "Ceiling Cloth Hanger", path: "/services/ceiling-cloth-hanger" },
  { name: "Pigeon Nets", path: "/services/pigeon-nets" },
];

const locations = [
  { name: "Hyderabad", path: "/locations/hyderabad" },
  { name: "Vizag", path: "/locations/vizag" },
  { name: "Warangal", path: "/locations/warangal" },
  { name: "Chittoor", path: "/locations/chittoor" },
  { name: "Rajahmundry", path: "/locations/rajahmundry" },
];

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Show header when scroll stops
      scrollTimeout.current = setTimeout(() => {
        setIsHeaderVisible(true);
      }, 150);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
          toggleButtonRef.current && !toggleButtonRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Spacer to account for fixed header - h-20 for mobile, h-[112px] for desktop (32px top bar + 80px nav) */}
      <div className="h-20 md:h-28" />
      
      {/* Fixed Header Container */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}>
        {/* Top Bar */}
        <div className="hidden md:block bg-gradient-to-r from-navy via-navy-light to-navy text-primary-foreground py-1.5">
          <div className="container-custom flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919788318444" className="flex items-center gap-2 hover:text-sky-light transition-colors hover:scale-105 duration-200">
                <Phone className="w-4 h-4" />
                +91 97883 18444
              </a>
              <a href="tel:+919618568669" className="flex items-center gap-2 hover:text-sky-light transition-colors hover:scale-105 duration-200">
                <Phone className="w-4 h-4" />
                +91 96185 68669
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dilsukhnagar, Hyderabad - 500060</span>
            </div>
          </div>
        </div>

        {/* Main Header with Solid Background */}
        <header className="bg-gradient-to-r from-navy via-navy-light to-primary shadow-lg">
          <div className="container-custom">
            <nav className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div 
                  className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary via-sky to-accent rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-[6px] md:text-[8px] font-bold text-white">US</span>
                  </div>
                </motion.div>
                <div>
                  <h1 className="font-heading font-bold text-base md:text-lg text-white leading-tight group-hover:text-sky-light transition-colors">
                    Ultra Safe
                  </h1>
                  <p className="text-[10px] md:text-xs text-white/70">Grills & Nets</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                <Link
                  to="/"
                  className={`font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === "/" ? "text-sky-light" : "text-white hover:text-sky-light"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === "/about" ? "text-sky-light" : "text-white hover:text-sky-light"
                  }`}
                >
                  About Us
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium transition-all duration-200 hover:scale-105 ${
                      location.pathname.includes("/services") ? "text-sky-light" : "text-white hover:text-sky-light"
                    }`}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-br from-navy via-navy-light to-primary rounded-xl shadow-xl border border-white/10 overflow-hidden backdrop-blur-xl"
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={service.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={service.path}
                              className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-sky-light transition-all duration-200 hover:pl-6"
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Locations Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("locations")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium transition-all duration-200 hover:scale-105 ${
                      location.pathname.includes("/locations") ? "text-sky-light" : "text-white hover:text-sky-light"
                    }`}
                  >
                    Locations
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "locations" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "locations" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-br from-navy via-navy-light to-primary rounded-xl shadow-xl border border-white/10 overflow-hidden backdrop-blur-xl"
                      >
                        {locations.map((loc, index) => (
                          <motion.div
                            key={loc.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={loc.path}
                              className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-sky-light transition-all duration-200 hover:pl-6"
                            >
                              {loc.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  className={`font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === "/contact" ? "text-sky-light" : "text-white hover:text-sky-light"
                  }`}
                >
                  Contact
                </Link>
              </div>

              {/* CTA & Mobile Menu */}
              <div className="flex items-center gap-4">
                <motion.a 
                  href="tel:+919788318444" 
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl shadow-lg hover:shadow-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  Get Quote
                </motion.a>
                <button
                  ref={toggleButtonRef}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-gradient-to-b from-navy to-navy-light border-t border-white/10 overflow-hidden"
              >
                <div className="container-custom py-4 space-y-2">
                  <Link to="/" className="block py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="block py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors">
                    About Us
                  </Link>
                  
                  {/* Mobile Services */}
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "m-services" ? null : "m-services")}
                      className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "m-services" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "m-services" && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block py-2 px-4 text-sm text-white/70 hover:text-sky-light transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Locations */}
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "m-locations" ? null : "m-locations")}
                      className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                      Locations
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "m-locations" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "m-locations" && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {locations.map((loc) => (
                            <Link
                              key={loc.path}
                              to={loc.path}
                              className="block py-2 px-4 text-sm text-white/70 hover:text-sky-light transition-colors"
                            >
                              {loc.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/contact" className="block py-3 px-4 rounded-lg text-white hover:bg-white/10 transition-colors">
                    Contact
                  </Link>

                   <a href="tel:+919788318444" className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors mt-2">
                    <Phone className="w-4 h-4" />
                    Call Now: +91 97883 18444
                  </a>

                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/919788318444?text=Hi%2C%20I%27m%20interested%20in%20UltraSafe%20Grills%20%26%20Nets%20services.%20Please%20share%20more%20details%20about%20your%20invisible%20grills%20and%20safety%20nets."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-accent text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </>
  );
};

export default Header;