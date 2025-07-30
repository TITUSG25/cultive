import { useState, useEffect } from "react";
import { X, Menu, ChevronRight, Home, Users, Zap, Phone } from "lucide-react";
import cultive_logo from "../assets/cultive_logo.svg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { text: "Home", path: "/", icon: Home },
    { text: "About Us", path: "/about", icon: Users },
    { text: "Services", path: "/services", icon: Zap },
    { text: "Contact", path: "/contact", icon: Phone },
  ];

  const Logo = () => (
    <a href="/" className="flex items-center">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <img
            src={cultive_logo}
            alt="Cultive Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled 
                ? 'w-16 h-12 sm:w-18 sm:h-14 md:w-20 md:h-16 lg:w-24 lg:h-18' 
                : 'w-24 h-18 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-26'
            }`}
          />
        </div>
      </div>
    </a>
  );

  const DesktopNavLink = ({ href, children, icon: IconComponent }) => (
    <a
      href={href}
      className="flex items-center gap-2 px-4 py-2 font-medium transition-colors duration-200 relative group"
      style={{ color: '#283a89' }}
    >
      <IconComponent 
        className="w-4 h-4"
        style={{ color: '#283a89' }}
      />
      <span>{children}</span>
      {/* Underline animation with gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-3/4 underline-gradient"></div>
    </a>
  );

  const MobileNavLink = ({ href, children, icon: IconComponent, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between p-6 text-slate-700 transition-colors duration-200 border-b border-slate-100 last:border-b-0"
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
    <>
      {/* Main Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-0.5 border-b border-slate-200/30" 
            : "bg-white/90 backdrop-blur-sm py-3"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
            className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
              isSidebarOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-xl transform transition-transform duration-300 ease-out ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src="/api/placeholder/40/32"
                  alt="Cultive Logo"
                  className="w-10 h-8 object-contain"
                />
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-slate-500 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
                    animationFillMode: 'forwards'
                  }}
                >
                  <MobileNavLink
                    href={item.path}
                    icon={item.icon}
                    onClick={() => setIsSidebarOpen(false)}
                  >
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

      {/* Spacer for fixed header - No gap */}
      <div className={`${scrolled ? 'h-0' : 'h-0'} transition-all duration-300`} />

      {/* Custom Styles */}
      <style jsx>{`
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
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
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
    </>
  );
};

export default Navbar;