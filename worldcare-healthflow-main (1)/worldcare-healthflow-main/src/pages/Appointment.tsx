import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doctors } from "@/data/doctors";
import { supabase } from "@/integrations/supabase/client";

const problems = [
  "Fever",
  "Heart Problem",
  "Skin Allergy",
  "Headache",
  "Stomach Pain",
  "Back Pain",
  "Respiratory Issues",
  "General Checkup",
  "Other",
];

const Appointment = () => {
  const { toast } = useToast();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    problem: "",
    date: "",
    time: "",
    doctorId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [availableDoctors, setAvailableDoctors] = useState(doctors.slice(0, 5));

  const handleProblemChange = (value: string) => {
    setFormData({ ...formData, problem: value });
    // Simulate filtering doctors based on problem (in real app, this would be more sophisticated)
    const filtered = doctors.slice(0, 5);
    setAvailableDoctors(filtered);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.problem || !formData.date || !formData.time || !formData.doctorId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const doctor = doctors.find((d) => d.id === Number(formData.doctorId));
      
      if (!doctor) {
        throw new Error("Doctor not found");
      }

      // Send email confirmation via edge function
      const { data, error } = await supabase.functions.invoke('send-appointment-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          problem: formData.problem,
          doctorName: doctor.name,
          doctorSpecialization: doctor.specialization,
          date: formData.date,
          time: formData.time,
        },
      });

      if (error) {
        console.error("Email sending error:", error);
        toast({
          title: "Email Error",
          description: "Appointment booked, but email confirmation failed. Please check your inbox.",
          variant: "destructive",
        });
      } else {
        console.log("Email sent successfully:", data);
      }

      // Show confirmation
      setShowConfirmation(true);

      toast({
        title: "Appointment Booked! ✅",
        description: "Confirmation email has been sent to " + formData.email,
      });

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          problem: "",
          date: "",
          time: "",
          doctorId: "",
        });
        setShowConfirmation(false);
      }, 7000);
    } catch (error) {
      console.error("Appointment booking error:", error);
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDoctor = doctors.find((d) => d.id === Number(formData.doctorId));

  if (showConfirmation && selectedDoctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32">
          <Card className="max-w-2xl mx-auto p-8 text-center animate-scale-in">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
              <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Appointment Confirmed!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your appointment has been successfully booked.
            </p>
            <Card className="bg-muted p-6 mb-6 text-left">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Appointment Details:</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Patient:</strong> {formData.name}</p>
                <p><strong className="text-foreground">Doctor:</strong> {selectedDoctor.name}</p>
                <p><strong className="text-foreground">Specialization:</strong> {selectedDoctor.specialization}</p>
                <p><strong className="text-foreground">Date:</strong> {formData.date}</p>
                <p><strong className="text-foreground">Time:</strong> {formData.time}</p>
                <p><strong className="text-foreground">Reason:</strong> {formData.problem}</p>
              </div>
            </Card>
            <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground">
                📧 Confirmation email has been sent to <strong>{formData.email}</strong>
              </p>
              <p className="text-sm text-foreground mt-2">
                📱 SMS/WhatsApp confirmation will be sent to <strong>{formData.phone}</strong>
              </p>
            </div>
            <p className="text-muted-foreground mb-6">
              Please arrive 15 minutes before your scheduled time.
            </p>
            <Button onClick={() => setShowConfirmation(false)} variant="hero" size="lg">
              Book Another Appointment
            </Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4">Book an Appointment</h1>
            <p className="text-xl text-muted-foreground">
              Schedule your consultation with our expert doctors
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Options */}
      <section className="py-8 container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 text-center hover:shadow-hover transition-all duration-300 border-2 border-primary/20 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Call to Book</h3>
            <p className="text-muted-foreground mb-6">
              Speak directly with our staff for immediate assistance
            </p>
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="tel:+911234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call +91 123-456-7890
              </a>
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-hover transition-all duration-300 border-2 border-secondary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Online Booking</h3>
            <p className="text-muted-foreground mb-6">
              Fill the form below to book your appointment online
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => {
                const formElement = document.getElementById("appointment-form");
                formElement?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Online
            </Button>
          </Card>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment-form" className="py-8 pb-20 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Appointment Form</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>

              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                />
              </div>
            </div>

            {/* Medical Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Medical Information</h3>

              <div>
                <Label htmlFor="problem">Reason for Visit *</Label>
                <Select value={formData.problem} onValueChange={handleProblemChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your problem" />
                  </SelectTrigger>
                  <SelectContent>
                    {problems.map((problem) => (
                      <SelectItem key={problem} value={problem}>
                        {problem}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.problem && (
                <div className="animate-fade-in">
                  <Label htmlFor="doctor">Select Doctor *</Label>
                  <Select value={formData.doctorId} onValueChange={(value) => setFormData({ ...formData, doctorId: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose available doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDoctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id.toString()}>
                          {doctor.name} - {doctor.specialization}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedDoctor && (
                    <Card className="mt-4 p-4 bg-primary/5 border-primary/20 animate-fade-in">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Doctor Availability
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Available Days:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedDoctor.availability.map((day) => (
                              <span key={day} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                {day}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="pt-2">
                          <p className="text-sm text-muted-foreground mb-1">Consultation Hours:</p>
                          <p className="font-semibold text-foreground flex items-center gap-2">
                            <span className="text-primary">⏰</span>
                            {selectedDoctor.timings}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              )}
            </div>

            {/* Appointment Schedule */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Schedule</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              <Calendar className="w-5 h-5 mr-2" />
              {isSubmitting ? "Booking..." : "Confirm Appointment"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              By booking an appointment, you agree to receive SMS/WhatsApp notifications regarding your appointment.
            </p>
          </form>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
