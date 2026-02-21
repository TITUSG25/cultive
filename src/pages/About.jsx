import { useEffect, useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Shield,
  Lightbulb,
  School,
  ArrowUpRight,
  Zap,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

import TeamSection from "../components/TeamSection";
const About = () => {
  // State for animations
  const [hoveredValue, setHoveredValue] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Core Principles data with matching icons from home page
  const principles = [
    {
      id: "01",
      title: "Excellence",
      subtitle: "Beyond Standards",
      description:
        "Crafting educational experiences that transcend conventional boundaries through meticulous attention to detail and innovative pedagogical approaches.",
      icon: Award,
      gradient: "from-violet-600 via-purple-600 to-indigo-700",
      glowColor: "shadow-violet-500/25",
      accentGradient: "from-yellow-400 to-orange-500",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
    },
    {
      id: "02",
      title: "Innovation",
      subtitle: "Future Forward",
      description:
        "Pioneering tomorrow's learning solutions today with cutting-edge technology integration and forward-thinking educational methodologies.",
      icon: Lightbulb,
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      glowColor: "shadow-emerald-500/25",
      accentGradient: "from-pink-400 to-rose-500",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
    },
    {
      id: "03",
      title: "Integrity",
      subtitle: "Trust Foundation",
      description:
        "Building lasting partnerships through transparent practices, ethical innovation, and unwavering commitment to educational excellence.",
      icon: Shield,
      gradient: "from-amber-500 via-orange-600 to-red-600",
      glowColor: "shadow-amber-500/25",
      accentGradient: "from-blue-400 to-indigo-500",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
    },
    {
      id: "04",
      title: "Impact",
      subtitle: "Measurable Change",
      description:
        "Creating transformative educational outcomes that resonate beyond classrooms, shaping minds and building tomorrow's leaders.",
      icon: Target,
      gradient: "from-rose-500 via-pink-600 to-purple-700",
      glowColor: "shadow-rose-500/25",
      accentGradient: "from-green-400 to-emerald-500",
      bgPattern: "radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.1) 0%, transparent 50%)",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Methodology data
  const methodology = [
    {
      id: 1,
      number: "01",
      title: "Assessment & Analysis",
      description:
        "Comprehensive evaluation of current educational needs and learning objectives to create targeted solutions.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      number: "02",
      title: "Collaborative Planning",
      description:
        "Working closely with educators and stakeholders to design customized learning pathways and strategies.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      number: "03",
      title: "Content Development",
      description:
        "Creating engaging, interactive educational materials tailored to diverse learning styles and preferences.",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      number: "04",
      title: "Implementation",
      description:
        "Seamless deployment of educational solutions with ongoing support and guidance throughout the process.",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      number: "05",
      title: "Quality Assurance",
      description:
        "Rigorous testing and validation to ensure all educational materials meet the highest standards of excellence.",
      icon: Award,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      number: "06",
      title: "Continuous Improvement",
      description:
        "Regular monitoring and optimization based on feedback and performance metrics for sustained success.",
      icon: TrendingUp,
      color: "from-teal-500 to-blue-500",
    },
  ];

  
  const getAccentClasses = (accent) => {
    const accentMap = {
      emerald: "from-emerald-500 to-teal-600",
      blue: "from-blue-500 to-indigo-600",
      purple: "from-purple-500 to-violet-600",
      pink: "from-pink-500 to-rose-600",
      orange: "from-orange-500 to-amber-600",
      cyan: "from-cyan-500 to-blue-600",
      red: "from-red-500 to-pink-600",
      indigo: "from-indigo-500 to-purple-600",
    };
    return accentMap[accent] || "from-gray-500 to-slate-600";
  };

  // Company values with matching gradients from home page
  const values = [
    {
      id: 1,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in educational technology, creating cutting-edge solutions that transform learning experiences.",
      icon: Zap,
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Accessibility",
      description:
        "We believe quality education tools should be accessible to all schools and students, regardless of their economic situation or geographic location.",
      icon: Shield,
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      id: 3,
      title: "Empowerment",
      description:
        "We create tools that empower educators to teach more effectively and students to learn more deeply, fostering growth and achievement.",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      title: "Growth",
      description:
        "We foster continuous growth and improvement for our platform and for the educators who use it, always striving for excellence.",
      icon: Star,
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-yellow-50",
    },
  ];
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

  const TeamCard = ({ member, index }) => (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all duration-500 hover:scale-105 hover:bg-white/20"
      onMouseEnter={() => setHoveredCard(member.id)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
      }}
    >
      {/* Dynamic background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Glowing border effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse ${
              hoveredCard === member.id ? "animate-bounce" : ""
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
            />
            <div
              className={`relative w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
            >
              <img src={member.image} alt={member.name} className="w-12 h-12 object-cover rounded-lg" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
              {member.name}
            </h3>
            <div className={`inline-block px-3 py-1 bg-gradient-to-r ${member.gradient} rounded-full mt-1 mb-2`}>
              <p className="text-xs font-semibold text-white">{member.title}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
          {member.bio}
        </p>
      </div>

      {/* Animated corner accent */}
      <div
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${member.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`}
      />

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-white mt-8">
      {/* Custom Styles - Same as Home Page */}
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

        .neon-border {
          position: relative;
          overflow: hidden;
          z-index: 0;
        }

        .neon-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 0;
          border-top: 3px solid transparent;
          border-right: 3px solid transparent;
          border-image: linear-gradient(45deg, #fbb040, #f59e0b);
          border-image-slice: 1;
          animation: neonBorderHover 2s linear infinite;
          z-index: 10;
        }

        @keyframes neonBorderHover {
          0% {
            width: 0;
            height: 0;
            left: 50%;
            top: 0;
          }
          50% {
            width: 50%;
            height: 0;
            left: 50%;
            top: 0;
          }
          100% {
            width: 0;
            height: 50%;
            left: 100%;
            top: 0;
          }
        }
      `}</style>

      {/* Hero Section - About Us */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white mt-0 pt-20 md:pt-25">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 animate-slide-left order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#283a89] text-shadow">
                Transforming Education with
                <span className="text-[#fbb040]"> Digital Excellence</span>
              </h1>
              <div className="space-y-4 text-[#283a89] text-base leading-snug font-medium">
                <p>
                  Cultive is a leading solution service provider dedicated to empowering schools with innovative,
                  technology-driven solutions that enhance the educational experience for students, teachers, and
                  administrators.
                </p>

                <p>
                  Our mission is to support educational institutions in creating dynamic, efficient, and engaging
                  learning environments by offering a comprehensive range of products and services tailored to meet the
                  unique needs of each school.
                </p>

                <p>
                  Cultive serves schools, teachers, parents, and students across the globe, making education more
                  accessible, efficient, and effective.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div
              className="relative animate-slide-right order-1 lg:order-2 mb-8 lg:mb-0"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Educational Innovation"
                  className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-[#283a89] to-[#fbb040] rounded-2xl opacity-20 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Principles */}
      {/* Our Core Principles */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
                Our Core Principles
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-4 animate-expand"></div>
            </div>
            <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed text-base opacity-90">
              The driving forces behind our educational revolution – where innovation meets excellence in transformative
              learning experiences.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const isHovered = hoveredCard === principle.id;

              return (
                <div
                  key={principle.id}
                  className="group relative"
                  style={{ animationDelay: `${principle.delay || index * 0.2}s` }}
                  onMouseEnter={() => setHoveredCard(principle.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-indigo-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 transition-all duration-700 hover:scale-105 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden animate-slide-up min-h-[320px] flex flex-col">
                    {/* Glowing Background Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        principle.gradient || "from-blue-500 to-purple-600"
                      } opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-2xl`}
                    ></div>

                    {/* Static Border Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 group-hover:border-blue-400/50"></div>
                    </div>

                    {/* Top Section with Number and Icon */}
                    <div className="flex items-start justify-between mb-5">
                      {/* Principle Number */}
                      <div className="text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Icon Container */}
                      <div className="relative z-10">
                        <div className="relative inline-block">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                              principle.gradient || "from-blue-500 to-purple-600"
                            } flex items-center justify-center transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-2xl`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          {/* Icon Glow Effect */}
                          <div
                            className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${
                              principle.gradient || "from-blue-500 to-purple-600"
                            } rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-all duration-500">
                        {principle.title}
                      </h3>
                      {principle.subtitle && (
                        <div className="text-sm font-semibold text-amber-300 mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                          {principle.subtitle}
                        </div>
                      )}
                      <p className="text-blue-200/80 text-sm leading-relaxed group-hover:text-blue-100/90 transition-all duration-500">
                        {principle.description}
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

          @keyframes expand {
            from {
              width: 0;
            }
            to {
              width: 100%;
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

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          .animate-expand {
            animation: expand 1.5s ease-out forwards;
          }

          .animate-float-up {
            animation: float-up 3s linear infinite;
          }
        `}</style>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="text-[#283a89]">Our Core Values -</span>{" "}
              <span className="text-[#f97316]">Excellence & Innovation</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The driving forces behind our commitment to transforming educational experiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className="neon-border group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover-lift relative overflow-hidden animate-fade-up transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:brightness-110 transition duration-300 shadow-md`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 text-[#283a89] group-hover:text-[#fbb040] transition-colors">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>

                  {/* Decorative Dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#fbb040] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 bg-[#0d1a45]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stars opacity-20 animate-star-twinkle"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 bg-[#1e2a6d] rounded-3xl border border-white border-opacity-10 shadow-xl overflow-hidden animate-fade-up group">
          <div className="relative z-30">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Methodology</h2>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Our systematic approach to delivering exceptional educational solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    className="group/card relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-500 animate-fade-up hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover/card:from-blue-400/10 group-hover/card:via-purple-400/10 group-hover/card:to-cyan-400/10 transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl font-bold text-[#fbb040] mr-4 group-hover/card:text-yellow-300 transition-colors duration-300">
                          {method.number}
                        </div>
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover/card:shadow-xl group-hover/card:scale-110 transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white group-hover/card:text-blue-100 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-300 group-hover/card:text-gray-200 leading-relaxed text-sm transition-colors duration-300">
                        {method.description}
                      </p>

                      {/* Decorative corner accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 group-hover/card:opacity-100 group-hover/card:scale-150 transition-all duration-300"></div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/card:via-white/40 transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom CSS for additional animations */}
        <style jsx>{`
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-up {
            animation: fade-up 0.6s ease-out forwards;
          }

          .animate-star-twinkle {
            animation: twinkle 4s ease-in-out infinite alternate;
          }

          @keyframes twinkle {
            0% {
              opacity: 0.1;
            }
            100% {
              opacity: 0.3;
            }
          }

          .bg-stars {
            background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.6), transparent),
              radial-gradient(2px 2px at 160px 30px, #fff, transparent);
            background-repeat: repeat;
            background-size: 200px 100px;
          }
        `}</style>
      </section>

      {/* Team Section */}
      <TeamSection/>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up">
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
                <div className="w-16 h-16 bg-[#283a89] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#fbb040] transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#283a89] mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
