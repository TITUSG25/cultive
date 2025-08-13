import { useState, useEffect } from "react";
import { X, Menu, ChevronRight, Home, Users, Zap, Phone } from "lucide-react";
import rocket_design from "../assets/rocket_design.png";
import bulb_img from "../assets/bulb_img.png";
import cultive_logo from "../assets/cultive_logo.svg";

const NewHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event to change navbar appearance and other animations - FASTER TRANSITIONS
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
      setScrollY(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { text: "Home", path: "/", icon: Home },
    { text: "About Us", path: "/about", icon: Users },
    { text: "Services", path: "/services", icon: Zap },
    { text: "Contact", path: "/contact", icon: Phone },
  ];

  const Logo = () => (
    <a href="/" className="flex items-center">
      <div className="flex flex-col items-start">
        <div className="flex-shrink-0">
          <img
            src={cultive_logo}
            alt="Cultive Logo"
            className={`object-contain transition-all duration-150 ${
              scrolled
                ? "w-16 h-12 sm:w-18 sm:h-14 md:w-20 md:h-16 lg:w-24 lg:h-18"
                : "w-24 h-18 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-26"
            }`}
          />
        </div>
        <p
          className={`text-sm pl-2 font-medium text-slate-600 transition-all duration-150 -mt-1 ${
            scrolled ? "text-xs -mt-0.5" : "text-sm -mt-1"
          }`}
        >
          The solution ocean
        </p>
      </div>
    </a>
  );

  const DesktopNavLink = ({ href, children, icon: IconComponent }) => {
    const isActive = activeLink === href;

    return (
      <a
        href={href}
        onClick={() => setActiveLink(href)}
        className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-150 relative group ${
          scrolled ? "text-[#283a89]" : "text-white"
        }`}
      >
        <IconComponent className="w-4 h-4" />
        <span>{children}</span>
        {/* Underline animation with gradient - active state */}
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-200 ease-out ${
            scrolled ? "underline-gradient" : "bg-white"
          } ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`}
        ></div>
      </a>
    );
  };

  const MobileNavLink = ({ href, children, icon: IconComponent, onClick }) => (
    <a
      href={href}
      onClick={(e) => {
        setActiveLink(href);
        onClick();
      }}
      className="flex items-center justify-between p-6 text-slate-700 transition-colors duration-150 border-b border-slate-100 last:border-b-0"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-blue-600" />
        </div>
        <span className="font-medium text-lg">{children}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-400" />
    </a>
  );

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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.3);
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

        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }

        .parallax-bg {
          transform: translateY(${scrollY * 0.3}px);
        }

        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Gradient underline */
        .underline-gradient {
          background: linear-gradient(90deg, #fbb040 0%, #fbb040 50%, #283a89 50%, #283a89 100%);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Fixed Navbar Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-150 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-0.5 border-b border-slate-200/30"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <DesktopNavLink key={item.text} href={item.path} icon={item.icon}>
                  {item.text}
                </DesktopNavLink>
              ))}
            </nav>

            {/* Mobile Menu Button - FIXED FOR MOBILE VISIBILITY */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-opacity-50 z-50 ${
                scrolled
                  ? "text-slate-600 hover:text-slate-800 focus:ring-blue-500 bg-white/80 hover:bg-white"
                  : "text-white hover:text-slate-200 focus:ring-white bg-black/20 hover:bg-black/30"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-xl transform transition-transform duration-200 ease-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img src={cultive_logo} alt="Cultive Logo" className="w-10 h-8 object-contain" />
                <div>
                  <h3 className="font-bold text-[#283a89]">Cultive</h3>
                  <p className="text-xs text-slate-500">The solution ocean</p>
                </div>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-slate-500 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navItems.map((item, index) => (
                <div
                  key={item.text}
                  className="opacity-0 animate-slideIn"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <MobileNavLink href={item.path} icon={item.icon} onClick={() => setIsSidebarOpen(false)}>
                    {item.text}
                  </MobileNavLink>
                </div>
              ))}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <div className="text-center">
                <p className="text-sm font-medium text-slate-600">© 2025 Cultive</p>
                <p className="text-xs text-orange-500 font-medium mt-1">The Solution Ocean</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="flex w-full min-h-screen flex-col lg:flex-row">
          {/* Left Section - White Background */}
          <div className="flex-1 bg-white relative">
            <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
              <div className="space-y-6 animate-slide-left m-4 lg:m-12 mt-40">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[#283a89] text-shadow">
                  Transforming Education with
                  <span className="text-[#fbb040]"> Digital Excellence</span>
                </h1>
                <p className="text-base lg:text-lg text-[#283a89] leading-relaxed max-w-lg font-medium">
                  Experience the future of education management with our comprehensive suite of innovative solutions
                  designed for modern educational institutions.
                </p>
              </div>
            </div>

            {/* Rocket Image - Hidden on mobile, visible on larger screens */}
            <div className="absolute bottom-0 right-0 animate-slide-right flex-col justify-end items-center h-full hidden lg:flex">
              <div className="relative mb-0">
                <img
                  src={rocket_design}
                  alt="Rocket"
                  className="w-80 h-auto animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Gradient Background */}
          <div
            className="flex-1 relative overflow-hidden min-h-[50vh] lg:min-h-screen"
            style={{
              background: "linear-gradient(135deg, #061b2e 0%, #0f2a47 30%, #1a365d 70%, #2c5282 100%)",
            }}
          >
            {/* Curved Cloud Divider - Only visible on larger screens */}
            <div
              className="absolute top-0 left-0 w-48 h-full bg-white z-10 hidden lg:block"
              style={{
                left: "-160px",
                width: "200px",
                maskImage: `url("data:image/svg+xml;utf8,<svg width='200' height='1000' viewBox='0 0 200 1000' xmlns='http://www.w3.org/2000/svg'><path fill='white' d='M200,1000 C170,970 170,930 200,900 C170,870 170,830 200,800 C170,770 170,730 200,700 C170,670 170,630 200,600 C170,570 170,530 200,500 C170,470 170,430 200,400 C170,370 170,330 200,300 C170,270 170,230 200,200 C170,170 170,130 200,100 C170,70 170,30 200,0 L0,0 L0,1000 Z' /></svg>")`,
                WebkitMaskImage: `url("data:image/svg+xml;utf8,<svg width='200' height='1000' viewBox='0 0 200 1000' xmlns='http://www.w3.org/2000/svg'><path fill='white' d='M200,1000 C170,970 170,930 200,900 C170,870 170,830 200,800 C170,770 170,730 200,700 C170,670 170,630 200,600 C170,570 170,530 200,500 C170,470 170,430 200,400 C170,370 170,330 200,300 C170,270 170,230 200,200 C170,170 170,130 200,100 C170,70 170,30 200,0 L0,0 L0,1000 Z' /></svg>")`,
                maskRepeat: "no-repeat",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
              }}
            />

            {/* Stars */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* Star 1 */}
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "3px",
                  height: "3px",
                  top: "15%",
                  left: "80%",
                  animation: "twinkle 2s infinite alternate",
                  animationDelay: "0s",
                }}
              />
              {/* Star 2 */}
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "2px",
                  height: "2px",
                  top: "25%",
                  left: "70%",
                  animation: "twinkle 2s infinite alternate",
                  animationDelay: "0.5s",
                }}
              />
              {/* Star 3 */}
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  top: "35%",
                  left: "90%",
                  animation: "twinkle 2s infinite alternate",
                  animationDelay: "1s",
                }}
              />
              {/* Star 4 */}
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "3px",
                  height: "3px",
                  top: "50%",
                  left: "75%",
                  animation: "twinkle 2s infinite alternate",
                  animationDelay: "1.5s",
                }}
              />
              {/* Star 5 */}
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "2px",
                  height: "2px",
                  top: "65%",
                  left: "85%",
                  animation: "twinkle 2s infinite alternate",
                  animationDelay: "2s",
                }}
              />
            </div>

            {/* Right-side Content */}
            <div className="relative animate-slide-right flex-col justify-end items-center h-full flex lg:hidden xl:flex z-20">
              <div className="relative mb-0">
                <img
                  src={bulb_img}
                  alt="Innovation Bulb"
                  className="w-60 lg:w-80 h-auto relative z-10 mt-10"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHome;
