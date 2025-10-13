import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, Shield, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hospitalLobbyImg from "@/assets/hospital-lobby.jpg";
import icuAdvancedImg from "@/assets/icu-advanced.jpg";
import radiologyLabImg from "@/assets/radiology-lab.jpg";

interface DepartmentInfo {
  name: string;
  description: string;
  image: string;
  successOperations: string[];
  preventionTips: string[];
  treatments: string[];
  specialists: number;
}

const departmentData: Record<string, DepartmentInfo> = {
  cardiology: {
    name: "Cardiology",
    description: "Our Cardiology department provides comprehensive cardiac care with state-of-the-art facilities for diagnosis and treatment of heart-related conditions.",
    image: hospitalLobbyImg,
    successOperations: [
      "Over 500 successful cardiac surgeries in 2024",
      "98% success rate in coronary bypass procedures",
      "Advanced angioplasty with minimal recovery time",
      "Successful treatment of complex arrhythmias",
      "Heart valve replacement surgeries with excellent outcomes",
    ],
    preventionTips: [
      "Maintain a healthy diet low in saturated fats",
      "Exercise regularly for at least 30 minutes daily",
      "Monitor blood pressure and cholesterol levels",
      "Avoid smoking and excessive alcohol consumption",
      "Manage stress through meditation and relaxation",
      "Regular health checkups after age 40",
    ],
    treatments: [
      "Angioplasty & Stenting",
      "Coronary Bypass Surgery",
      "Cardiac Catheterization",
      "Pacemaker Implantation",
      "Heart Valve Repair/Replacement",
      "Electrophysiology Studies",
    ],
    specialists: 3,
  },
  neurology: {
    name: "Neurology",
    description: "Our Neurology department specializes in diagnosing and treating disorders of the nervous system with advanced neurological care.",
    image: radiologyLabImg,
    successOperations: [
      "Successfully treated over 300 stroke patients",
      "Advanced brain tumor surgeries with 95% success rate",
      "Epilepsy management with minimal medication",
      "Spinal cord surgery with complete recovery",
      "Parkinson's disease treatment with improved quality of life",
    ],
    preventionTips: [
      "Regular exercise to maintain brain health",
      "Healthy diet rich in omega-3 fatty acids",
      "Adequate sleep of 7-8 hours",
      "Mental stimulation through puzzles and reading",
      "Control blood pressure and diabetes",
      "Avoid head injuries by wearing helmets",
    ],
    treatments: [
      "Stroke Management",
      "Epilepsy Treatment",
      "Brain Tumor Surgery",
      "Spinal Cord Treatment",
      "Parkinson's Disease Care",
      "Multiple Sclerosis Treatment",
    ],
    specialists: 2,
  },
  pediatrics: {
    name: "Pediatrics",
    description: "Dedicated to providing comprehensive healthcare for infants, children, and adolescents with compassionate care.",
    image: hospitalLobbyImg,
    successOperations: [
      "Over 1000 children vaccinated successfully",
      "98% success rate in treating childhood infections",
      "Advanced neonatal care with excellent outcomes",
      "Successful management of chronic pediatric conditions",
      "Specialized care for premature babies",
    ],
    preventionTips: [
      "Follow vaccination schedule strictly",
      "Maintain proper hygiene and handwashing",
      "Balanced nutrition for growth and development",
      "Regular health checkups and monitoring",
      "Adequate sleep and physical activity",
      "Protect from environmental hazards",
    ],
    treatments: [
      "Vaccination Programs",
      "Neonatal Care",
      "Childhood Infections Treatment",
      "Growth & Development Monitoring",
      "Asthma Management",
      "Nutrition Counseling",
    ],
    specialists: 2,
  },
  orthopedics: {
    name: "Orthopedics",
    description: "Specialized in treating musculoskeletal conditions with advanced surgical and non-surgical interventions.",
    image: icuAdvancedImg,
    successOperations: [
      "Over 400 successful joint replacement surgeries",
      "Sports injury treatments with full recovery",
      "Spinal surgery with 97% success rate",
      "Arthroscopic procedures with minimal downtime",
      "Fracture management with excellent healing",
    ],
    preventionTips: [
      "Regular exercise to strengthen bones and muscles",
      "Maintain healthy weight to reduce joint stress",
      "Proper posture while sitting and standing",
      "Use protective gear during sports",
      "Adequate calcium and vitamin D intake",
      "Avoid repetitive strain injuries",
    ],
    treatments: [
      "Joint Replacement Surgery",
      "Arthroscopy",
      "Spinal Surgery",
      "Sports Medicine",
      "Fracture Treatment",
      "Physical Therapy",
    ],
    specialists: 1,
  },
  dermatology: {
    name: "Dermatology",
    description: "Comprehensive skin care services including medical, surgical, and cosmetic dermatology.",
    image: hospitalLobbyImg,
    successOperations: [
      "Over 600 successful skin treatments",
      "Advanced laser therapy with excellent results",
      "Skin cancer detection and treatment",
      "Acne treatment with visible improvements",
      "Anti-aging treatments with natural results",
    ],
    preventionTips: [
      "Use sunscreen daily (SPF 30 or higher)",
      "Avoid excessive sun exposure",
      "Keep skin clean and moisturized",
      "Drink plenty of water for hydration",
      "Avoid touching face frequently",
      "Regular skin self-examinations",
    ],
    treatments: [
      "Acne Treatment",
      "Laser Therapy",
      "Skin Cancer Screening",
      "Anti-Aging Treatments",
      "Hair Loss Treatment",
      "Cosmetic Procedures",
    ],
    specialists: 1,
  },
  oncology: {
    name: "Oncology",
    description: "Comprehensive cancer care with advanced treatment options and compassionate support.",
    image: radiologyLabImg,
    successOperations: [
      "Over 200 successful cancer treatments",
      "Advanced chemotherapy with minimal side effects",
      "Radiation therapy with precision targeting",
      "Successful tumor removal surgeries",
      "Immunotherapy with promising results",
    ],
    preventionTips: [
      "Avoid tobacco and limit alcohol consumption",
      "Maintain healthy weight through diet and exercise",
      "Protect skin from excessive sun exposure",
      "Regular cancer screening tests",
      "Healthy diet rich in fruits and vegetables",
      "Reduce exposure to carcinogens",
    ],
    treatments: [
      "Chemotherapy",
      "Radiation Therapy",
      "Surgical Oncology",
      "Immunotherapy",
      "Targeted Therapy",
      "Palliative Care",
    ],
    specialists: 1,
  },
  emergency: {
    name: "Emergency Care",
    description: "24/7 emergency services with rapid response team for critical care situations.",
    image: icuAdvancedImg,
    successOperations: [
      "Treated over 5000 emergency cases",
      "Average response time under 5 minutes",
      "98% patient satisfaction in emergency care",
      "Successful trauma management",
      "Critical care with advanced life support",
    ],
    preventionTips: [
      "Keep emergency contact numbers handy",
      "Know basic first aid procedures",
      "Maintain home safety to prevent accidents",
      "Regular health checkups to prevent emergencies",
      "Be aware of warning signs of serious conditions",
      "Have a well-stocked first aid kit",
    ],
    treatments: [
      "Trauma Care",
      "Cardiac Emergencies",
      "Stroke Management",
      "Respiratory Emergencies",
      "Poisoning Treatment",
      "Critical Care",
    ],
    specialists: 2,
  },
  surgery: {
    name: "Surgery",
    description: "Advanced surgical procedures with minimally invasive techniques and expert surgical team.",
    image: icuAdvancedImg,
    successOperations: [
      "Over 800 successful surgeries performed",
      "Laparoscopic procedures with quick recovery",
      "Complex surgical cases with excellent outcomes",
      "Low infection rates and complications",
      "Advanced robotic surgery capabilities",
    ],
    preventionTips: [
      "Maintain overall health through diet and exercise",
      "Follow pre-operative instructions carefully",
      "Quit smoking before scheduled surgeries",
      "Manage chronic conditions properly",
      "Ask questions and understand the procedure",
      "Follow post-operative care instructions",
    ],
    treatments: [
      "General Surgery",
      "Laparoscopic Surgery",
      "Trauma Surgery",
      "Gastrointestinal Surgery",
      "Hernia Repair",
      "Appendectomy",
    ],
    specialists: 2,
  },
  radiology: {
    name: "Radiology",
    description: "State-of-the-art imaging and diagnostic services with latest technology.",
    image: radiologyLabImg,
    successOperations: [
      "Over 10,000 diagnostic scans performed",
      "99% accurate diagnosis rate",
      "Advanced interventional radiology procedures",
      "Quick turnaround time for reports",
      "Minimal radiation exposure protocols",
    ],
    preventionTips: [
      "Inform about pregnancy before imaging",
      "Follow preparation instructions for scans",
      "Remove metal objects before MRI",
      "Stay still during imaging procedures",
      "Ask about radiation exposure concerns",
      "Keep previous scan reports for comparison",
    ],
    treatments: [
      "X-Ray Imaging",
      "CT Scans",
      "MRI Scans",
      "Ultrasound",
      "Mammography",
      "Interventional Radiology",
    ],
    specialists: 2,
  },
  gynecology: {
    name: "Gynecology",
    description: "Comprehensive women's healthcare services with compassionate and expert care.",
    image: hospitalLobbyImg,
    successOperations: [
      "Over 500 successful deliveries",
      "High-risk pregnancy management",
      "Minimally invasive gynecological surgeries",
      "Advanced fertility treatments",
      "Women's wellness programs",
    ],
    preventionTips: [
      "Regular gynecological checkups",
      "Maintain menstrual hygiene",
      "Healthy diet and exercise",
      "Breast self-examination monthly",
      "HPV vaccination for cervical cancer prevention",
      "Stress management and mental health",
    ],
    treatments: [
      "Pregnancy Care",
      "High-Risk Obstetrics",
      "Gynecological Surgery",
      "Fertility Treatment",
      "Menopause Management",
      "Contraception Counseling",
    ],
    specialists: 2,
  },
};

