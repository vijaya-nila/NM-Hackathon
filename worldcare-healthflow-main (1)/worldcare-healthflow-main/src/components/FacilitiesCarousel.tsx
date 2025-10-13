import { useState, useEffect } from "react";
import receptionImg from "@/assets/reception.jpg";
import icuImg from "@/assets/icu.jpg";
import ambulanceImg from "@/assets/ambulance.jpg";
import hospitalCorridorImg from "@/assets/hospital-corridor.jpg";
import hospitalLobbyImg from "@/assets/hospital-lobby.jpg";
import icuAdvancedImg from "@/assets/icu-advanced.jpg";
import radiologyLabImg from "@/assets/radiology-lab.jpg";
import patientRoomImg from "@/assets/patient-room.jpg";

const facilities = [
  {
    id: 1,
    title: "Modern Hospital Lobby",
    description: "Spacious, state-of-the-art lobby with world-class amenities and patient comfort",
    image: hospitalLobbyImg,
  },
  {
    id: 2,
    title: "Hospital Information Center",
    description: "Dedicated information desk providing guidance and assistance to patients and visitors",
    image: hospitalCorridorImg,
  },
  {
    id: 3,
    title: "Advanced ICU Facilities",
    description: "Cutting-edge intensive care unit with latest life-saving medical technology",
    image: icuAdvancedImg,
  },
  {
    id: 4,
    title: "Radiology & Diagnostic Lab",
    description: "Advanced imaging center with MRI, CT scan, and comprehensive diagnostic services",
    image: radiologyLabImg,
  },
  {
    id: 5,
    title: "Comfortable Patient Rooms",
    description: "Spacious and well-equipped patient rooms designed for healing and comfort",
    image: patientRoomImg,
  },
  {
    id: 6,
    title: "Modern Reception Area",
    description: "Welcoming 24/7 reception with professional staff ready to assist you",
    image: receptionImg,
  },
  {
    id: 7,
    title: "Advanced ICU",
    description: "State-of-the-art intensive care unit with latest medical technology",
    image: icuImg,
  },
  {
    id: 8,
    title: "Emergency Ambulance Service",
    description: "Round-the-clock emergency ambulance service with trained paramedics",
    image: ambulanceImg,
  },
];

const FacilitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Facilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            WorldCare Hospital is equipped with modern facilities and advanced medical technology to provide the best care
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-hover">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                  <h3 className="text-3xl font-bold mb-2 animate-fade-in">{facility.title}</h3>
                  <p className="text-lg animate-fade-in">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-12 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesCarousel;
