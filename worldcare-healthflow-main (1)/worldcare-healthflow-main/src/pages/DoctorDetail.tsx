import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Award, GraduationCap, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doctors } from "@/data/doctors";

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Doctor Not Found</h1>
          <Button asChild>
            <Link to="/doctors">Back to Doctors</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-32">
        <Button asChild variant="ghost" className="mb-8 animate-fade-in">
          <Link to="/doctors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Doctors
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Profile Card */}
          <Card className="lg:col-span-1 p-8 h-fit sticky top-24 animate-fade-in hover:shadow-glow transition-all duration-500">
            <div className="text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-hover hover:scale-105 transition-transform duration-500 animate-scale-in"
              />
              <h1 className="text-3xl font-bold text-foreground mb-2">{doctor.name}</h1>
              <p className="text-muted-foreground mb-4">{doctor.degree}</p>
              <Badge className="mb-4 bg-primary text-primary-foreground">{doctor.specialization}</Badge>

              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-semibold text-foreground">{doctor.experience} Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-semibold text-foreground">{doctor.department}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timings</p>
                    <p className="font-semibold text-foreground">{doctor.timings}</p>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full mt-6 hover:scale-105 transition-all duration-300" size="lg" variant="hero">
                <Link to="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </Card>

          {/* Doctor Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="p-8 animate-fade-in hover:shadow-glow transition-all duration-500" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
            </Card>

            {/* Availability */}
            <Card className="p-8 animate-fade-in hover:shadow-glow transition-all duration-500" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Availability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Available Days</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.availability.map((day) => (
                      <Badge key={day} variant="secondary" className="px-4 py-2 hover:scale-110 transition-transform duration-300">
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Consultation Hours</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{doctor.timings}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Education & Expertise */}
            <Card className="p-8 animate-fade-in hover:shadow-glow transition-all duration-500" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Education & Expertise</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{doctor.degree}</p>
                    <p className="text-sm text-muted-foreground">Qualification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{doctor.specialization}</p>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-8 bg-gradient-primary text-primary-foreground animate-fade-in hover:shadow-glow transition-all duration-500" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-4 animate-fade-in-up">Ready to Schedule Your Appointment?</h3>
              <p className="mb-6 opacity-90 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                Book a consultation with {doctor.name} and take the first step towards better health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-glow hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold text-base">
                  <Link to="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-glow hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold text-base">
                  <a href="tel:+911234567890">Call Us: +91 123-456-7890</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorDetail;