const DepartmentDetail = () => {
  const { department } = useParams<{ department: string }>();
  const deptInfo = department ? departmentData[department.toLowerCase()] : null;

  if (!deptInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Department Not Found</h1>
          <p className="text-muted-foreground mb-8">The department you're looking for doesn't exist.</p>
          <Button asChild variant="hero">
            <Link to="/">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={deptInfo.image}
            alt={deptInfo.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            {deptInfo.name} Department
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            {deptInfo.description}
          </p>
        </div>
      </section>

      {/* Department Info */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Success Stories */}
          <Card className="p-8 mb-12 animate-fade-in hover:shadow-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Successful Operations & Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deptInfo.successOperations.map((operation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{operation}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Prevention Tips */}
          <Card className="p-8 mb-12 animate-fade-in hover:shadow-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Prevention & Care Tips</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deptInfo.preventionTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors duration-300"
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Treatments Offered */}
          <Card className="p-8 mb-12 animate-fade-in hover:shadow-hover transition-all duration-300">
            <h2 className="text-3xl font-bold text-foreground mb-6">Treatments & Services Offered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {deptInfo.treatments.map((treatment, index) => (
                <Card
                  key={index}
                  className="p-4 text-center bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover:scale-105"
                >
                  <p className="font-semibold text-foreground">{treatment}</p>
                </Card>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-12 animate-fade-in hover:shadow-glow transition-all duration-500">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4 animate-fade-in-up">Need Consultation?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We have {deptInfo.specialists} specialized doctor{deptInfo.specialists > 1 ? 's' : ''} available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-glow hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold text-base">
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-glow hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold text-base">
                <Link to="/doctors">View Our Doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepartmentDetail;
