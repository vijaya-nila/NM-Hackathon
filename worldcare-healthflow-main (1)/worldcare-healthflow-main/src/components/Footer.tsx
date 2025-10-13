import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-card to-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">W</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">WorldCare</h3>
                <p className="text-xs text-muted-foreground">Caring for Life</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing compassionate healthcare with advanced medical facilities and expert professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Departments</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>123 Medical Center Dr, Chennai, Tamil Nadu 600001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123-456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@worldcare.com" className="hover:text-primary transition-colors">
                  contact@worldcare.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WorldCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
