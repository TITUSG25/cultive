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
  Heart,
  Zap,
  Star,
} from "lucide-react";

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);

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
      delay: 0.1,
    },
    {
      id: 2,
      title: "Curriculum Development and Support",
      description:
        "We seamlessly integrate Activity-Based Learning (ABL) into the curriculum while continuously refining our pedagogical methods, and our team of experts collaborates closely with schools to design, implement, and update curriculum that align with current educational standards and best practices.",
      icon: BookOpen,
      color: "from-green-600 to-teal-600",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Psychological Counseling",
      description:
        "Our Psychological Counseling services offer essential support for the mental health and well-being of students, parents, and educators, fostering a positive and resilient educational environment.",
      icon: Heart,
      color: "from-pink-600 to-rose-600",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Educational Technology Integration",
      description:
        "We provide cutting-edge educational technology tools and platforms that facilitate interactive learning, digital classrooms, and seamless communication between students and teachers. Our solutions include Learning Management Systems (LMS), language labs, and e-learning content development.",
      icon: Monitor,
      color: "from-indigo-600 to-blue-600",
      delay: 0.4,
    },
    {
      id: 5,
      title: "Soft Skills and Personality Training",
      description:
        "Through Soft Skills and Personality Training, we deliver seminars and workshops that focus on cultivating crucial interpersonal abilities and enhancing personality development, equipping individuals with the skills needed to succeed in both academic and professional settings.",
      icon: Users,
      color: "from-orange-600 to-red-600",
      delay: 0.5,
    },
    {
      id: 6,
      title: "Career Counseling and Guidance",
      description:
        "Our Career Counseling and Guidance services empower students to make informed and strategic decisions about their future career paths, providing them the knowledge and confidence to pursue their ambitions.",
      icon: MapPin,
      color: "from-purple-600 to-pink-600",
      delay: 0.6,
    },
    {
      id: 7,
      title: "Students Information Systems (SIS)",
      description:
        "We offer comprehensive SIS solutions that streamline student data management, including attendance, grading, and reporting, ensuring that schools can efficiently manage and track student progress.",
      icon: Brain,
      color: "from-cyan-600 to-blue-600",
      delay: 0.7,
    },
    {
      id: 8,
      title: "Students Service Centre (SSC)",
      description:
        "The Students Services Center (SSC) serves as a centralized hub dedicated to supporting the diverse needs of students throughout their academic journey, providing a wide range of essential services designed to enhance student success, well-being, and overall campus experience.",
      icon: Building,
      color: "from-teal-600 to-green-600",
      delay: 0.8,
    },
    {
      id: 9,
      title: "Outbound Training Programs",
      description:
        "We conduct Outbound Training Programs that use experiential learning to develop teamwork, leadership, and practical skills, offering participants hands-on experiences that translate to real-world success.",
      icon: Target,
      color: "from-amber-600 to-orange-600",
      delay: 0.9,
    },
    {
      id: 10,
      title: "Faculty Development Programs (FDP)",
      description:
        "We provide ongoing professional development programs and workshops for teachers and staff, focusing on modern teaching techniques, technology integration, and classroom management.",
      icon: Lightbulb,
      color: "from-yellow-600 to-amber-600",
      delay: 1.0,
    },
    {
      id: 11,
      title: "Strategic Admission Planning",
      description:
        "Our Strategic Admission Planning services assist schools in developing effective strategies to attract and retain students, ensuring sustainable growth and a strong academic community.",
      icon: Calendar,
      color: "from-emerald-600 to-teal-600",
      delay: 1.1,
    },
    {
      id: 12,
      title: "School Administration Solutions",
      description:
        "Our administrative software solutions are designed to optimize school operations, including admissions, fee management, human resources, and facility management, allowing administrators to focus more on educational outcomes.",
      icon: Settings,
      color: "from-slate-600 to-gray-600",
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
      delay: 1.4,
    },
    {
      id: 15,
      title: "Security and Compliance Solutions",
      description:
        "We help schools implement robust security measures to protect student data and ensure compliance with local and international educational regulations. Our services include cybersecurity solutions, data protection policies, and compliance audits.",
      icon: Shield,
      color: "from-red-600 to-pink-600",
      delay: 1.5,
    },
    {
      id: 16,
      title: "Custom Solutions and Consulting",
      description:
        "We understand that every school is unique, and we offer customized solutions and consulting services to address specific challenges and goals. Whether it's integrating new technologies or improving operational efficiency, we provide tailored strategies that deliver results.",
      icon: Sparkles,
      color: "from-indigo-600 to-purple-600",
      delay: 1.6,
    },
  ];

  // Generate random stars
  const generateStars = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));
  };

  const stars = generateStars();

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
    {
      id: 5,
      title: "Music, Art & Craft and Dance (MAD)",
      description:
        "Creative arts programs fostering imagination, cultural expression, and artistic talents through comprehensive music, visual arts, and dance curriculum.",
      icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
      color: "bg-gradient-to-br from-orange-500 to-amber-600",
    },
  ];
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Cultive's software solutions have significantly streamlined our school operations, making daily tasks, reporting, and data management efficient and hassle-free.",
      name: "Dr. Boomi Nathan",
      title: "Principal – St.John's School, Chennai",
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

      {/* Our premium services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Stars Background */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
                Our Services
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-4 animate-expand"></div>
            </div>
            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
              Discover our comprehensive suite of educational solutions designed to enhance learning experiences and
              streamline institutional operations.
            </p>
          </div>

          {/* Services Grid - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  className="group relative"
                  style={{ animationDelay: `${service.delay}s` }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Card - Horizontal Layout */}
                  <div className="relative bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-indigo-900/50 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 transition-all duration-700 hover:scale-105 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden animate-slide-up min-h-[320px] flex flex-col">
                    {/* Glowing Background Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl`}
                    ></div>

                    {/* Static Border Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 group-hover:border-blue-400/50"></div>
                    </div>

                    {/* Top Section with Number and Icon */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Service Number */}
                      <div className="text-4xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Icon Container */}
                      <div className="relative z-10">
                        <div className="relative inline-block">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-2xl`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          {/* Icon Glow Effect */}
                          <div
                            className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-all duration-500">
                        {service.title}
                      </h3>
                      <p className="text-blue-200/80 text-sm leading-relaxed group-hover:text-blue-100/90 transition-all duration-500">
                        {service.description}
                      </p>
                    </div>

                    {/* Floating Particles */}
                    {isHovered && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-up opacity-70"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              bottom: "20px",
                              animationDelay: `${i * 0.3}s`,
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                    {/* Corner Decorative Element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-10px) rotate(5deg);
            }
            66% {
              transform: translateY(5px) rotate(-5deg);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes expand {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes border-glow {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes float-up {
            0% {
              transform: translateY(0px);
              opacity: 1;
            }
            100% {
              transform: translateY(-60px);
              opacity: 0;
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-expand {
            animation: expand 1.5s ease-out forwards;
          }

          .animate-border-glow {
            animation: border-glow 2s linear infinite;
          }

          .animate-float-up {
            animation: float-up 3s linear infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-white relative">
        <style>
          {`
      @keyframes shimmer-once {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .feature-card {
        position: relative;
        overflow: hidden;
        border-radius: 16px;
        transition: all 0.4s ease;
      }
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      .feature-card::before {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        border-radius: 16px;
        background: linear-gradient(135deg, #fbb040, #ff7e5f, #fbb040);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      .feature-card:hover::before {
        opacity: 1;
      }
      .premium-tag {
        position: absolute;
        top: 12px;
        right: 0;
        background: linear-gradient(90deg, #ff9800, #f44336);
        background-size: 200% 100%;
        animation: shimmer-once 1.5s linear 1;
        color: white;
        padding: 4px 14px;
        font-size: 12px;
        font-weight: bold;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        letter-spacing: 1px;
      }
      .icon-animate {
        animation: pulse 2s infinite ease-in-out;
      }
    `}
        </style>

        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-[#283a89]">
              OUR EXCLUSIVE <span className="text-[#fbb040]">& PREMIUM SERVICES</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Experience cutting-edge technology solutions designed specifically for modern educational environments.
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={feature.id} className="feature-card bg-white p-8 shadow-lg relative">
                <div className="premium-tag">PREMIUM</div>

                <div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg icon-animate`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#283a89] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <div key={feature.id} className="feature-card bg-white p-8 shadow-lg relative">
                <div className="premium-tag">PREMIUM</div>

                <div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg icon-animate`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-8 h-8"
                  >
                    {feature.id === 5 ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 19V6l12-2v13M9 19a2 2 0 11-4 0 2 2 0 014 0zm12-2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    )}
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#283a89] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
