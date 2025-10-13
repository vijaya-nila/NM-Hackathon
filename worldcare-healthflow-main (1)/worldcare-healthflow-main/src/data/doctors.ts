import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import doctor5 from "@/assets/doctor-5.jpg";
import doctor6 from "@/assets/doctor-6.jpg";
import doctor7 from "@/assets/doctor-7.jpg";
import doctor8 from "@/assets/doctor-8.jpg";
import doctor9 from "@/assets/doctor-9.jpg";
import doctor10 from "@/assets/doctor-10.jpg";
import doctor11 from "@/assets/doctor-11.jpg";
import doctor12 from "@/assets/doctor-12.jpg";
import doctor13 from "@/assets/doctor-13.jpg";
import doctor14 from "@/assets/doctor-14.jpg";
import doctor15 from "@/assets/doctor-15.jpg";
import doctor16 from "@/assets/doctor-16.jpg";
import doctor17 from "@/assets/doctor-17.jpg";
import doctor18 from "@/assets/doctor-18.jpg";
import doctor19 from "@/assets/doctor-19.jpg";
import doctor20 from "@/assets/doctor-20.jpg";

export interface Doctor {
  id: number;
  name: string;
  degree: string;
  specialization: string;
  department: string;
  experience: number;
  image: string;
  availability: string[];
  timings: string;
  bio: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    degree: "MBBS, MD (General Medicine)",
    specialization: "General Physician",
    department: "General Medicine",
    experience: 12,
    image: doctor1,
    availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timings: "9:00 AM - 2:00 PM",
    bio: "Dr. Priya Sharma is a highly experienced general physician with over 12 years of practice. She specializes in comprehensive primary care and preventive medicine.",
  },
  {
    id: 2,
    name: "Dr. Arjun Patel",
    degree: "MBBS, MD (Cardiology), DM",
    specialization: "Cardiologist",
    department: "Cardiology",
    experience: 15,
    image: doctor2,
    availability: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timings: "10:00 AM - 3:00 PM",
    bio: "Dr. Arjun Patel is a renowned cardiologist specializing in interventional cardiology and heart disease management with 15 years of experience.",
  },
  {
    id: 3,
    name: "Dr. Deepika Kumar",
    degree: "MBBS, MS (General Surgery)",
    specialization: "General Surgeon",
    department: "Surgery",
    experience: 10,
    image: doctor3,
    availability: ["Tuesday", "Thursday", "Friday", "Saturday"],
    timings: "11:00 AM - 4:00 PM",
    bio: "Dr. Deepika Kumar is an expert general surgeon with a focus on minimally invasive surgical procedures and trauma care.",
  },
  {
    id: 4,
    name: "Dr. Rajesh Menon",
    degree: "MBBS, MD (Pediatrics)",
    specialization: "Pediatrician",
    department: "Pediatrics",
    experience: 14,
    image: doctor4,
    availability: ["Monday", "Tuesday", "Thursday", "Friday"],
    timings: "9:30 AM - 1:30 PM",
    bio: "Dr. Rajesh Menon specializes in child healthcare with expertise in neonatal care and childhood vaccinations.",
  },
  {
    id: 5,
    name: "Dr. Ananya Iyer",
    degree: "MBBS, DNB (Neurology)",
    specialization: "Neurologist",
    department: "Neurology",
    experience: 11,
    image: doctor5,
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    timings: "10:00 AM - 2:30 PM",
    bio: "Dr. Ananya Iyer is a skilled neurologist specializing in stroke management and neurodegenerative disorders.",
  },
  {
    id: 6,
    name: "Dr. Vikram Reddy",
    degree: "MBBS, MS (Orthopedics)",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: 16,
    image: doctor6,
    availability: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
    timings: "11:00 AM - 3:00 PM",
    bio: "Dr. Vikram Reddy specializes in joint replacement surgery and sports medicine with extensive experience.",
  },
  {
    id: 7,
    name: "Dr. Kavya Nair",
    degree: "MBBS, MD (Dermatology)",
    specialization: "Dermatologist",
    department: "Dermatology",
    experience: 9,
    image: doctor7,
    availability: ["Monday", "Tuesday", "Friday", "Saturday"],
    timings: "2:00 PM - 6:00 PM",
    bio: "Dr. Kavya Nair is an expert in skin disorders, cosmetic dermatology, and laser treatments.",
  },
  {
    id: 8,
    name: "Dr. Sanjay Gupta",
    degree: "MBBS, MD (Psychiatry)",
    specialization: "Psychiatrist",
    department: "Psychiatry",
    experience: 13,
    image: doctor8,
    availability: ["Monday", "Wednesday", "Thursday", "Friday"],
    timings: "3:00 PM - 7:00 PM",
    bio: "Dr. Sanjay Gupta specializes in mental health, anxiety disorders, and cognitive behavioral therapy.",
  },
  {
    id: 9,
    name: "Dr. Meera Krishnan",
    degree: "MBBS, MD (Gynecology)",
    specialization: "Gynecologist",
    department: "Obstetrics & Gynecology",
    experience: 12,
    image: doctor9,
    availability: ["Tuesday", "Thursday", "Friday", "Saturday"],
    timings: "9:00 AM - 1:00 PM",
    bio: "Dr. Meera Krishnan is a compassionate gynecologist with expertise in high-risk pregnancies and women's health.",
  },
  {
    id: 10,
    name: "Dr. Aditya Singh",
    degree: "MBBS, MD (Radiology)",
    specialization: "Radiologist",
    department: "Radiology",
    experience: 10,
    image: doctor10,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timings: "8:00 AM - 4:00 PM",
    bio: "Dr. Aditya Singh specializes in diagnostic imaging and interventional radiology procedures.",
  },
  {
    id: 11,
    name: "Dr. Swathi Reddy",
    degree: "MBBS, MD (Anesthesiology)",
    specialization: "Anesthesiologist",
    department: "Anesthesiology",
    experience: 11,
    image: doctor11,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    timings: "24/7 On-Call",
    bio: "Dr. Swathi Reddy is an experienced anesthesiologist providing pain management and perioperative care.",
  },
  {
    id: 12,
    name: "Dr. Rahul Varma",
    degree: "MBBS, MD (Oncology)",
    specialization: "Medical Oncologist",
    department: "Oncology",
    experience: 14,
    image: doctor12,
    availability: ["Monday", "Wednesday", "Friday"],
    timings: "10:00 AM - 2:00 PM",
    bio: "Dr. Rahul Varma specializes in cancer treatment and chemotherapy with a patient-centered approach.",
  },
  {
    id: 13,
    name: "Dr. Lakshmi Rao",
    degree: "MBBS, MD (Pathology)",
    specialization: "Pathologist",
    department: "Pathology",
    experience: 15,
    image: doctor13,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timings: "8:00 AM - 3:00 PM",
    bio: "Dr. Lakshmi Rao is a skilled pathologist specializing in disease diagnosis through laboratory analysis.",
  },
  {
    id: 14,
    name: "Dr. Karthik Pillai",
    degree: "MBBS, DNB (Urology)",
    specialization: "Urologist",
    department: "Urology",
    experience: 12,
    image: doctor14,
    availability: ["Tuesday", "Thursday", "Saturday"],
    timings: "10:00 AM - 2:00 PM",
    bio: "Dr. Karthik Pillai specializes in urological surgeries and kidney stone management.",
  },
  {
    id: 15,
    name: "Dr. Nithya Balan",
    degree: "MBBS, MS (ENT)",
    specialization: "ENT Specialist",
    department: "ENT",
    experience: 10,
    image: doctor15,
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    timings: "11:00 AM - 3:00 PM",
    bio: "Dr. Nithya Balan is an ENT specialist with expertise in sinus surgery and hearing disorders.",
  },
  {
    id: 16,
    name: "Dr. Varun Kumar",
    degree: "MBBS, MD (Emergency Medicine)",
    specialization: "Emergency Physician",
    department: "Emergency",
    experience: 8,
    image: doctor16,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    timings: "24/7 Emergency",
    bio: "Dr. Varun Kumar is dedicated to providing immediate emergency care and critical treatment.",
  },
  {
    id: 17,
    name: "Dr. Divya Mohan",
    degree: "MBBS, MD (Endocrinology)",
    specialization: "Endocrinologist",
    department: "Endocrinology",
    experience: 11,
    image: doctor17,
    availability: ["Monday", "Tuesday", "Thursday", "Friday"],
    timings: "9:00 AM - 1:00 PM",
    bio: "Dr. Divya Mohan specializes in diabetes management and hormonal disorders.",
  },
  {
    id: 18,
    name: "Dr. Ashwin Nair",
    degree: "MBBS, MD (Gastroenterology)",
    specialization: "Gastroenterologist",
    department: "Gastroenterology",
    experience: 13,
    image: doctor18,
    availability: ["Tuesday", "Wednesday", "Friday", "Saturday"],
    timings: "10:30 AM - 2:30 PM",
    bio: "Dr. Ashwin Nair is an expert in digestive disorders and endoscopic procedures.",
  },
  {
    id: 19,
    name: "Dr. Pooja Iyer",
    degree: "MBBS, MD (Rheumatology)",
    specialization: "Rheumatologist",
    department: "Rheumatology",
    experience: 9,
    image: doctor19,
    availability: ["Monday", "Wednesday", "Thursday"],
    timings: "11:00 AM - 3:00 PM",
    bio: "Dr. Pooja Iyer specializes in arthritis and autoimmune disease management.",
  },
  {
    id: 20,
    name: "Dr. Suresh Babu",
    degree: "MBBS, MD (Nephrology)",
    specialization: "Nephrologist",
    department: "Nephrology",
    experience: 14,
    image: doctor20,
    availability: ["Tuesday", "Thursday", "Friday", "Saturday"],
    timings: "9:00 AM - 1:00 PM",
    bio: "Dr. Suresh Babu is a kidney specialist with expertise in dialysis and renal transplantation.",
  },
];
