import { useState, useEffect } from "react";
import NewHome from "./NewHome";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Monitor,
  Users,
  MapPin,
  Calendar,
  Building,
  Target,
  Globe,
  Shield,
  Settings,
  Sparkles,
  Lightbulb,
  School,
  Heart,
  Zap,
  Star,
  Award,
} from "lucide-react";
import rocket_design from "../assets/rocket_design.png";
import bulb_img from "../assets/bulb_img.png";
import book_design from "../assets/book_design.png";
import aim_arrow from "../assets/aim_arrow.png";
import cultive_arrow from "../assets/cultive_arrow.png";
import calculator from "../assets/calculator.png";

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services data
  const services = [
    {
      id: 1,
      title: "Individualized Education Plans (IEPs)",
      description:
        "We craft Individualized Education Plans (IEPs) that guide personalized learning journeys tailored to each student's unique needs, beginning from birth and evolving throughout their developmental stages.",
      icon: GraduationCap,
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-50",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Curriculum Development and Support",
      description:
        "We seamlessly integrate Activity-Based Learning (ABL) into the curriculum while continuously refining our pedagogical methods, and our team of experts collaborates closely with schools to design, implement, and update curriculum that align with current educational standards and best practices.",
      icon: BookOpen,
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Psychological Counseling",
      description:
        "Our Psychological Counseling services offer essential support for the mental health and well-being of students, parents, and educators, fostering a positive and resilient educational environment.",
      icon: Heart,
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-50",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Educational Technology Integration",
      description:
        "We provide cutting-edge educational technology tools and platforms that facilitate interactive learning, digital classrooms, and seamless communication between students and teachers. Our solutions include Learning Management Systems (LMS), language labs, and e-learning content development.",
      icon: Monitor,
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50",
      delay: 0.4,
    },
    {
      id: 5,
      title: "Soft Skills and Personality Training",
      description:
        "Through Soft Skills and Personality Training, we deliver seminars and workshops that focus on cultivating crucial interpersonal abilities and enhancing personality development, equipping individuals with the skills needed to succeed in both academic and professional settings.",
      icon: Users,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      delay: 0.5,
    },
    {
      id: 6,
      title: "Career Counseling and Guidance",
      description:
        "Our Career Counseling and Guidance services empower students to make informed and strategic decisions about their future career paths, providing them the knowledge and confidence to pursue their ambitions.",
      icon: MapPin,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      delay: 0.6,
    },
    {
      id: 7,
      title: "Students Information Systems (SIS)",
      description:
        "We offer comprehensive SIS solutions that streamline student data management, including attendance, grading, and reporting, ensuring that schools can efficiently manage and track student progress.",
      icon: Brain,
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      delay: 0.7,
    },
    {
      id: 8,
      title: "Students Service Centre (SSC)",
      description:
        "The Students Services Center (SSC) serves as a centralized hub dedicated to supporting the diverse needs of students throughout their academic journey, providing a wide range of essential services designed to enhance student success, well-being, and overall campus experience.",
      icon: Building,
      color: "from-teal-600 to-green-600",
      bgColor: "bg-teal-50",
      delay: 0.8,
    },
    {
      id: 9,
      title: "Outbound Training Programs",
      description:
        "We conduct Outbound Training Programs that use experiential learning to develop teamwork, leadership, and practical skills, offering participants hands-on experiences that translate to real-world success.",
      icon: Target,
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-50",
      delay: 0.9,
    },
    {
      id: 10,
      title: "Faculty Development Programs (FDP)",
      description:
        "We provide ongoing professional development programs and workshops for teachers and staff, focusing on modern teaching techniques, technology integration, and classroom management.",
      icon: Lightbulb,
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-yellow-50",
      delay: 1.0,
    },
    {
      id: 11,
      title: "Strategic Admission Planning",
      description:
        "Our Strategic Admission Planning services assist schools in developing effective strategies to attract and retain students, ensuring sustainable growth and a strong academic community.",
      icon: Calendar,
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
      delay: 1.1,
    },
    {
      id: 12,
      title: "School Administration Solutions",
      description:
        "Our administrative software solutions are designed to optimize school operations, including admissions, fee management, human resources, and facility management, allowing administrators to focus more on educational outcomes.",
      icon: Settings,
      color: "from-slate-600 to-gray-600",
      bgColor: "bg-slate-50",
      delay: 1.2,
    },
    {
      id: 13,
      title: "Digital Marketing",
      description:
        "Utilizing Digital Marketing, we effectively promote educational institutions and programs, leveraging online platforms to reach and engage target audiences with precision and impact.",
      icon: Globe,
      color: "from-violet-600 to-purple-600",
      bgColor: "bg-violet-50",
      delay: 1.3,
    },
    {
      id: 14,
      title: "IT Infrastructure and Support",
      description:
        "From setting up computer labs to ensuring secure and reliable internet connectivity, we offer IT infrastructure solutions that support the technological needs of modern schools. Our services include network design, hardware procurement, and ongoing technical support.",
      icon: Zap,
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      delay: 1.4,
    },
    {
      id: 15,
      title: "Security and Compliance Solutions",
      description:
        "We help schools implement robust security measures to protect student data and ensure compliance with local and international educational regulations. Our services include cybersecurity solutions, data protection policies, and compliance audits.",
      icon: Shield,
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-50",
      delay: 1.5,
    },
    {
      id: 16,
      title: "Custom Solutions and Consulting",
      description:
        "We understand that every school is unique, and we offer customized solutions and consulting services to address specific challenges and goals. Whether it's integrating new technologies or improving operational efficiency, we provide tailored strategies that deliver results.",
      icon: Sparkles,
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      delay: 1.6,
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "School Management Software",
      description:
        "Comprehensive digital solution to streamline all school operations, from admissions to academic management with real-time data insights.",
      icon: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Language, Math & Robotic Labs Setup",
      description:
        "State-of-the-art laboratory setup with cutting-edge equipment and interactive learning environments for enhanced STEM education.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Trainings, Workshops & Seminars",
      description:
        "Comprehensive professional development programs for teachers, students, and parents to enhance skills and knowledge across all educational domains.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "IEP & Psychological Counseling",
      description:
        "Individualized Education Plans and professional psychological counseling services to support student mental health and personalized learning journeys.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Cultive's software solutions have significantly streamlined our school operations, making daily tasks, reporting, and data management efficient and hassle-free.",
      name: "Dr. Vinnoly Gaberial",
      title: "Principal – AVMS, Chennai",
      role: "Principal",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The unique and well-designed IEP provided by Cultive has given us valuable clarity and insight into our child’s development. We feel privileged to partner with Cultive, whose support has greatly enhanced our understanding and positively impacted our child’s growth.",
      name: "Remali Sarah",
      title: "Parent, Housewife, Trichy",
      role: "Parent",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Cultive's Faculty Development Program (FDP) has been a powerful, insightful, and transformative experience that has significantly enriched our teaching methodologies. I am proud to have been trained by Cultive and to say that I am a proud school teacher confidently. The training insights and knowledge imparted were both meaningful and impactful.",
      name: "Bhadhur Nisha",
      title: "School Teacher – St. Joseph’s Global School, Chennai",
      role: "Teacher",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Cultive's workshops and seminars provided us with an enriching and enjoyable learning experience. I feel fortunate to have Cultive as part of our school community, and I especially appreciate the opportunity to learn music, dance, art, and craft through their engaging programs.",
      name: "Annanya",
      title: "Student, DMI group of institutions",
      role: "Student",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes underlineFill {
          0% {
            background-size: 0% 3px, 0% 3px;
          }
          50% {
            background-size: 100% 3px, 0% 3px;
          }
          100% {
            background-size: 100% 3px, 100% 3px;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-left {
          animation: slideInFromLeft 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slideInFromRight 0.8s ease-out;
        }

        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate 10s linear infinite;
        }

        .parallax-bg {
          transform: translateY(${scrollY * 0.3}px);
        }

        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(40, 58, 137, 0.15);
        }

        .underline-animate {
          font-weight: 900;
          position: relative;
          display: inline-block;
          padding-bottom: 5px;
          background-image: linear-gradient(to right, #283a89 100%, transparent 0),
            linear-gradient(to right, #fbb040 100%, transparent 0);
          background-repeat: no-repeat;
          background-position: 0 100%, 0 100%;
          background-size: 0% 3px, 0% 3px;
          animation: underlineFill 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* Hero Section */}
      <NewHome />

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23283a89' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#283a89] rounded-full text-sm font-medium mb-4 shadow-md border border-gray-200">
              <Award className="w-4 h-4" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#283a89]">Premium Educational Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive suite of educational solutions designed to enhance learning experiences and
              streamline institutional operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-amber-400 relative overflow-hidden animate-fade-up transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  style={{ animationDelay: `${service.delay}s` }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Service Icon */}
                  <div className="relative mb-6 z-10">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#283a89] to-[#1e2a5e] flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Glowing background effect on hover */}
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-[#283a89] group-hover:text-[#283a89] transition-all duration-300 transform group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up">
            {[
              { number: "500+", label: "Educational Institutions", icon: School },
              { number: "10K+", label: "Active Teachers", icon: Users },
              { number: "50K+", label: "Students Served", icon: GraduationCap },
              { number: "99%", label: "Satisfaction Rate", icon: Star },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#283a89] to-[#1e2a5e] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 mx-auto"></div>
                </div>
                <div className="text-3xl font-bold text-[#283a89] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        {/* Custom Styles */}
        <style>
          {`
            .feature-card {
              position: relative;
              overflow: hidden;
            }
            
            .feature-card::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: conic-gradient(from 0deg, transparent, #fbb040, transparent);
              opacity: 0;
              transition: all 0.6s ease;
              animation: rotate 3s linear infinite;
              z-index: 0;
            }
            
            .feature-card:hover::before {
              opacity: 0.1;
            }
            
            .feature-card::after {
              content: '';
              position: absolute;
              inset: 2px;
              background: white;
              border-radius: 10px;
              z-index: 1;
            }
            
            .feature-content {
              position: relative;
              z-index: 2;
            }
            
            @keyframes rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            .shimmer-effect {
              position: relative;
              overflow: hidden;
            }
            
            .shimmer-effect::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -100%;
              width: 50%;
              height: 200%;
              background: linear-gradient(90deg, transparent, rgba(251, 176, 64, 0.4), transparent);
              transform: skewX(-20deg);
              transition: left 0.8s ease;
            }
            
            .feature-card:hover .shimmer-effect::before {
              left: 100%;
            }
          `}
        </style>

        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fbb040] bg-opacity-10 text-[#283a89] rounded-full text-sm font-medium mb-4 border border-[#fbb040] border-opacity-30">
              <Lightbulb className="w-4 h-4" />
              Premium Services
            </div>
            <h2 className="text-4xl text-center text-[#283a89] font-extrabold mb-4">
              <span>EXCLUSIVE</span> & <span>PREMIUM</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience cutting-edge technology solutions designed specifically for modern educational environments.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-card group bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-content">
                  {/* Icon with shimmer effect */}
                  <div className="relative mb-6">
                    <div
                      className={`shimmer-effect w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-[#283a89] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Single top-right dot - always visible */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#fbb040] rounded-full"></div>

                  {/* Animated corner border on hover - appears around the dot */}
                  <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-[#fbb040] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#283a89]">Trusted by Educational Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm">
              Hear from institutions that have transformed their educational experience with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                {/* Role tag */}
                <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {testimonial.role}
                </span>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  “{testimonial.quote}”
                </blockquote>

                {/* Name & Title */}
                <p className="text-[#283a89] font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs mt-1">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-[#0d1a45]">
        {/* 🌌 Background Image (students/education themed) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/path-to-your-education-themed-image.png')" }}
        ></div>

        {/* 💬 Main Content Card */}
        <div className="relative max-w-5xl mx-auto px-6 py-12 bg-[#1e2a6d] bg-opacity-90 rounded-3xl shadow-2xl backdrop-blur-md">
          {/* 💡 CTA Text */}
          <div className="relative z-30 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of educational institutions worldwide that trust{" "}
              <span className="text-yellow-400 font-medium">Cultive</span> for their digital transformation journey.
            </p>

            {/* 📊 Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white border-opacity-10">
              <div className="text-sm text-gray-400 mb-4 tracking-wide">
                Trusted by educational institutions worldwide
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 text-white opacity-90">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs tracking-wider mt-1">Institutions</div>
                </div>
                <div className="w-px h-8 bg-white opacity-30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs tracking-wider mt-1">Countries</div>
                </div>
                <div className="w-px h-8 bg-white opacity-30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-xs tracking-wider mt-1">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
