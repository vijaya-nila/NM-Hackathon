import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Users, Clock, Award, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hospital-exterior.jpg";
import FacilitiesCarousel from "@/components/FacilitiesCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="WorldCare Hospital"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up drop-shadow-lg">
            WorldCare Hospital
          </h1>
          <p className="text-2xl md:text-3xl mb-4 animate-fade-in drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            Caring for Life
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in drop-shadow-md" style={{ animationDelay: "0.4s" }}>
            Providing compassionate healthcare with advanced medical facilities and expert professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" variant="hero" className="hover:shadow-glow shadow-hover transition-all duration-300">
              <Link to="/appointment">
                Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="hover:shadow-glow shadow-hover transition-all duration-300">
              <Link to="/doctors">View Our Doctors</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in-up">About WorldCare Hospital</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            WorldCare Hospital is a leading multi-specialty healthcare institution committed to delivering exceptional
            medical services. With state-of-the-art infrastructure and a team of highly qualified medical professionals,
            we provide comprehensive healthcare solutions under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Compassionate Care",
              description: "Patient-centered approach with personalized treatment plans",
            },
            {
              icon: Shield,
              title: "Advanced Technology",
              description: "Latest medical equipment and cutting-edge diagnostic facilities",
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Experienced doctors and healthcare professionals",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the most trusted healthcare provider, setting new standards in medical excellence and patient
                satisfaction through innovation, compassion, and comprehensive care.
              </p>
            </div>

            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver world-class healthcare services that combine medical expertise with compassionate care,
                ensuring every patient receives personalized attention and the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Our Departments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Comprehensive medical services across multiple specialties
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            "Cardiology",
            "Neurology",
            "Pediatrics",
            "Orthopedics",
            "Dermatology",
            "Oncology",
            "Emergency Care",
            "Surgery",
            "Radiology",
            "Gynecology",
          ].map((dept, index) => (
            <Link key={index} to={`/department/${dept.toLowerCase().replace(' ', '-')}`}>
              <Card
                className="p-6 text-center hover:shadow-glow hover:scale-110 hover:-translate-y-1 transition-all duration-300 bg-card border-border cursor-pointer animate-scale-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{dept}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Facilities Carousel */}
      <FacilitiesCarousel />

      {/* Why Choose Us */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Why Choose WorldCare?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Excellence in healthcare with patient-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Clock,
              title: "24/7 Emergency",
              description: "Round-the-clock emergency services",
            },
            {
              icon: Award,
              title: "Certified Excellence",
              description: "Accredited and award-winning hospital",
            },
            {
              icon: Users,
              title: "20+ Specialists",
              description: "Expert doctors across all departments",
            },
            {
              icon: Heart,
              title: "Patient Focused",
              description: "Compassionate and personalized care",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Need Medical Assistance?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Book an appointment with our expert doctors or call us for emergency services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-glow hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold text-base">
              <Link to="/appointment">Book Appointment Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-glow hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold text-base">
              <a href="tel:+911234567890">Call Emergency: +91 123-456-7890</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
