import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">US</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Ultra Safe</h3>
                <p className="text-sm text-sky-light">Grills & Nets</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's premium invisible grill and safety net specialists. Protecting homes and families across Telangana and Andhra Pradesh with modern, elegant safety solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/invisible-grills" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Invisible Grills
                </Link>
              </li>
              <li>
                <Link to="/services/safety-nets" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Safety Nets
                </Link>
              </li>
              <li>
                <Link to="/services/ceiling-cloth-hanger" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Ceiling Cloth Hanger
                </Link>
              </li>
              <li>
                <Link to="/services/pigeon-nets" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Pigeon Nets
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Locations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Service Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/locations/hyderabad" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link to="/locations/vizag" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Visakhapatnam (Vizag)
                </Link>
              </li>
              <li>
                <Link to="/locations/warangal" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Warangal
                </Link>
              </li>
              <li>
                <Link to="/locations/chittoor" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Chittoor
                </Link>
              </li>
              <li>
                <Link to="/locations/rajahmundry" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Rajahmundry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919788318444" className="flex items-start gap-3 text-muted-foreground hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 97883 18444</span>
                </a>
              </li>
              <li>
                <a href="tel:+919618568669" className="flex items-start gap-3 text-muted-foreground hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 96185 68669</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ultrasafegrills.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@ultrasafegrills.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Dilsukhnagar, Hyderabad - 500060</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Ultra Safe Grills & Nets. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
