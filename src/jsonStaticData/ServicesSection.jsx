import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Heart,
  Monitor,
  Users,
  MapPin,
  Brain,
  Building,
  Target,
  Lightbulb,
  Calendar,
  Settings,
  Globe,
  Zap,
  Shield,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const serviceData = [
  {
    id: 1,
    title: "Individualized Education Plans (IEPs)",
    description:
      "We craft Individualized Education Plans (IEPs) that guide personalized learning journeys tailored to each student's unique needs, beginning from birth and evolving throughout their developmental stages.",
    icon: GraduationCap,
    category: "Academic Planning",
  },
  {
    id: 2,
    title: "Curriculum Development and Support",
    description:
      "We seamlessly integrate Activity-Based Learning (ABL) into the curriculum while continuously refining our pedagogical methods, and our team of experts collaborates closely with schools.",
    icon: BookOpen,
    category: "Curriculum Design",
  },
  {
    id: 3,
    title: "Psychological Counseling",
    description:
      "Our Psychological Counseling services offer essential support for the mental health and well-being of students, parents, and educators, fostering a positive and resilient educational environment.",
    icon: Heart,
    category: "Mental Health",
  },
  {
    id: 4,
    title: "Educational Technology Integration",
    description:
      "We provide cutting-edge educational technology tools and platforms that facilitate interactive learning, digital classrooms, and seamless communication between students and teachers.",
    icon: Monitor,
    category: "Technology",
  },
  {
    id: 5,
    title: "Soft Skills and Personality Training",
    description:
      "Through Soft Skills and Personality Training, we deliver seminars and workshops that focus on cultivating crucial interpersonal abilities and enhancing personality development.",
    icon: Users,
    category: "Personal Development",
  },
  {
    id: 6,
    title: "Career Counseling and Guidance",
    description:
      "Our Career Counseling and Guidance services empower students to make informed and strategic decisions about their future career paths, providing them the knowledge and confidence.",
    icon: MapPin,
    category: "Career Guidance",
  },
  {
    id: 7,
    title: "Students Information Systems (SIS)",
    description:
      "We offer comprehensive SIS solutions that streamline student data management, including attendance, grading, and reporting, ensuring efficient tracking of student progress.",
    icon: Brain,
    category: "Data Management",
  },
  {
    id: 8,
    title: "Students Service Centre (SSC)",
    description:
      "The Students Services Center (SSC) serves as a centralized hub dedicated to supporting the diverse needs of students throughout their academic journey.",
    icon: Building,
    category: "Student Services",
  },
  {
    id: 9,
    title: "Outbound Training Programs",
    description:
      "We conduct Outbound Training Programs that use experiential learning to develop teamwork, leadership, and practical skills through hands-on experiences.",
    icon: Target,
    category: "Experiential Learning",
  },
  {
    id: 10,
    title: "Faculty Development Programs (FDP)",
    description:
      "We provide ongoing professional development programs and workshops for teachers and staff, focusing on modern teaching techniques and technology integration.",
    icon: Lightbulb,
    category: "Professional Development",
  },
  {
    id: 11,
    title: "Strategic Admission Planning",
    description:
      "Our Strategic Admission Planning services assist schools in developing effective strategies to attract and retain students, ensuring sustainable growth.",
    icon: Calendar,
    category: "Strategic Planning",
  },
  {
    id: 12,
    title: "School Administration Solutions",
    description:
      "Our administrative software solutions are designed to optimize school operations, including admissions, fee management, human resources, and facility management.",
    icon: Settings,
    category: "Administration",
  },
  {
    id: 13,
    title: "Digital Marketing",
    description:
      "Utilizing Digital Marketing, we effectively promote educational institutions and programs, leveraging online platforms to reach and engage target audiences.",
    icon: Globe,
    category: "Marketing",
  },
  {
    id: 14,
    title: "IT Infrastructure and Support",
    description:
      "From setting up computer labs to ensuring secure internet connectivity, we offer IT infrastructure solutions that support the technological needs of modern schools.",
    icon: Zap,
    category: "IT Solutions",
  },
  {
    id: 15,
    title: "Security and Compliance Solutions",
    description:
      "We help schools implement robust security measures to protect student data and ensure compliance with educational regulations and cybersecurity solutions.",
    icon: Shield,
    category: "Security",
  },
  {
    id: 16,
    title: "Custom Solutions and Consulting",
    description:
      "We offer customized solutions and consulting services to address specific challenges and goals, providing tailored strategies that deliver measurable results.",
    icon: Sparkles,
    category: "Consulting",
  },
];

const ServiceCard = ({ service, index, hoveredService, setHoveredService }) => {
  const IconComponent = service.icon;
  const isHovered = hoveredService === service.id;

  return (
    <div
      className={`group relative overflow-hidden bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full`}
      onMouseEnter={() => setHoveredService(service.id)}
      onMouseLeave={() => setHoveredService(null)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
            {service.category}
          </span>
        </div>
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>
        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
          Learn More
          <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16" data-animate id="services-header">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Comprehensive Educational Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Services Offered</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Cultive is reimagining education management to create more time for what truly matters: teaching and
            learning. Our comprehensive suite of services transforms educational institutions through innovation and
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate id="services-grid">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              hoveredService={hoveredService}
              setHoveredService={setHoveredService}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8" data-animate id="stats">
          {[
            { number: "16+", label: "Comprehensive Services", color: "text-blue-600" },
            { number: "100%", label: "Customizable Solutions", color: "text-purple-600" },
            { number: "24/7", label: "Support Available", color: "text-emerald-600" },
            { number: "∞", label: "Growth Possibilities", color: "text-yellow-600" },
          ].map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
