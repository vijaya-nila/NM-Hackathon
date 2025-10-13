import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-primary-foreground">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">WorldCare</span>
              <span className="text-xs text-muted-foreground">Caring for Life</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/doctors" className="text-foreground hover:text-primary transition-colors font-medium">
              Doctors
            </Link>
            <Link to="/appointment" className="text-foreground hover:text-primary transition-colors font-medium">
              Book Appointment
            </Link>
            <a href="tel:+911234567890" className="flex items-center gap-2 text-destructive hover:text-destructive/80 active:text-destructive-foreground active:bg-destructive active:px-2 active:py-1 active:rounded transition-all font-semibold animate-pulse hover:animate-none hover:scale-105">
              <Phone className="w-4 h-4 animate-pulse" />
              Emergency: +91 123-456-7890
            </a>
            <Button asChild variant="hero">
              <Link to="/appointment">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link
              to="/appointment"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
            <a href="tel:+911234567890" className="flex items-center gap-2 py-2 text-destructive hover:text-destructive/80 active:text-destructive-foreground active:bg-destructive active:px-2 active:rounded transition-all font-semibold animate-pulse hover:animate-none">
              <Phone className="w-4 h-4 animate-pulse" />
              Emergency: +91 123-456-7890
            </a>
            <Button asChild variant="hero" className="w-full">
              <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
