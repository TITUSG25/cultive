import { useState, useEffect } from "react";
import {
  Users,
  UserCheck,
  BookOpen,
  Target,
  Database,
  Calendar,
  CheckCircle,
  FileText,
  BarChart3,
  MessageCircle,
  Award,
  PenTool,
  DollarSign,
  Home,
  Bus,
  CreditCard,
  User,
  Clock,
  GraduationCap,
  School,
  Heart,
  Sparkles,
  ArrowRight,
  Play,
  Star,
  Shield,
  Headphones,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "For Schools",
      subtitle: "Comprehensive School Management Solutions",
      description:
        "Cultive empowers schools by streamlining administrative tasks, improving communication, and enhancing overall educational outcomes through integrated services designed for modern educational institutions.",
      features: [
        {
          title: "Examination Management",
          description: "Comprehensive exam management and assessment tools",
        },
        {
          title: "Financial Tracking",
          description: "Advanced expense management and financial oversight",
        },
        {
          title: "Hostel Management",
          description: "Complete student accommodation solutions",
        },
        {
          title: "Parent Communication",
          description: "Seamless parent engagement platform",
        },
        {
          title: "Certificate Generation",
          description: "Digital certificate creation and management",
        },
        {
          title: "Student Information",
          description: "Comprehensive student data management",
        },
      ],
      icon: School,
      color: "#283a89",
      imageUrl:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "For Teachers",
      subtitle: "Empowering Educators with Smart Tools",
      description:
        "Focus more on teaching and less on administrative tasks through intuitive, user-friendly educational tools designed specifically for modern educators to enhance classroom efficiency.",
      features: [
        {
          title: "Digital Attendance",
          description: "Streamlined attendance tracking and management",
        },
        {
          title: "Assignment Portal",
          description: "Easy assignment creation and submission system",
        },
        {
          title: "Automated Grading",
          description: "Intelligent grading and assessment tools",
        },
        {
          title: "Progress Analytics",
          description: "Detailed student progress tracking and insights",
        },
        {
          title: "Resource Library",
          description: "Comprehensive educational resources and materials",
        },
        {
          title: "Parent Communication",
          description: "Direct communication with parents and guardians",
        },
      ],
      icon: GraduationCap,
      color: "#10b981",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "For Parents",
      subtitle: "Stay Connected to Your Child's Journey",
      description:
        "Maintain active engagement with your child's educational progress and communicate effectively with teachers through comprehensive parent-focused features.",
      features: [
        {
          title: "Real-time Attendance",
          description: "Instant attendance notifications and updates",
        },
        {
          title: "Academic Performance",
          description: "Comprehensive grade tracking and analysis",
        },
        {
          title: "Direct Messaging",
          description: "Seamless communication with teachers",
        },
        {
          title: "School Events",
          description: "Complete school calendar and event updates",
        },
        {
          title: "Progress Reports",
          description: "Detailed academic progress documentation",
        },
        {
          title: "Fee Management",
          description: "Easy online fee payment and tracking",
        },
      ],
      icon: Heart,
      color: "#7c3aed",
      imageUrl:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "For Students",
      subtitle: "Organize, Track, and Excel in Your Studies",
      description:
        "Stay organized, monitor academic progress, and access essential learning resources with student-focused tools designed to enhance your educational experience.",
      features: [
        {
          title: "Assignment Tracker",
          description: "Easy assignment submission and tracking",
        },
        {
          title: "Class Schedule",
          description: "Personalized timetable and exam calendar",
        },
        {
          title: "Grade Tracking",
          description: "Real-time academic performance monitoring",
        },
        {
          title: "Digital Library",
          description: "Comprehensive learning resources access",
        },
        {
          title: "Project Collaboration",
          description: "Team projects and group work platform",
        },
        {
          title: "Personal Attendance",
          description: "Individual attendance record and history",
        },
      ],
      icon: User,
      color: "#f97316",
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans mt-10">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#283a89] text-shadow">
                Transforming Education with
                <span className="text-[#fbb040]"> Digital Excellence</span>
              </h1>

              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Our mission is to support educational institutions in creating dynamic, efficient, and engaging learning
                environments by offering a comprehensive range of products and services tailored to meet the unique
                needs of each school.
              </p>

              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Cultive serves schools, teachers, parents, and students across the globe, making education more
                accessible, efficient, and effective.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Educational Technology"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-[#fbb040] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services - One by One */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <section key={service.id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: service.color }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-[#283a89]">{service.title}</h3>
                        <p className="text-lg font-medium" style={{ color: service.color }}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                  </div>

                  {/* Features List - No Card Design */}
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#283a89] text-base mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image - Reduced Size */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-3/4 h-[350px] object-cover mx-auto"
                  />
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-30"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#283a89] mb-4">Why Choose Cultive?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our comprehensive, user-friendly solutions designed specifically for modern
              educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Comprehensive Solution",
                description:
                  "Complete ecosystem covering all educational stakeholders with integrated tools and seamless communication.",
                color: "#283a89",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security with regular backups and 99.9% uptime guarantee for peace of mind.",
                color: "#dc2626",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and customer service to ensure smooth operations always.",
                color: "#10b981",
              },
              {
                icon: Users,
                title: "User-Friendly Design",
                description:
                  "Intuitive interfaces designed for educators, students, and parents with minimal learning curve required.",
                color: "#f97316",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description:
                  "Trusted by 500+ institutions worldwide with 99% satisfaction rate and continuous improvement.",
                color: "#fbb040",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description:
                  "Advanced analytics and reporting tools to make informed decisions and track progress effectively.",
                color: "#7c3aed",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#283a89] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;