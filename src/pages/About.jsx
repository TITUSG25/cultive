import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  // Refs for animations
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)
  
  // Check if sections are in view
  const isInView1 = useInView(sectionRef1, { once: true, amount: 0.3 })
  const isInView2 = useInView(sectionRef2, { once: true, amount: 0.3 })
  const isInView3 = useInView(sectionRef3, { once: true, amount: 0.3 })

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Reynolds",
      title: "Founder & CEO",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Former educator with 15 years of experience in teaching and school administration."
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Tech innovator with extensive experience in educational software development."
    },
    {
      id: 3,
      name: "Marcus Wilson",
      title: "Head of Product",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Product specialist dedicated to creating intuitive educational tools."
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Director of Education",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Education expert focused on aligning technology with pedagogical best practices."
    }
  ]

  // Company values
  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in educational technology.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      id: 2,
      title: "Accessibility",
      description: "We believe quality education tools should be accessible to all schools and students.",
      icon: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    },
    {
      id: 3,
      title: "Empowerment",
      description: "We create tools that empower educators to teach more effectively and students to learn more deeply.",
      icon: "M13 6v6m0 0v6m0-6h6m-6 0H7"
    },
    {
      id: 4,
      title: "Growth",
      description: "We foster continuous growth and improvement for our platform and for the educators who use it.",
      icon: "M5 10l7-7m0 0l7 7m-7-7v18"
    }
  ]

  // Timeline events
  const timelineEvents = [
    {
      id: 1,
      year: "2018",
      title: "Founded",
      description: "Cultive was founded with a mission to transform educational technology."
    },
    {
      id: 2,
      year: "2019",
      title: "First School Partnership",
      description: "Launched our platform with our first partner school, serving 500 students."
    },
    {
      id: 3,
      year: "2020",
      title: "Remote Learning Support",
      description: "Expanded our platform to support remote and hybrid learning environments."
    },
    {
      id: 4,
      year: "2021",
      title: "Major Expansion",
      description: "Reached 100 schools and 50,000 students across the country."
    },
    {
      id: 5,
      year: "2022",
      title: "International Launch",
      description: "Expanded our platform to international schools in 10 countries."
    },
    {
      id: 6,
      year: "2023",
      title: "Mobile App",
      description: "Launched our comprehensive mobile app for students, teachers, and parents."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About Cultive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
          >
            We're on a mission to revolutionize education through innovative technology and a deep understanding of the needs of schools, teachers, parents, and students.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={sectionRef1} className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Cultive was founded in 2018 by a team of educators and technologists who recognized the administrative burden that was taking teachers away from their primary focus: teaching.
                </p>
                <p className="text-gray-700">
                  What began as a simple attendance tracking tool has evolved into a comprehensive platform that addresses virtually every aspect of educational management, from attendance and exams to communication and reporting.
                </p>
                <p className="text-gray-700">
                  Today, Cultive serves thousands of schools, teachers, parents, and students across the globe, making education more accessible, efficient, and effective for all stakeholders.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaborating" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={sectionRef2} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              The core principles that guide our work and our relationship with the educational community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              The milestones that have shaped our growth and evolution over the years.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Content */}
                  <div className="w-1/2 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? 'mr-6' : 'ml-6'
                    }`}>
                      <span className="text-primary-500 font-bold">{event.year}</span>
                      <h3 className="font-serif text-xl font-semibold mt-2 mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-primary-500 border-4 border-white shadow"></div>
                  </div>
                  
                  {/* Empty Space for alignment */}
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={sectionRef3} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Meet the passionate educators and technologists driving our mission forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                    <p className="text-white/90">{member.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About