import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import schools from '../assets/schools.png'

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

   // State for image loading
  const [imageLoaded, setImageLoaded] = useState({})

  const handleImageLoad = (serviceId) => {
    setImageLoaded(prev => ({ ...prev, [serviceId]: true }))
  }

  // Service sections
  const services = [
    {
      id: 1,
      title: "For Schools",
      description: "Cultive empowers schools by streamlining administrative tasks, improving communication, and enhancing overall educational outcomes through a suite of integrated services.",
      features: [
        "Centralized Data Management – Unifying student, staff, and institutional records into a secure, accessible system for efficient data handling and informed decision-making.",
        "Campus Event Coordination – Enabling seamless planning, scheduling, and execution of school events through intuitive digital tools that foster collaboration and participation.",
        "Strategic Admission Planning – Implementing data-driven strategies to optimize the admissions process, from outreach and lead tracking to enrollment conversion.",
        "School Administration Solutions – Providing robust tools for managing daily operations, compliance, resource allocation, and institutional workflows.",
        "IT Infrastructure and Support – Establishing a reliable, scalable technology infrastructure with continuous support to ensure uninterrupted academic and administrative functions.",
        "Staff Scheduling and Management – Simplifying staff allocation, timetable generation, and performance monitoring to enhance productivity and reduce administrative burden."
      ],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      alt: "Modern school building with students",
      ref: sectionRef1,
      isInView: isInView1,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "For Teachers",
      description: "Cultive empowers educators to focus more on teaching and less on administrative tasks through our intuitive, user-friendly tools.",
      features: [
        "Digital Attendance Tracking – Effortlessly monitor and manage student attendance with real-time accuracy.",
        "Assignment Creation and Grading – Streamline the process of assigning, collecting, and evaluating student work with automated tools.",
        "Exam Scheduling and Assessment – Organize and administer exams efficiently, with flexible scheduling and digital evaluation capabilities.",
        "Student Performance Analytics – Gain actionable insights through data-driven analysis of academic progress and learning trends.",
        "Parent Communication Channels – Maintain transparent and consistent engagement with parents through integrated messaging and updates."
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      alt: "Teacher using digital tools in classroom",
      ref: sectionRef2,
      isInView: isInView2,
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "For Parents",
      description: "Stay actively connected to your child's educational journey and engage more effectively with teachers through Cultive's parent-focused features.",
      features: [
        "Real-Time Attendance Updates – Instantly view your child's daily attendance records.",
        "Assignment and Grade Notifications – Receive timely alerts on homework, submissions, and academic performance.",
        "Direct Messaging with Teachers – Communicate seamlessly with educators for updates, feedback, and support.",
        "School Event Calendar – Stay informed about upcoming events, activities, and important school dates.",
        "Progress Tracking and Reporting – Access comprehensive reports to monitor your child's academic growth and development."
      ],
      image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
      alt: "Parent and child using educational app together",
      ref: sectionRef3,
      isInView: isInView3,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "For Students",
      description: "Empowering students to stay organized, track their progress, and access essential learning resources throughout the academic year with Cultive's student-focused features.",
      features: [
        "Assignment Dashboard – View, manage, and submit assignments in one centralized location.",
        "Exam Schedule and Reminders – Stay prepared with timely notifications and a clear view of upcoming assessments.",
        "Personal Performance Analytics – Monitor academic progress with insightful data and visual reports.",
        "Digital Learning Resources – Access curated educational content, study materials, and reference tools anytime, anywhere.",
        "Collaboration Tools for Group Projects – Work seamlessly with peers through shared digital workspaces and communication tools."
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Students collaborating on digital devices",
      ref: sectionRef4,
      isInView: isInView4,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600"
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
      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          ref={service.ref}
          className={`py-24 ${index % 2 === 1 ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`}></div>
            <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${service.gradient} rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2`}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={service.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:w-1/2"
              >
                <div className={`${service.color} w-20 h-1.5 mb-8 rounded-full`}></div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-6">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={service.isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * i }}
                      className="flex items-start group"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base md:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={service.isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="lg:w-1/2"
              >
                <div className="relative max-w-lg mx-auto">
                  {/* Loading placeholder */}
                  {!imageLoaded[service.id] && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl animate-pulse flex items-center justify-center`}>
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Main image */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.alt}
                      onLoad={() => handleImageLoad(service.id)}
                      className={`w-full h-80 md:h-96 object-cover transition-all duration-700 group-hover:scale-105 ${
                        imageLoaded[service.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Floating elements */}
                    <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-80 blur-xl group-hover:scale-110 transition-transform duration-500`}></div>
                    <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr ${service.gradient} rounded-full opacity-60 blur-lg group-hover:scale-110 transition-transform duration-500 delay-100`}></div>
                  </div>
                  
                  {/* Decorative ring */}
                  <div className={`absolute -inset-4 border-2 border-gradient-to-r ${service.gradient} rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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