import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Monitor,
  Users,
  MapPin,
  Calendar,
  Building,
  Target,
  Globe,
  Shield,
  Settings,
  ChevronRight,
  Sparkles,
  Lightbulb,
  School,
  Heart,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Award,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Services data
  const services = [
    {
      id: 1,
      title: "Individualized Education Plans (IEPs)",
      description:
        "We craft Individualized Education Plans (IEPs) that guide personalized learning journeys tailored to each student's unique needs, beginning from birth and evolving throughout their developmental stages.",
      icon: GraduationCap,
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-50",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Curriculum Development and Support",
      description:
        "We seamlessly integrate Activity-Based Learning (ABL) into the curriculum while continuously refining our pedagogical methods, and our team of experts collaborates closely with schools to design, implement, and update curriculum that align with current educational standards and best practices.",
      icon: BookOpen,
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Psychological Counseling",
      description:
        "Our Psychological Counseling services offer essential support for the mental health and well-being of students, parents, and educators, fostering a positive and resilient educational environment.",
      icon: Heart,
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-50",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Educational Technology Integration",
      description:
        "We provide cutting-edge educational technology tools and platforms that facilitate interactive learning, digital classrooms, and seamless communication between students and teachers. Our solutions include Learning Management Systems (LMS), language labs, and e-learning content development.",
      icon: Monitor,
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50",
      delay: 0.4,
    },
    {
      id: 5,
      title: "Soft Skills and Personality Training",
      description:
        "Through Soft Skills and Personality Training, we deliver seminars and workshops that focus on cultivating crucial interpersonal abilities and enhancing personality development, equipping individuals with the skills needed to succeed in both academic and professional settings.",
      icon: Users,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      delay: 0.5,
    },
    {
      id: 6,
      title: "Career Counseling and Guidance",
      description:
        "Our Career Counseling and Guidance services empower students to make informed and strategic decisions about their future career paths, providing them the knowledge and confidence to pursue their ambitions.",
      icon: MapPin,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      delay: 0.6,
    },
    {
      id: 7,
      title: "Students Information Systems (SIS)",
      description:
        "We offer comprehensive SIS solutions that streamline student data management, including attendance, grading, and reporting, ensuring that schools can efficiently manage and track student progress.",
      icon: Brain,
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      delay: 0.7,
    },
    {
      id: 8,
      title: "Students Service Centre (SSC)",
      description:
        "The Students Services Center (SSC) serves as a centralized hub dedicated to supporting the diverse needs of students throughout their academic journey, providing a wide range of essential services designed to enhance student success, well-being, and overall campus experience.",
      icon: Building,
      color: "from-teal-600 to-green-600",
      bgColor: "bg-teal-50",
      delay: 0.8,
    },
    {
      id: 9,
      title: "Outbound Training Programs",
      description:
        "We conduct Outbound Training Programs that use experiential learning to develop teamwork, leadership, and practical skills, offering participants hands-on experiences that translate to real-world success.",
      icon: Target,
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-50",
      delay: 0.9,
    },
    {
      id: 10,
      title: "Faculty Development Programs (FDP)",
      description:
        "We provide ongoing professional development programs and workshops for teachers and staff, focusing on modern teaching techniques, technology integration, and classroom management.",
      icon: Lightbulb,
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-yellow-50",
      delay: 1.0,
    },
    {
      id: 11,
      title: "Strategic Admission Planning",
      description:
        "Our Strategic Admission Planning services assist schools in developing effective strategies to attract and retain students, ensuring sustainable growth and a strong academic community.",
      icon: Calendar,
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
      delay: 1.1,
    },
    {
      id: 12,
      title: "School Administration Solutions",
      description:
        "Our administrative software solutions are designed to optimize school operations, including admissions, fee management, human resources, and facility management, allowing administrators to focus more on educational outcomes.",
      icon: Settings,
      color: "from-slate-600 to-gray-600",
      bgColor: "bg-slate-50",
      delay: 1.2,
    },
    {
      id: 13,
      title: "Digital Marketing",
      description:
        "Utilizing Digital Marketing, we effectively promote educational institutions and programs, leveraging online platforms to reach and engage target audiences with precision and impact.",
      icon: Globe,
      color: "from-violet-600 to-purple-600",
      bgColor: "bg-violet-50",
      delay: 1.3,
    },
    {
      id: 14,
      title: "IT Infrastructure and Support",
      description:
        "From setting up computer labs to ensuring secure and reliable internet connectivity, we offer IT infrastructure solutions that support the technological needs of modern schools. Our services include network design, hardware procurement, and ongoing technical support.",
      icon: Zap,
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      delay: 1.4,
    },
    {
      id: 15,
      title: "Security and Compliance Solutions",
      description:
        "We help schools implement robust security measures to protect student data and ensure compliance with local and international educational regulations. Our services include cybersecurity solutions, data protection policies, and compliance audits.",
      icon: Shield,
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-50",
      delay: 1.5,
    },
    {
      id: 16,
      title: "Custom Solutions and Consulting",
      description:
        "We understand that every school is unique, and we offer customized solutions and consulting services to address specific challenges and goals. Whether it's integrating new technologies or improving operational efficiency, we provide tailored strategies that deliver results.",
      icon: Sparkles,
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      delay: 1.6,
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: "School Management Software",
      description:
        "Comprehensive digital solution to streamline all school operations, from admissions to academic management with real-time data insights.",
      icon: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Language, Math & Robotic Labs Setup",
      description:
        "State-of-the-art laboratory setup with cutting-edge equipment and interactive learning environments for enhanced STEM education.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Trainings, Workshops & Seminars",
      description:
        "Comprehensive professional development programs for teachers, students, and parents to enhance skills and knowledge across all educational domains.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "IEP & Psychological Counseling",
      description:
        "Individualized Education Plans and professional psychological counseling services to support student mental health and personalized learning journeys.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Cultive has transformed how we manage our school operations. Everything is streamlined and efficient now.",
      name: "Michael Johnson",
      title: "School Principal",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      improvement: "85% reduction in administrative tasks",
    },
    {
      id: 2,
      quote: "As a teacher, I can now focus more on teaching rather than administrative tasks. Highly recommended!",
      name: "Sarah Williams",
      title: "High School Teacher",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      improvement: "3x more time for actual teaching",
    },
    {
      id: 3,
      quote: "The parent communication feature has been a game-changer for keeping track of my children's progress.",
      name: "David Chen",
      title: "Parent",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      improvement: "100% improved communication with school",
    },
  ];

  // Feature Card Component
  const FeatureCard = ({ title, description, icon, color }) => {
    return (
      <div className="group cursor-pointer">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
          <div
            className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };

  // Testimonial Card Component
  const TestimonialCard = ({ quote, name, title, image, rating, improvement }) => {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

        <div className="relative z-10">
          {/* Author info at top */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-white shadow-lg">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
              <p className="text-gray-600 text-sm">{title}</p>
            </div>
          </div>

          {/* Rating stars */}
          <div className="flex items-center mb-6">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{quote}"</blockquote>

          {/* Improvement metric */}
          <div className="mb-6 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-green-700 font-semibold text-sm">Result: {improvement}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      {/* Hero Section with mobile responsive fix */}

    {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center  pt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-2">
              <div className="space-y-0">
  
<div style={{
  display: "inline-block",
  padding: "8px 20px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  fontSize: "0.9rem",
  fontWeight: "600",
  borderRadius: "25px",
  textTransform: "lowercase",
  letterSpacing: "1px",
  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
  transform: "translateY(-3px)",
  marginTop: "1rem"
}}>
  the solution ocean
</div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transforming{' '}
                  <span className="text-blue-600">Education</span>{' '}
                  <span className="text-teal-500">for the</span>{' '}
                  Digital Age
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                A comprehensive platform that connects schools, teachers, parents, and students to create a seamless educational experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Explore Services
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
                  alt="Modern classroom with digital learning tools"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Digital Learning
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Comprehensive Educational Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services Offered
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Cultive is reimagining education management to create more time for what truly matters: teaching and
              learning. Our comprehensive suite of services transforms educational institutions through innovation and
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="relative group cursor-pointer h-full transform hover:-translate-y-2 transition-all duration-300"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`${service.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-white/50 backdrop-blur-sm`}
                  >
                    {/* Icon with gradient background */}
                    <div className="relative mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${
                          service.color
                        } flex items-center justify-center shadow-lg transform ${
                          hoveredService === service.id ? "rotate-12 scale-110" : ""
                        } transition-all duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{service.description}</p>

                      {/* Call to action */}
                      <div
                        className={`flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transform ${
                          hoveredService === service.id ? "translate-x-2" : ""
                        } transition-all duration-300`}
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "16+", label: "Comprehensive Services" },
              { number: "100%", label: "Customizable Solutions" },
              { number: "24/7", label: "Support Available" },
              { number: "∞", label: "Growth Possibilities" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our exclusive Premium services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Comprehensive tools designed to make education management simpler, more efficient, and more effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Hear from schools, teachers, and parents who have transformed their educational experience with Cultive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
                improvement={testimonial.improvement}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with geometric patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          </div>

          {/* Geometric Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Ready to Transform Education?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Join the Revolution in
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Educational Excellence
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-12 leading-relaxed">
              Partner with Cultive to unlock your institution's full potential. Experience seamless integration,
              innovative solutions, and measurable results that drive educational success.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300 text-center">Increase efficiency by 85% with our comprehensive solutions</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300 text-center">24/7 dedicated support from education technology experts</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-center">Get started in 48 hours with our streamlined onboarding</p>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div> */}

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="text-gray-300 text-sm mb-4">Trusted by educational institutions worldwide</div>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400">Schools</div>
              <div className="w-px h-8 bg-gray-500"></div>
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-gray-400">Teachers</div>
              <div className="w-px h-8 bg-gray-500"></div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-gray-400">Students</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
