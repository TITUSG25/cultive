import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cultive_logo from "../assets/cultive_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Navbar items
  const navItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];

  // Logo Component with your original logo
  const Logo = () => {
    return (
      <Link to="/" className="flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* Your Original Logo */}
          <div className="flex-shrink-0">
            <img
              src={cultive_logo}
              alt="Cultive Logo"
              className="w-32 h-12 sm:w-40 sm:h-16 md:w-50 md:h-20"
            />
          </div>
        </motion.div>
      </Link>
    );
  };

  const NavLink = ({ to, children, onClick, className }) => {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={className}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors relative group"
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition-colors hover:scale-105 transform">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 focus:outline-none z-60 relative mobile-menu-container"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-800 transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-800 transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className={`fixed left-0 right-0 top-[60px] bg-white z-50 md:hidden mobile-menu-container shadow-lg transition-transform duration-300`}
          >
            <div className="container mx-auto px-4">
              {/* Menu Items */}
              <div className="flex flex-col py-2">
                {navItems.map((item, index) => (
                  <div
                    key={item.text}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="py-4 px-2 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0 flex items-center justify-between group"
                    >
                      <span>{item.text}</span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </NavLink>
                  </div>
                ))}

                <div
                  className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn"
                  style={{ animationDelay: '400ms' }}
                >
                  <button
                    className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors active:scale-95 transform"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;