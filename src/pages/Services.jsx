import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'

// Animations
import attendanceAnimation from '../assets/animations/attendance.json'
import examsAnimation from '../assets/animations/exams.json'
import communicationAnimation from '../assets/animations/communication.json'
import analyticsAnimation from '../assets/animations/analytics.json'

const Services = () => {
  // Refs for animations
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)
  const sectionRef4 = useRef(null)
  
  // Check if sections are in view
  const isInView1 = useInView(sectionRef1, { once: true, amount: 0.3 })
  const isInView2 = useInView(sectionRef2, { once: true, amount: 0.3 })
  const isInView3 = useInView(sectionRef3, { once: true, amount: 0.3 })
  const isInView4 = useInView(sectionRef4, { once: true, amount: 0.3 })

  // Service sections
  const services = [
    {
      id: 1,
      title: "For Schools",
      description: "Streamline administrative tasks, improve communication, and enhance overall educational outcomes.",
      features: [
        "Centralized data management",
        "Comprehensive reporting",
        "Staff scheduling and management",
        "Resource allocation tools",
        "Campus event coordination"
      ],
      animation: attendanceAnimation,
      ref: sectionRef1,
      isInView: isInView1,
      color: "bg-primary-500"
    },
    {
      id: 2,
      title: "For Teachers",
      description: "Focus more on teaching and less on administrative tasks with our intuitive tools.",
      features: [
        "Digital attendance tracking",
        "Assignment creation and grading",
        "Exam scheduling and assessment",
        "Student performance analytics",
        "Parent communication channels"
      ],
      animation: examsAnimation,
      ref: sectionRef2,
      isInView: isInView2,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "For Parents",
      description: "Stay connected with your child's education and engage more effectively with teachers.",
      features: [
        "Real-time updates on attendance",
        "Assignment and grade notifications",
        "Direct messaging with teachers",
        "School event calendar",
        "Progress tracking and reporting"
      ],
      animation: communicationAnimation,
      ref: sectionRef3,
      isInView: isInView3,
      color: "bg-yellow-500"
    },
    {
      id: 4,
      title: "For Students",
      description: "Access learning resources, track progress, and stay organized throughout the academic year.",
      features: [
        "Assignment dashboard",
        "Exam schedule and reminders",
        "Personal performance analytics",
        "Digital learning resources",
        "Collaboration tools for group projects"
      ],
      animation: analyticsAnimation,
      ref: sectionRef4,
      isInView: isInView4,
      color: "bg-orange-500"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto mb-8 text-gray-700"
          >
            Comprehensive solutions designed for each stakeholder in the educational ecosystem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          ref={service.ref}
          className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={service.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <div className={`${service.color} w-16 h-1 mb-6`}></div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-700 text-lg mb-8">{service.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`w-5 h-5 ${service.color.replace('bg-', 'text-')} mt-1 mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.color} text-white font-medium py-3 px-8 rounded-lg shadow-md`}
                >
                  Learn More
                </motion.button>
              </motion.div>
              
              {/* Animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                animate={service.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:w-1/2"
              >
                <div className="max-w-md mx-auto">
                  <Player
                    autoplay
                    loop
                    src={service.animation}
                    style={{ height: '300px', width: '100%' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* End-to-End Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">End-to-End Educational Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Our platform seamlessly handles every aspect of the educational journey.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2"></div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                {[
                  { title: "Attendance", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
                  { title: "Exams", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Grades", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
                  { title: "Reports", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { title: "Communication", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                  { title: "Activities", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 mx-auto bg-primary-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white relative">
        {/* Sticky CTA Button (for desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden md:block fixed right-8 bottom-8 z-50"
        >
          <Link
            to="/contact"
            className="bg-white text-primary-500 font-medium py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center group"
          >
            <span>Get a Demo</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Educational Experience?
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 text-white/90">
              Schedule a personalized demo to see how Cultive can benefit your school, teachers, parents, and students.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-white text-primary-500 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                Request a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services