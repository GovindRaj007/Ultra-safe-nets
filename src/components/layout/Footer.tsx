import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import businessLogo from "../../assets/business-logo.jpg";

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
              <div className="w-[16rem] h-[6rem] md:w-[17rem] md:h-[7rem] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src={businessLogo} 
                  alt="Urban Invisible Grills Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Andhra Pradesh's trusted provider of premium invisible grills and safety solutions. Protecting homes and families across the state with modern, elegant, and innovative safety products.
            </p>
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
                <Link to="/services/invisible-grills-balcony" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Balcony Invisible Grills
                </Link>
              </li>
              <li>
                <Link to="/services/invisible-grills-windows" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Window Invisible Grills
                </Link>
              </li>
              <li>
                <Link to="/services/ceiling-cloth-hanger" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Ceiling Cloth Hanger
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Locations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Service Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/locations/visakhapatnam" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Visakhapatnam
                </Link>
              </li>
              <li>
                <Link to="/locations/rajahmundry" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Rajahmundry
                </Link>
              </li>
              <li>
                <Link to="/locations/vijayawada" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Vijayawada
                </Link>
              </li>
              <li>
                <Link to="/locations/guntur" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Guntur
                </Link>
              </li>
              <li>
                <Link to="/locations/tirupati" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Tirupati
                </Link>
              </li>
              <li>
                <Link to="/locations/ongole" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Ongole
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917075232499" className="flex items-start gap-3 text-muted-foreground hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 7075 232499</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@urbansafetygrills.in" className="flex items-start gap-3 text-muted-foreground hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>urbaninvisiblegrills.ap@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>61-19-21/6, A Challa Rao St, Ramalingeswara Nagar, Vijayawada, AP 520013</span>
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
            <p>© {currentYear} Urban Invisible Grills. All rights reserved.</p>
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
