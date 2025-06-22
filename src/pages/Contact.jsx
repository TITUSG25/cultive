import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Star, Users, Globe, Award, Zap, CheckCircle, Headphones, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError('Please fill in all required fields.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
        budget: ''
      })
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      subtitle: "Speak with our experts",
      contact: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      action: () => window.open('tel:+15551234567'),
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      hoverBg: "hover:bg-emerald-100"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      subtitle: "Get detailed responses",
      contact: "info@cultive.edu",
      description: "24-hour response time",
      action: () => window.open('mailto:info@cultive.edu'),
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      subtitle: "Instant support",
      contact: "Quick Response",
      description: "Real-time messaging",
      action: () => window.open('https://wa.me/+15551234567?text=Hi, I need help!'),
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200",
      hoverBg: "hover:bg-teal-100"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Meeting",
      subtitle: "Book a consultation",
      contact: "Free 30-min call",
      description: "Available slots daily",
      action: () => window.open('#'),
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-100"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200 mb-8">
              <Headphones className="w-5 h-5 mr-3 text-emerald-600" />
              <span className="text-emerald-700 font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Ready to transform your educational experience? Contact our team of experts and let's discuss how we can help you achieve your goals.
            </p>
            
            {/* Stats with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '10,000+', label: 'Happy Clients', icon: <Users className="w-6 h-6" />, color: 'text-emerald-600' },
                { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" />, color: 'text-orange-600' },
                { number: '99.9%', label: 'Uptime Guarantee', icon: <Award className="w-6 h-6" />, color: 'text-teal-600' },
                { number: '4.9/5', label: 'Customer Rating', icon: <Star className="w-6 h-6" />, color: 'text-purple-600' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-gray-100">
                    <div className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you succeed. Reach out through any channel that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                onClick={method.action}
                className={`${method.bgColor} ${method.borderColor} ${method.hoverBg} border-2 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-3 group relative overflow-hidden`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`${method.iconColor} mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>
                  <p className="font-semibold text-gray-900 mb-2">{method.contact}</p>
                  <p className="text-gray-500 text-xs mb-6">{method.description}</p>
                  <div className={`flex items-center ${method.iconColor} font-medium text-sm group-hover:translate-x-2 transition-all duration-300`}>
                    <span>Connect now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  {submitSuccess && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl flex items-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mr-4" />
                      <div>
                        <p className="text-emerald-800 font-semibold">Message sent successfully!</p>
                        <p className="text-emerald-700 text-sm">We'll respond within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
                      <p className="text-red-800">{submitError}</p>
                    </div>
                  )}

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Company/Organization</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                          placeholder="Your Organization"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Service Interest</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                        >
                          <option value="">Select a service</option>
                          <option value="ai-tutoring">AI Tutoring Platform</option>
                          <option value="lms-integration">LMS Integration</option>
                          <option value="custom-development">Custom Development</option>
                          <option value="consultation">Consultation</option>
                          <option value="training">Training & Support</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-plus">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none group-hover:border-gray-400"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-5 px-8 rounded-xl hover:from-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          <span>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Visit Our Office</h3>
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <MapPin className="w-6 h-6 text-emerald-600 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600 text-sm mt-1">123 Innovation Drive, Suite 500<br />San Francisco, CA 94103</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <Clock className="w-6 h-6 text-emerald-600 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold text-gray-900">Office Hours</p>
                        <p className="text-gray-600 text-sm mt-1">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open('https://maps.google.com/?q=San+Francisco,+CA+94103', '_blank')}
                    className="w-full mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 font-semibold py-4 px-6 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 border border-emerald-200 hover:shadow-md"
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-emerald-100 mb-8 text-sm">Our support team is available 24/7 to assist you with any urgent questions.</p>
                  <div className="space-y-4">
                    <a href="tel:+15551234567" className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group/item">
                      <Phone className="w-6 h-6 mr-4 group-hover/item:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold">Call Now</p>
                        <p className="text-emerald-100 text-sm">+1 (555) 123-4567</p>
                      </div>
                    </a>
                    <a href="mailto:info@cultive.edu" className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group/item">
                      <Mail className="w-6 h-6 mr-4 group-hover/item:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold">Email Us</p>
                        <p className="text-emerald-100 text-sm">info@cultive.edu</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
                    { icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-500', bg: 'hover:bg-sky-50' },
                    { icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-600', bg: 'hover:bg-pink-50' },
                    { icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-700', bg: 'hover:bg-blue-50' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-200`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions about our services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What services do you offer?",
                answer: "We provide AI-powered educational solutions, LMS integration, custom development, and comprehensive training."
              },
              {
                question: "How quickly can you implement a solution?",
                answer: "Implementation timeline varies by project scope, typically ranging from 2 weeks to 3 months."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, we provide 24/7 technical support and regular maintenance for all our solutions."
              },
              {
                question: "Can you integrate with existing systems?",
                answer: "Absolutely! We specialize in seamless integration with popular LMS platforms and educational tools."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.open('https://wa.me/+15551234567?text=Hi, I need help!', '_blank')}
          className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}

export default Contact