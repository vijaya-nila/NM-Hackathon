import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doctors } from "@/data/doctors";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = Array.from(new Set(doctors.map((doc) => doc.department)));

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || doctor.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in-up drop-shadow-lg">Our Expert Doctors</h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Meet our team of experienced medical professionals dedicated to your health
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-8 pb-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <Card
              key={doctor.id}
              className="overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card border-border group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.degree}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-primary">{doctor.specialization}</p>
                  <p className="text-sm text-muted-foreground">{doctor.department}</p>
                  <p className="text-sm text-muted-foreground">{doctor.experience} years experience</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1 hover:scale-105 transition-all duration-300" size="sm">
                    <Link to={`/doctor/${doctor.id}`}>View Profile</Link>
                  </Button>
                  <Button asChild variant="secondary" size="sm" className="flex-1 hover:scale-105 transition-all duration-300">
                    <Link to="/appointment">
                      <Calendar className="w-4 h-4 mr-1" /> Book
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground">No doctors found matching your criteria</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
