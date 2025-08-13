import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Headphones,
  Sparkles,
  Heart,
  Building,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Simulate sending email to titusg2599@gmail.com
      const emailData = {
        to: "titusg2599@gmail.com",
        subject: `New Enquiry: ${formData.subject}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Company: ${formData.company}
          Phone: ${formData.phone}
          Service Interest: ${formData.service}
          Budget: ${formData.budget}
          Subject: ${formData.subject}
          Message: ${formData.message}
        `,
      };

      // In a real application, you would send this to your backend API
      console.log("Sending email:", emailData);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
        budget: "",
      });
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "+916880804060";
  const whatsappMessage = "Hi! I'm interested in Cultive's educational solutions. Can you help me?";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen font-sans bg-white mt-24">
      {/* Custom Styles matching home page */}
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

        .parallax-bg {
          transform: translateY(${scrollY * 0.3}px);
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(40, 58, 137, 0.15);
        }

        /* Custom placeholder color for select */
        select option[value=""] {
          color: #9ca3af;
        }
        select:invalid {
          color: #9ca3af;
        }
        select:valid {
          color: #374151;
        }
      `}</style>

      <section className="relative py-16 flex items-center overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fbb040] bg-opacity-10 text-[#283a89] rounded-full text-sm font-medium border border-[#fbb040] border-opacity-30">
                <Headphones className="w-4 h-4" />
                We're Here to Help You
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#283a89] text-shadow">
                Get in Touch with
                <span className="text-[#fbb040]"> Educational Experts</span>
              </h1>

              <p className="text-lg text-[#283a89] leading-relaxed max-w-lg font-medium">
                Ready to transform your educational experience? Contact our team of experts and let's discuss how we can
                help you achieve your goals.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                {/* Call Button */}
                <a
                  href="tel:+918680804060"
                  className="flex items-center gap-3 px-5 py-4 bg-[#283a89] text-white rounded-xl hover:bg-[#1e2a6d] transition-all duration-300 shadow-sm hover:shadow-md group min-w-[200px]"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm font-semibold leading-tight">Call Now</p>
                    <p className="text-xs opacity-90 whitespace-nowrap">+91-8680804060</p>
                  </div>
                </a>

                {/* Email Button */}
                <a
                  href="mailto:cultivetech@gmail.com"
                  className="flex items-center gap-3 px-5 py-4 bg-[#fbb040] text-white rounded-xl hover:bg-[#e09d35] transition-all duration-300 shadow-sm hover:shadow-md group min-w-[200px]"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm font-semibold leading-tight">Email Us</p>
                    <p className="text-xs opacity-90">connect@cultive.in</p>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-3 px-5 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#20c558] transition-all duration-300 shadow-sm hover:shadow-md group min-w-[200px]"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm font-semibold leading-tight">WhatsApp</p>
                    <p className="text-xs opacity-90">24/7 Support</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Contact Image */}
            <div className="relative animate-slide-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Contact Us - Customer Support Team"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#283a89]/20 to-transparent rounded-2xl"></div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -left-6 w-20 h-20 bg-[#fbb040] rounded-2xl flex items-center justify-center animate-float shadow-lg">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>

                <div
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#283a89] rounded-2xl flex items-center justify-center animate-float shadow-lg"
                  style={{ animationDelay: "2s" }}
                >
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fbb040] bg-opacity-10 text-[#283a89] rounded-full text-sm font-medium mb-4 border border-[#fbb040] border-opacity-30">
              <Send className="w-4 h-4" />
              Send us a Message
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#283a89]">Ready to Get Started?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours with a customized solution for your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover-lift max-w-lg mx-auto">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-green-700 text-xs">We'll respond within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800 text-sm">{submitError}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#283a89] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#283a89] mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#283a89] mb-2">School/Institution</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 text-sm"
                        placeholder="Your school/institution"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#283a89] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#283a89] mb-2">Service Interest</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 appearance-none bg-white text-sm"
                        required={false}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="iep">Individualized Education Plans (IEPs)</option>
                        <option value="curriculum">Curriculum Development</option>
                        <option value="counseling">Psychological Counseling</option>
                        <option value="technology">Educational Technology</option>
                        <option value="training">Soft Skills Training</option>
                        <option value="career">Career Counseling</option>
                        <option value="sis">Student Information Systems</option>
                        <option value="custom">Custom Solutions</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#283a89] mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 text-sm"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#283a89] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb040] focus:border-[#fbb040] transition-all duration-300 resize-none text-sm"
                      placeholder="Tell us about your project and goals..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#283a89] to-[#1e2a6d] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#1e2a6d] hover:to-[#283a89] transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="text-sm">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className="text-sm">Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* Google Map & Office Information Section */}
            <div className="space-y-6 lg:col-span-1">
              {/* Google Map */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover-lift overflow-hidden">
                <div className="p-6 pb-0">
                  <h3 className="text-xl font-bold text-[#283a89] mb-4">Visit Our Office</h3>
                  <p className="text-gray-600 text-sm mb-4">Click on the map to get directions to our Chennai office</p>
                </div>

                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/dir//Pallavaram,+Chennai,+Tamil+Nadu/@12.9675,80.1491,13z",
                      "_blank"
                    )
                  }
                >
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                    {/* Map Container */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124418.12345!2d80.1491!3d12.9675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d624a2a6b8d%3A0x5c5b9b6b7b8b9b8b!2sPallavaram%2C+Chennai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-300 group-hover:scale-105"
                    ></iframe>

                    {/* Overlay with direction hint */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white bg-opacity-0 group-hover:bg-opacity-95 text-transparent group-hover:text-[#283a89] px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span className="font-semibold">Get Directions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <div className="p-6 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#fbb040] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#283a89] mb-1">Our Location</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pallavaram, Chennai
                        <br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover-lift">
                <h3 className="text-xl font-bold text-[#283a89] mb-6">Office Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#283a89] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#283a89] mb-1">Business Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Saturday</p>
                      <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#fbb040] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#283a89] mb-1">Office Type</p>
                      <p className="text-gray-600 text-sm">Educational Solutions Center</p>
                      <p className="text-gray-600 text-sm">Consultation & Support Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={openWhatsApp}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20c558] text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          title="Chat with us on WhatsApp - 24/7 Support"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
