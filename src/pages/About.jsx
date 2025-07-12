import { useRef, useEffect, useState } from 'react'

const About = () => {
  // State for animations
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isJourneyVisible, setIsJourneyVisible] = useState(false)

  // Refs for animations
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)
  const journeyRef = useRef(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef1.current) setIsVisible1(true)
          if (entry.target === sectionRef2.current) setIsVisible2(true)
          if (entry.target === sectionRef3.current) setIsVisible3(true)
          if (entry.target === journeyRef.current) setIsJourneyVisible(true)
        }
      })
    }, observerOptions)

    if (sectionRef1.current) observer.observe(sectionRef1.current)
    if (sectionRef2.current) observer.observe(sectionRef2.current)
    if (sectionRef3.current) observer.observe(sectionRef3.current)
    if (journeyRef.current) observer.observe(journeyRef.current)

    return () => observer.disconnect()
  }, [])

  // Core Principles data
  const corePrinciples = [
    {
      id: 1,
      title: "Empathy",
      description: "Honoring each child's unique journey.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      id: 2,
      title: "Excellence",
      description: "Upholding high standards in educational psychology.",
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    },
    {
      id: 3,
      title: "Innovation",
      description: "Championing creativity and adaptive learning.",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Partnering with families, educators, and communities.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    }
  ]

  // Methodology data
  const methodology = [
    {
      id: 1,
      number: "1",
      title: "Tailored Strategies",
      description: "Crafting individualized plans to maximize educational success."
    },
    {
      id: 2,
      number: "2",
      title: "Evaluation",
      description: "Assessing development, behavior, learning styles, interests, and viewpoints."
    },
    {
      id: 3,
      number: "3",
      title: "Supportive Learning Environment",
      description: "Cultivating spaces that promote both academic and creative excellence."
    },
    {
      id: 4,
      number: "4",
      title: "Parental Involvement",
      description: "Informing parents about distinctive traits, learning preferences, and vocational potentials."
    },
    {
      id: 5,
      number: "5",
      title: "Fostering Creativity",
      description: "Enabling children to engage in critical thinking and innovative problem-solving."
    }
  ]

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Reynolds",
      title: "Founder & CEO",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Former educator with 15 years of experience in teaching and school administration. Leading the vision to transform educational technology.",
      skills: ["Leadership", "Education", "Strategy"]
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Tech innovator with extensive experience in educational software development. Passionate about creating scalable solutions.",
      skills: ["React", "Node.js", "AI/ML"]
    },
    {
      id: 3,
      name: "Marcus Wilson",
      title: "Head of Product",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Product specialist dedicated to creating intuitive educational tools. Focus on user experience and product strategy.",
      skills: ["UX Design", "Product Strategy", "Analytics"]
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Director of Education",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Education expert focused on aligning technology with pedagogical best practices. Curriculum development specialist.",
      skills: ["Pedagogy", "Curriculum", "Training"]
    }
  ]

  // Company values with gradients
  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in educational technology, creating cutting-edge solutions that transform learning experiences.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Accessibility",
      description: "We believe quality education tools should be accessible to all schools and students, regardless of their economic situation or geographic location.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Empowerment",
      description: "We create tools that empower educators to teach more effectively and students to learn more deeply, fostering growth and achievement.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Growth",
      description: "We foster continuous growth and improvement for our platform and for the educators who use it, always striving for excellence.",
      icon: "M5 10l7-7m0 0l7 7m-7-7v18",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out forwards;
        }

        .animate-rotateIn {
          animation: rotateIn 0.8s ease-out forwards;
        }

        .equal-height {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-content {
          flex: 1;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .timeline-card {
          transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .timeline-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Mobile specific animations */
        @media (max-width: 768px) {
          .animate-slideInLeft,
          .animate-slideInRight {
            animation: slideInUp 0.8s ease-out forwards;
          }
          
          .hover-lift:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          
          .timeline-card:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }
      `}</style>

      {/* Professional Hero Section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-0 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-gray-900 leading-tight">
              Transforming Education Through <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section - Image Right, Content Left */}
      <section ref={sectionRef1} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <div className={`w-full lg:w-1/2 ${isVisible1 ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Beginning</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">About us</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Cultive is a leading solution service provider dedicated to empowering schools with innovative, technology-driven solutions.
                </p>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  that enhance the educational experience for students, teachers, and administrators. Our mission is to support educational institutions in creating dynamic, efficient, and engaging learning environments by offering a comprehensive range of products and services tailored to meet the unique needs of each school.
                </p>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Cultive given service to schools, teachers, parents, and students across the globe, making education more accessible, efficient, and effective.
                </p>
              </div>
            </div>
            
            <div className={`w-full lg:w-1/2 ${isVisible1 ? 'animate-slideInRight' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaborating" 
                  className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-20 floating-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Equal Height Cards with Hover Effects */}
      <section ref={sectionRef2} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 ${isVisible2 ? 'animate-slideInDown' : 'opacity-0'}`}>
            <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              The core principles that guide our work and our relationship with the educational community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className={`equal-height ${isVisible2 ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 h-full flex flex-col hover-lift">
                  <div className={`bg-gradient-to-br ${value.gradient} w-12 sm:w-14 h-12 sm:h-14 rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 floating-icon`}>
                    <svg className="w-6 sm:w-7 h-6 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <div className="card-content">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles and Methodology Section */}
      <section ref={journeyRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 sm:mb-16 ${isJourneyVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {corePrinciples.map((principle, index) => (
              <div
                key={principle.id}
                className={`${isJourneyVisible ? 'animate-zoomIn' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="timeline-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 h-full hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 text-orange-400 floating-icon">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={principle.icon} />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Methodology Section */}
          <div className={`text-center mb-12 sm:mb-16 ${isJourneyVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">Our Methodology</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {methodology.map((method, index) => (
              <div
                key={method.id}
                className={`${isJourneyVisible ? 'animate-zoomIn' : 'opacity-0'}`}
                style={{animationDelay: `${(index + 4) * 0.15}s`}}
              >
                <div className="timeline-card bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 h-full hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl font-bold text-orange-400 mr-3 sm:mr-4">{method.number}</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{method.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Equal Height Cards with Enhanced Hover Effects */}
      <section ref={sectionRef3} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 ${isVisible3 ? 'animate-slideInDown' : 'opacity-0'}`}>
            <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">Meet Our Experts</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Meet the passionate educators and technologists driving our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`equal-height ${isVisible3 ? (index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight') : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover-lift">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                      <h3 className="text-base sm:text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-xs sm:text-sm">{member.title}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="card-content mb-3 sm:mb-4">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{member.bio}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Educational Experience?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of educators who are already using Cultive to streamline their workflow and enhance student learning.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About