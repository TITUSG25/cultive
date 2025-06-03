import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'

//images
import Student from "../assets/Student.jpg"

// Components
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'

// Animations
import rocketAnimation from '../assets/animations/rocket.json'
import targetAnimation from '../assets/animations/target.json'
import ideaAnimation from '../assets/animations/idea.json'
import teamAnimation from '../assets/animations/team.json'

const Home = () => {
  // Refs for animations
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)
  
  // Check if sections are in view
  const isInView1 = useInView(sectionRef1, { once: true, amount: 0.3 })
  const isInView2 = useInView(sectionRef2, { once: true, amount: 0.3 })
  const isInView3 = useInView(sectionRef3, { once: true, amount: 0.3 })

  // Features data
  const features = [
    {
      id: 1,
      title: 'Attendance Management',
      description: 'Track student attendance with ease using our intuitive digital tools and real-time reporting.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      color: 'bg-primary-500',
    },
    {
      id: 2,
      title: 'Exam Scheduling',
      description: 'Create, schedule, and manage exams effortlessly with our comprehensive examination system.',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Parent Communication',
      description: 'Keep parents informed with real-time updates and secure messaging for better engagement.',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      color: 'bg-yellow-500',
    },
    {
      id: 4,
      title: 'Performance Analytics',
      description: 'Gain insights with detailed analytics and visualizations of student performance and progress.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'bg-orange-500',
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Cultive has transformed how we manage our school operations. Everything is streamlined and efficient now.",
      name: "Michael Johnson",
      title: "School Principal",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      quote: "As a teacher, I can now focus more on teaching rather than administrative tasks. Highly recommended!",
      name: "Sarah Williams",
      title: "High School Teacher",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      quote: "The parent communication feature has been a game-changer for keeping track of my children's progress.",
      name: "David Chen",
      title: "Parent",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  // Who we are sections
  const whoWeAreSections = [
    {
      id: 1,
      title: "Innovative Education Platform",
      description: "We're revolutionizing educational management with cutting-edge technology that streamlines administrative tasks.",
      animation: rocketAnimation,
    },
    {
      id: 2,
      title: "Student-Centered Approach",
      description: "Our platform puts students at the center, focusing on enhancing their learning experience and outcomes.",
      animation: targetAnimation,
    },
    {
      id: 3,
      title: "Simplified School Management",
      description: "From attendance to exams, we simplify complex processes to save time and reduce administrative burden.",
      animation: ideaAnimation,
    },
    {
      id: 4,
      title: "Connected Community",
      description: "We bring together teachers, students, and parents to create a collaborative educational environment.",
      animation: teamAnimation,
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-36 lg:py-52 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming <span className="gradient-text">Education</span> for the Digital Age
              </h1>
              <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
                A comprehensive platform that connects schools, teachers, parents, and students to create a seamless educational experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-500 font-medium py-3 px-8 rounded-full shadow-lg border border-primary-500 hover:bg-gray-50 transition-colors"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <img 
                  src={Student} 
                  alt="Students learning" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-5 -right-5 bg-yellow-500 text-white p-3 rounded-lg shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                  className="absolute -bottom-5 -left-5 bg-primary-500 text-white p-3 rounded-lg shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section ref={sectionRef1} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Cultive is reimagining education management to create more time for what truly matters: teaching and learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whoWeAreSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <div className="w-20 h-20 flex-shrink-0">
                  <Player
                    autoplay
                    loop
                    src={section.animation}
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{section.title}</h3>
                  <p className="text-gray-700">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef2} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Comprehensive tools designed to make education management simpler, more efficient, and more effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <FeatureCard 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sectionRef3} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Hear from schools, teachers, and parents who have transformed their educational experience with Cultive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <TestimonialCard 
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  image={testimonial.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Join the Revolution in Education
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 text-white/90">
              Start transforming your educational experience today with our comprehensive platform.
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

export default Home