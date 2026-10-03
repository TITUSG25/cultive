import { useState, useEffect } from "react";
import { X, Menu, ChevronRight, Home, Users, Zap, Phone } from "lucide-react";
import heroBrain from "../assets/hero-brain.jpg";
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
    <a href="/" className="ml-2 flex items-center sm:ml-4">
      <div className="flex flex-col items-start">
        <img src={cultive_logo} alt="Cultive Logo" className="h-16 w-auto object-contain sm:h-20" />
      </div>
    </a>
  );

  const DesktopNavLink = ({ href, children, icon: IconComponent }) => {
    const isActive = activeLink === href;

    return (
      <a
        href={href}
        onClick={() => setActiveLink(href)}
        className="flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-150 relative group text-[#283a89]"
      >
        <IconComponent className="w-4 h-4" />
        <span>{children}</span>
        {/* Underline animation with gradient - active state */}
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-200 ease-out underline-gradient ${
            isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
          }`}
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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">
        <div
          className={`mx-auto flex w-full max-w-[92rem] items-center justify-between px-5 transition-all duration-150 sm:px-8 ${
            scrolled ? "py-2" : "py-3.5"
          }`}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) => (
              <DesktopNavLink key={item.text} href={item.path} icon={item.icon}>
                {item.text}
              </DesktopNavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2.5 rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-opacity-50 z-50 text-slate-600 hover:text-slate-800 focus:ring-blue-500 bg-slate-100/80 hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
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
      <section className="relative overflow-hidden bg-white">
        {/* Subtle wavy light patterns */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div
            className="absolute -bottom-24 -left-20 h-72 w-72 bg-[#eaf1fb]"
            style={{ borderRadius: "58% 42% 55% 45% / 45% 55% 45% 55%" }}
          />
          <div
            className="absolute left-[38%] top-[10%] h-40 w-40 bg-[#fdf3e0]/70"
            style={{ borderRadius: "45% 55% 48% 52% / 55% 45% 52% 48%" }}
          />
          <div
            className="absolute -right-16 top-[55%] h-56 w-56 bg-[#eef4fd]"
            style={{ borderRadius: "50% 50% 46% 54% / 54% 46% 54% 46%" }}
          />
        </div>

        {/* Copy — centered in the left ~55% */}
        <div className="relative z-10 mx-auto flex max-w-[92rem] items-center px-6 pb-6 pt-32 sm:px-10 lg:min-h-[48rem] lg:pt-0">
          <div className="mx-auto w-full max-w-2xl animate-fade-up text-left lg:mx-0 lg:ml-[3%]">
            <span className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[#d98b15]">
              <span className="h-px w-9 bg-[#e7a334]" aria-hidden="true" />
              Empowering Education
              <span className="h-px w-9 bg-[#e7a334]" aria-hidden="true" />
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#1c3d8f] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Transforming Education
              <br />
              with <span className="text-[#f6a623]">Digital Excellence</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.6] text-[#536987] sm:text-lg">
              Experience the future of education management with our comprehensive suite of innovative solutions
              designed for modern educational institutions.
            </p>
          </div>
        </div>

        {/* Student image — white bg blends into the hero */}
        <div className="pointer-events-none relative z-0 mx-auto mt-2 w-full max-w-xl lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:w-[46%] lg:max-w-none">
          <img
            src={heroBrain}
            alt="Student with glowing knowledge concepts"
            className="h-[22rem] w-full object-cover object-center sm:h-[26rem] lg:h-[40rem] lg:w-full"
          />
        </div>
      </section>

    </div>
  );
};

export default NewHome;
