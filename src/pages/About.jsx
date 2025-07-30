import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Shield,
  Lightbulb,
  School,
  Heart,
  Zap,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

const About = () => {
  // State for animations
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isJourneyVisible, setIsJourneyVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);

  // Refs for animations
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const journeyRef = useRef(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  // Core Principles data with matching icons from home page
  const corePrinciples = [
    {
      id: 1,
      title: "Empathy",
      description: "Honoring each child's unique journey with personalized educational approaches.",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
      cardBg: "from-rose-50 via-pink-50 to-red-50",
      shadowColor: "shadow-rose-500/20",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Excellence",
      description: "Upholding high standards in educational psychology and technology solutions.",
      icon: Award,
      color: "from-[#283a89] to-blue-600",
      cardBg: "from-blue-50 via-indigo-50 to-slate-50",
      shadowColor: "shadow-blue-500/20",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Innovation",
      description: "Championing creativity and adaptive learning through cutting-edge technology.",
      icon: Lightbulb,
      color: "from-[#fbb040] to-amber-500",
      cardBg: "from-amber-50 via-yellow-50 to-orange-50",
      shadowColor: "shadow-amber-500/20",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Partnering with families, educators, and communities for holistic growth.",
      icon: Users,
      color: "from-teal-500 to-emerald-500",
      cardBg: "from-teal-50 via-emerald-50 to-green-50",
      shadowColor: "shadow-teal-500/20",
      delay: 0.4,
    },
  ];

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

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Reynolds",
      title: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Former educator with 15 years of experience in teaching and school administration. Leading the vision to transform educational technology.",
      skills: ["Leadership", "Education", "Strategy"],
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "Chief Technology Officer",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Tech innovator with extensive experience in educational software development. Passionate about creating scalable solutions.",
      skills: ["React", "Node.js", "AI/ML"],
    },
    {
      id: 3,
      name: "Marcus Wilson",
      title: "Head of Product",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Product specialist dedicated to creating intuitive educational tools. Focus on user experience and product strategy.",
      skills: ["UX Design", "Product Strategy", "Analytics"],
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Director of Education",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Education expert focused on aligning technology with pedagogical best practices. Curriculum development specialist.",
      skills: ["Pedagogy", "Curriculum", "Training"],
    },
  ];

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

  return (
    <div className="min-h-screen font-sans bg-white">
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

      {/* Our core principles */}

      <section className="mt-5 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
        {/* Custom Styles */}
        <style jsx>{`
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

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(1deg);
            }
          }

          @keyframes glow {
            0%,
            100% {
              box-shadow: 0 0 20px rgba(40, 58, 137, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(40, 58, 137, 0.5);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          .animate-fade-up {
            animation: fadeInUp 0.6s ease-out;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }

          .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }

          .glass-card {
            backdrop-filter: blur(16px);
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .excellence-card {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border: 1px solid rgba(226, 232, 240, 0.8);
          }

          .excellence-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #283a89, transparent);
            transition: left 0.6s ease-in-out;
            z-index: 10;
          }

          .excellence-card:hover::before {
            left: 100%;
          }

          .excellence-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px rgba(40, 58, 137, 0.15), 0 0 0 1px rgba(40, 58, 137, 0.1);
            border-color: rgba(40, 58, 137, 0.3);
          }

          .icon-container {
            position: relative;
            background: linear-gradient(135deg, #283a89 0%, #1e2d6f 100%);
            transition: all 0.4s ease;
          }

          .excellence-card:hover .icon-container {
            background: linear-gradient(135deg, #1e2d6f 0%, #162454 100%);
            transform: rotate(5deg) scale(1.1);
          }

          .excellence-card:hover .icon-container::after {
            content: "";
            position: absolute;
            inset: -4px;
            background: linear-gradient(135deg, #283a89, #5b21b6);
            border-radius: 16px;
            z-index: -1;
            opacity: 0.3;
            filter: blur(8px);
          }

          .text-primary {
            color: #1e293b;
          }

          .text-secondary {
            color: #475569;
          }

          .text-accent {
            color: #283a89;
          }

          .bg-accent {
            background: linear-gradient(135deg, #283a89 0%, #1e2d6f 100%);
          }
        `}</style>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-[#283a89] to-[#1e2d6f] rounded-full opacity-10 animate-float"></div>
          <div
            className="absolute top-32 right-16 w-12 h-12 bg-gradient-to-br from-purple-500 to-[#283a89] rounded-xl opacity-10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-[#283a89] rounded-full opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-24 right-1/3 w-14 h-14 bg-gradient-to-br from-[#283a89] to-purple-500 rounded-xl opacity-10 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23283a89' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card text-accent rounded-full text-sm font-semibold mb-6 shadow-lg">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-glow">
                <Award className="w-4 h-4 text-white" />
              </div>
              Core Values
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#fbb040] leading-tight">
              Our Core{" "}
              <span className="bg-gradient-to-r from-[#283a89] to-[#1e2d6f] bg-clip-text text-transparent">
                Principles
              </span>
            </h2>

            <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
              The fundamental values that guide our work and our relationship with the educational community, driving
              innovation and excellence in every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence Card */}
            <div className="excellence-card group p-8 rounded-xl shadow-lg relative animate-fade-up backdrop-blur-sm">
              {/* Icon */}
              <div className="relative mb-6">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-secondary leading-relaxed font-medium text-sm">
                  Upholding high standards in educational psychology and technology solutions with unwavering commitment
                  to quality.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#283a89] to-[#1e2d6f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </div>

            {/* Innovation Card */}
            <div
              className="excellence-card group p-8 rounded-xl shadow-lg relative animate-fade-up backdrop-blur-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative mb-6">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-secondary leading-relaxed font-medium text-sm">
                  Pioneering cutting-edge solutions that transform educational experiences through advanced technology
                  integration.
                </p>
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#283a89] to-[#1e2d6f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </div>

            {/* Integrity Card */}
            <div
              className="excellence-card group p-8 rounded-xl shadow-lg relative animate-fade-up backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative mb-6">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  Integrity
                </h3>
                <p className="text-secondary leading-relaxed font-medium text-sm">
                  Building trust through transparent practices, ethical conduct, and reliable educational technology
                  solutions.
                </p>
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#283a89] to-[#1e2d6f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </div>

            {/* Impact Card */}
            <div
              className="excellence-card group p-8 rounded-xl shadow-lg relative animate-fade-up backdrop-blur-sm"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative mb-6">
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  Impact
                </h3>
                <p className="text-secondary leading-relaxed font-medium text-sm">
                  Creating meaningful change in educational outcomes through research-backed psychology and technology
                  solutions.
                </p>
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#283a89] to-[#1e2d6f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-2 text-sm text-secondary font-medium">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#283a89] to-transparent"></div>
              <Star className="w-4 h-4 text-[#283a89]" />
              <span>Trusted by 500+ Educational Institutions</span>
              <Star className="w-4 h-4 text-[#283a89]" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#283a89] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fbb040] bg-opacity-10 text-[#283a89] rounded-full text-sm font-medium mb-4 border border-[#fbb040] border-opacity-30">
              <Lightbulb className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="text-4xl text-center text-[#283a89] font-extrabold mb-4">
              <span className="underline-animate">EXCELLENCE</span> &{" "}
              <span className="underline-animate">INNOVATION</span>
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
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#283a89] rounded-full text-sm font-medium mb-4 shadow-md border border-gray-200">
              <Users className="w-4 h-4" />
              Meet Our Team
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#283a89]">Expert Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the passionate educators and technologists driving our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-[#283a89] to-[#fbb040] text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
