import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Building,
  User,
  MessageSquare,
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

      <section className="relative flex items-center overflow-hidden bg-[#fdfaf5] py-14 lg:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#dbeafe]/70" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-[#fde9cf]/80 blur-2xl" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
            {/* Left Content */}
            <div className="animate-slide-left">
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#1e3a8f]">
                <span className="h-0.5 w-8 bg-[#f5a41d]" aria-hidden="true" />
                Let&rsquo;s Connect
              </span>

              <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.08] text-[#1e3a8f] sm:text-6xl lg:text-[4.3rem]">
                Let&rsquo;s Create
                <svg className="ml-4 inline-block h-7 w-10 align-baseline sm:h-8" viewBox="0 0 40 26" fill="none" aria-hidden="true">
                  <path d="M4 22 L11 8" stroke="#f5a41d" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M17 22 L25 4" stroke="#f5a41d" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M30 22 L36 11" stroke="#f5a41d" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
                <br />
                <span className="text-[#f5a41d]">Brighter</span> Futures
              </h1>

              <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-[#4a5a94]">
                Have questions, partnership ideas, or want to know more about our programs? Our team is here to help
                you.
              </p>

              {/* Contact Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+918680804060"
                  className="group flex items-center gap-4 rounded-full bg-[#1e3a8f] py-3 pl-4 pr-8 text-white shadow-[0_16px_36px_rgba(30,58,143,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#16306f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold">Call Us</span>
                    <span className="block text-xs font-medium text-blue-200">+91 8680804060</span>
                  </span>
                </a>

                <a
                  href="mailto:connect@cultive.in"
                  className="group flex items-center gap-4 rounded-full bg-[#f5a41d] py-3 pl-4 pr-8 text-white shadow-[0_16px_36px_rgba(245,164,29,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8940a]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold">Email Us</span>
                    <span className="block text-xs font-medium text-amber-100">connect@cultive.in</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Content - Blob image + floating message card */}
            <div className="relative animate-slide-right">
              <span className="absolute -top-8 right-8 h-44 w-44 rounded-full bg-[#dbeafe]" aria-hidden="true" />
              <span className="absolute -bottom-10 right-40 h-36 w-36 rounded-full bg-[#fde9cf] blur-md" aria-hidden="true" />

              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Contact Us - Our team is here to help"
                className="relative h-[420px] w-full object-cover shadow-[0_30px_70px_rgba(30,58,143,0.25)] lg:h-[460px]"
                style={{ borderRadius: "52% 48% 40% 60% / 58% 46% 54% 42%" }}
              />

              {/* Dotted pattern */}
              <span
                className="absolute -bottom-8 -right-4 h-24 w-32"
                style={{
                  backgroundImage: "radial-gradient(rgba(30,58,143,0.28) 1.6px, transparent 1.6px)",
                  backgroundSize: "14px 14px",
                }}
                aria-hidden="true"
              />


            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-[92rem] px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0c1a45] via-[#15306e] to-[#1e3a8f] shadow-[0_40px_90px_rgba(10,20,60,0.45)]">
            {/* Pattern + glow overlays */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div
                className="absolute inset-y-0 right-0 w-1/3 [mask-image:linear-gradient(to_left,black_35%,transparent)]"
                style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0 2px, transparent 2px 16px)" }}
              />
              <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-[#4e77da]/25 blur-3xl" />
              <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
              <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#f5a41d]/15 blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:p-14">
              {/* Info side */}
              <div className="flex flex-col">
                <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#fbb040]">
                  <span className="h-0.5 w-8 bg-[#fbb040]" aria-hidden="true" />
                  Get in Touch
                </span>
                <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
                  Ready to Get{" "}
                  <span className="bg-gradient-to-r from-[#fbb040] to-[#f5a41d] bg-clip-text text-transparent">
                    Started?
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-8 text-blue-200/80">
                  Tell us about your goals and our team will get back to you within 24 hours with a customized
                  solution.
                </p>

                <div className="mt-9 space-y-4">
                  <a
                    href="tel:+918680804060"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5a41d] shadow-[0_10px_24px_rgba(245,164,29,0.4)]">
                      <Phone className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">Call Us</span>
                      <span className="block text-sm text-blue-200/80">+91 8680804060</span>
                    </span>
                  </a>
                  <a
                    href="mailto:connect@cultive.in"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4e77da] shadow-[0_10px_24px_rgba(78,119,218,0.4)]">
                      <Mail className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">Email Us</span>
                      <span className="block text-sm text-blue-200/80">connect@cultive.in</span>
                    </span>
                  </a>
                  <a
                    href="https://www.google.com/maps/dir//Pallavaram,+Chennai,+Tamil+Nadu/@12.9675,80.1491,13z"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8b5cf6] shadow-[0_10px_24px_rgba(139,92,246,0.4)]">
                      <MapPin className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">Visit Our Office</span>
                      <span className="block text-sm text-blue-200/80">Pallavaram, Chennai, Tamil Nadu</span>
                    </span>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-100">
                    <Clock className="h-4 w-4 text-[#fbb040]" aria-hidden="true" />
                    Mon – Sat · 9:00 AM – 6:00 PM
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-100">
                    <Building className="h-4 w-4 text-[#fbb040]" aria-hidden="true" />
                    Educational Solutions Center
                  </span>
                </div>

                {/* Mini map */}
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124418.12345!2d80.1491!3d12.9675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d624a2a6b8d%3A0x5c5b9b6b7b8b9b8b!2sPallavaram%2C+Chennai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="176"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cultive office location"
                  ></iframe>
                </div>
              </div>

              {/* Form card */}
              <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-[#1e3a8f]">Send us a Message</h3>
                <p className="mt-1 text-sm text-slate-500">We&rsquo;ll get back to you within 24 hours.</p>
                {submitSuccess && (
                  <div className="mt-5 mb-5 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-green-700 text-xs">We'll respond within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mt-5 mb-5 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800 text-sm">{submitError}</p>
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus-within:border-[#f5a41d] focus-within:ring-2 focus-within:ring-[#f5a41d]/20">
                      <User className="h-4 w-4 shrink-0 text-[#1e3a8f]/50" aria-hidden="true" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Full Name *"
                        className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
                      />
                    </label>
                    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus-within:border-[#f5a41d] focus-within:ring-2 focus-within:ring-[#f5a41d]/20">
                      <Mail className="h-4 w-4 shrink-0 text-[#1e3a8f]/50" aria-hidden="true" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Email Address *"
                        className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus-within:border-[#f5a41d] focus-within:ring-2 focus-within:ring-[#f5a41d]/20">
                      <Building className="h-4 w-4 shrink-0 text-[#1e3a8f]/50" aria-hidden="true" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="School / Institution"
                        className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
                      />
                    </label>
                    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus-within:border-[#f5a41d] focus-within:ring-2 focus-within:ring-[#f5a41d]/20">
                      <Phone className="h-4 w-4 shrink-0 text-[#1e3a8f]/50" aria-hidden="true" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required={false}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 pr-10 text-sm font-medium text-slate-700 transition focus:border-[#f5a41d] focus:outline-none focus:ring-2 focus:ring-[#f5a41d]/20"
                    >
                      <option value="" disabled>
                        Service Interest
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>

                  <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus-within:border-[#f5a41d] focus-within:ring-2 focus-within:ring-[#f5a41d]/20">
                    <MessageSquare className="h-4 w-4 shrink-0 text-[#1e3a8f]/50" aria-hidden="true" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Subject *"
                      className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
                    />
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Tell us about your project and goals... *"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-700 placeholder-slate-400 transition focus:border-[#f5a41d] focus:outline-none focus:ring-2 focus:ring-[#f5a41d]/20"
                  ></textarea>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f5a41d] py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(245,164,29,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8940a] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
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
