import { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  // Footer navigation sections
  const footerSections = [
    {
      title: 'Forms',
      links: [
        { name: 'Events', url: '/events', description: 'Join our upcoming events' },
        { name: 'Intern', url: 'https://docs.google.com/forms/d/1luSfOItGpN-Ep7BSbcNr-tq5w6Fn4HFOlUkw8cCsH_I/edit', description: 'Apply for internships' },
        { name: 'Career Application', url: 'https://docs.google.com/forms/d/1h_ac-ltcERU8j4cdAYt6tMTsys2Fxmy-qqmNqEsFRDY/edit', description: 'Apply for career opportunities' },
        { name: 'Feedback', url: 'https://docs.google.com/forms/d/1q_wI2jxCaPfw55yLjwve5zsihhaAMVH2Vp8L44NIWio/edit', description: 'Share your feedback' },
        { name: 'Training', url: 'https://docs.google.com/forms/d/1biihW8UttyOEDo-edpJhRan5lB8DEfnhMVYQPxj4gww/edit', description: 'Apply for training' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about', description: 'Our story and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    }
  ]

  // Social media links
  const socialLinks = [
    { 
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: Twitter
    },
    { 
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: Facebook
    },
    { 
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram
    },
    { 
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin
    }
  ]

  // Handle participation mail
  const handleParticipationMail = () => {
    if (email) {
      const subject = "Participation Request from " + email
      const body = `Hello,\n\nI would like to participate in Cultive programs.\n\nFrom: ${email}\n\nThank you!`
      const mailtoLink = `mailto:cultivetech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
    }
  }

  return (
    <footer className="bg-[#1f2c71] text-white relative overflow-hidden font-sans">
      {/* Newsletter Section */}
      <div className="bg-[#1f2c71] py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Join Our Educational Community
            </h3>
            <p className="text-blue-200 mb-6 text-lg">
              Get the latest updates on educational technology and participate in our innovative programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#fbb040] focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                onClick={handleParticipationMail}
                className="px-6 py-3 bg-[#fbb040] hover:bg-[#f59e0b] text-[#283a89] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="font-bold text-3xl mb-4">
                <span className="bg-gradient-to-r from-[#fbb040] to-[#f59e0b] bg-clip-text text-transparent">
                  Cultive
                </span>
              </h2>
              <p className="text-blue-200 text-base leading-relaxed mb-6 max-w-md">
                Revolutionizing education through innovation, making learning accessible and engaging for everyone around the world.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-blue-200">
                  <Mail className="w-5 h-5 text-[#fbb040]" />
                  <span>cultivetech@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Phone className="w-5 h-5 text-[#fbb040]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <MapPin className="w-5 h-5 text-[#fbb040]" />
                  <span>123 Education St, Learning City</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-200 hover:text-white hover:bg-[#fbb040] transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold text-lg mb-4 text-white relative">
                {section.title}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#fbb040]"></div>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={link.url.startsWith('https://docs.google.com') ? '_blank' : '_self'}
                      rel={link.url.startsWith('https://docs.google.com') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center text-blue-200 hover:text-[#fbb040] transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#283a89] border-t border-white/10 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-6 text-blue-200 text-sm">
              <span>&copy; {new Date().getFullYear()} Cultive. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-4">
                <a href="/privacy" className="hover:text-[#fbb040] transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-[#fbb040] transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-[#fbb040]">T&A Web Creations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer