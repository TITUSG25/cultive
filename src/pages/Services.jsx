import { useRef, useState, useEffect } from 'react'
import { 
  Users, 
  TrendingUp, 
  UserCheck, 
  BookOpen, 
  GraduationCap, 
  UserMinus,
  Target,
  Database,
  Calendar,
  Shield,
  Headphones,
  Clock,
  Settings,
  CheckCircle,
  FileText,
  BarChart3,
  MessageCircle,
  Bell,
  Award,
  PenTool,
  Globe
} from 'lucide-react';

const ModernNetworkDiagram = ({ segments, title, centerTitle, size = 'medium' }) => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const centerX = 250;
  const centerY = 250;
  const radius = 180;
  const nodeRadius = 45;
  const centerRadius = 85;

  // Calculate positions for nodes in a circle with better spacing
  const nodes = segments.map((segment, index) => {
    const angle = (index * 2 * Math.PI) / segments.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    // Determine if node is in top half for text positioning
    const isTopHalf = y < centerY;
    
    return {
      ...segment,
      x,
      y,
      angle,
      isTopHalf
    };
  });

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative flex items-center justify-center">
        <svg 
          viewBox="0 0 500 500"
          className="w-[500px] h-[500px]"
        >
          {/* Default animated connection lines - always visible */}
          {nodes.map((node, index) => (
            <g key={`connection-${index}`}>
              {/* Line to center */}
              <line
                x1={centerX}
                y1={centerY}
                x2={node.x}
                y2={node.y}
                stroke={node.color}
                strokeWidth="3"
                strokeDasharray="8,8"
                className="transition-all duration-500"
                style={{
                  strokeDashoffset: animate ? '0' : '100',
                  animation: animate ? 'dash 2s linear infinite' : 'none'
                }}
              />
              
              {/* Arrow at the end of line - always visible */}
              <polygon
                points={`${node.x - 8},${node.y - 4} ${node.x - 8},${node.y + 4} ${node.x - 16},${node.y}`}
                fill={node.color}
                transform={`rotate(${(node.angle * 180 / Math.PI) + 90} ${node.x} ${node.y})`}
                className="animate-pulse"
                style={{
                  animation: 'arrowPulse 2s ease-in-out infinite'
                }}
              />
            </g>
          ))}

          {/* Central Hub - removed hover effects */}
          <circle
            cx={centerX}
            cy={centerY}
            r={centerRadius}
            fill="url(#hubGradient)"
            stroke="#3b82f6"
            strokeWidth="4"
            className="drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 12px 24px rgba(59, 130, 246, 0.4))'
            }}
          />

          {/* Service Nodes */}
          {nodes.map((node, index) => {
            const IconComponent = node.icon;
            const isHovered = hoveredNode === index;
            
            return (
              <g 
                key={`node-${index}`}
                style={{
                  transform: `scale(${isHovered ? 1.1 : 1})`,
                  transformOrigin: `${node.x}px ${node.y}px`,
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                {/* Node pulse effect */}
                {isHovered && (
                  <>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={nodeRadius + 15}
                      fill={node.color}
                      opacity="0.15"
                      className="animate-ping"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={nodeRadius + 10}
                      fill={node.color}
                      opacity="0.2"
                      className="animate-pulse"
                    />
                  </>
                )}
                
                {/* Node background with dark color */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeRadius}
                  fill={node.color}
                  stroke="white"
                  strokeWidth="4"
                  className="drop-shadow-md"
                  style={{
                    filter: `drop-shadow(0 6px 16px ${node.color}60)`
                  }}
                />
                
                {/* Icon */}
                <foreignObject
                  x={node.x - 16}
                  y={node.y - 16}
                  width={32}
                  height={32}
                  className="pointer-events-none"
                >
                  <IconComponent 
                    size={32}
                    color="white"
                    className="drop-shadow-sm"
                  />
                </foreignObject>
                
                {/* Node label with improved positioning to prevent overlap */}
                <text
                  x={node.x}
                  y={node.isTopHalf ? node.y - nodeRadius - 30 : node.y + nodeRadius + 35}
                  textAnchor="middle"
                  className="fill-gray-800 font-bold text-base pointer-events-none"
                  style={{ 
                    fontSize: '16px',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  {node.title.split(' ')[0]}
                </text>
                <text
                  x={node.x}
                  y={node.isTopHalf ? node.y - nodeRadius - 15 : node.y + nodeRadius + 50}
                  textAnchor="middle"
                  className="fill-gray-600 font-medium text-sm pointer-events-none"
                  style={{ 
                    fontSize: '14px',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  {node.title.split(' ').slice(1).join(' ')}
                </text>

                {/* Hover tooltip */}
                {isHovered && (
                  <foreignObject
                    x={node.x - 60}
                    y={node.isTopHalf ? node.y + nodeRadius + 20 : node.y - nodeRadius - 80}
                    width={120}
                    height={60}
                    className="pointer-events-none"
                  >
                    <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                      <div className="text-xs font-semibold text-gray-800 text-center">
                        {node.title}
                      </div>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}

          {/* Central Hub Content */}
          <foreignObject
            x={centerX - 50}
            y={centerY - 20}
            width={100}
            height={40}
            className="pointer-events-none"
          >
            <div className="text-center">
              <div className="text-white font-bold text-base leading-tight">
                {centerTitle.split(' ').slice(0, 2).join(' ')}
              </div>
              <div className="text-blue-100 font-semibold text-sm">
                {centerTitle.split(' ').slice(2).join(' ')}
              </div>
            </div>
          </foreignObject>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 1}} />
            </linearGradient>
            
            <style>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -16;
                }
              }
              @keyframes arrowPulse {
                0%, 100% {
                  opacity: 0.7;
                  transform: scale(1);
                }
                50% {
                  opacity: 1;
                  transform: scale(1.1);
                }
              }
            `}</style>
          </defs>
        </svg>
      </div>
      
      {/* Title below diagram */}
      <div className="mt-8 text-center">
        <h4 className="text-2xl font-bold text-gray-800 mb-2">
          {centerTitle}
        </h4>
        <p className="text-lg text-gray-600">
          Interactive Service Network
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  // Refs for animations
  const heroRef = useRef(null)
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)
  const sectionRef4 = useRef(null)

  // Student Lifecycle Management segments
  const lifecycleSegments = [
    {
      id: 1,
      title: 'Alumni Network',
      icon: Users,
      color: '#1f2937',
      description: 'Maintaining relationships with graduates and leveraging their success stories for institutional growth'
    },
    {
      id: 2,
      title: 'Marketing & Outreach',
      icon: TrendingUp,
      color: '#374151',
      description: 'Attracting prospective students through strategic outreach and brand building initiatives'
    },
    {
      id: 3,
      title: 'Admissions Process',
      icon: UserCheck,
      color: '#4b5563',
      description: 'Streamlined application processing and student selection procedures with digital efficiency'
    },
    {
      id: 4,
      title: 'Student Enrollment',
      icon: Target,
      color: '#6b7280',
      description: 'Seamless registration and onboarding process for new students entering the institution'
    },
    {
      id: 5,
      title: 'Active Learning',
      icon: BookOpen,
      color: '#1f2937',
      description: 'Supporting active students throughout their academic journey with comprehensive resources'
    },
    {
      id: 6,
      title: 'Student Retention',
      icon: UserMinus,
      color: '#374151',
      description: 'Strategies to keep students engaged and prevent dropouts through proactive intervention'
    }
  ];

  // School Management segments with updated colors
  const schoolSegments = [
    {
      id: 1,
      title: 'Data Management',
      icon: Database,
      color: '#f59e0b',
      description: 'Centralized system for managing student, staff, and institutional records securely'
    },
    {
      id: 2,
      title: 'Event Coordination',
      icon: Calendar,
      color: '#ef4444',
      description: 'Seamless planning and execution of campus events with digital coordination tools'
    },
    {
      id: 3,
      title: 'Admission Planning',
      icon: Target,
      color: '#10b981',
      description: 'Data-driven strategies to optimize admissions process and enrollment conversion'
    },
    {
      id: 4,
      title: 'Administration',
      icon: Settings,
      color: '#8b5cf6',
      description: 'Comprehensive tools for managing daily operations and institutional workflows'
    },
    {
      id: 5,
      title: 'IT Support',
      icon: Headphones,
      color: '#06b6d4',
      description: 'Reliable technology infrastructure with continuous support and maintenance'
    },
    {
      id: 6,
      title: 'Staff Management',
      icon: Clock,
      color: '#f97316',
      description: 'Efficient scheduling and performance monitoring for all staff members'
    }
  ];

  // Teacher segments
  const teacherSegments = [
    {
      id: 1,
      title: 'Attendance Tracking',
      icon: CheckCircle,
      color: '#059669',
      description: 'Digital attendance management with real-time accuracy and automated reporting'
    },
    {
      id: 2,
      title: 'Assignment Management',
      icon: FileText,
      color: '#1e40af',
      description: 'Streamlined creation, distribution, and grading of student assignments'
    },
    {
      id: 3,
      title: 'Exam Scheduling',
      icon: Calendar,
      color: '#7c3aed',
      description: 'Flexible exam scheduling with automated assessment and grading capabilities'
    },
    {
      id: 4,
      title: 'Performance Analytics',
      icon: BarChart3,
      color: '#d97706',
      description: 'Data-driven insights into student progress and learning effectiveness'
    },
    {
      id: 5,
      title: 'Parent Communication',
      icon: MessageCircle,
      color: '#be185d',
      description: 'Direct communication channels for transparent parent-teacher engagement'
    }
  ];

  // Parent segments
  const parentSegments = [
    {
      id: 1,
      title: 'Attendance Updates',
      icon: Bell,
      color: '#7c3aed',
      description: 'Real-time notifications about your child\'s daily attendance and punctuality'
    },
    {
      id: 2,
      title: 'Grade Notifications',
      icon: Award,
      color: '#0891b2',
      description: 'Instant alerts on assignments, test scores, and overall academic performance'
    },
    {
      id: 3,
      title: 'Teacher Messaging',
      icon: MessageCircle,
      color: '#e11d48',
      description: 'Direct communication with teachers for feedback, concerns, and updates'
    },
    {
      id: 4,
      title: 'Event Calendar',
      icon: Calendar,
      color: '#d97706',
      description: 'Stay informed about school events, activities, and important dates'
    },
    {
      id: 5,
      title: 'Progress Reports',
      icon: BarChart3,
      color: '#4338ca',
      description: 'Comprehensive reports tracking your child\'s academic growth and development'
    }
  ];

  // Student segments
  const studentSegments = [
    {
      id: 1,
      title: 'Assignment Hub',
      icon: PenTool,
      color: '#d97706',
      description: 'Centralized dashboard for viewing, managing, and submitting all assignments'
    },
    {
      id: 2,
      title: 'Exam Schedule',
      icon: Calendar,
      color: '#1e40af',
      description: 'Clear view of upcoming exams with automated reminders and preparation tips'
    },
    {
      id: 3,
      title: 'Performance Tracking',
      icon: BarChart3,
      color: '#059669',
      description: 'Personal analytics dashboard showing academic progress and achievement trends'
    },
    {
      id: 4,
      title: 'Learning Resources',
      icon: Globe,
      color: '#7c3aed',
      description: 'Access to digital learning materials, study guides, and educational content'
    },
    {
      id: 5,
      title: 'Collaboration Tools',
      icon: Users,
      color: '#dc2626',
      description: 'Digital workspaces for group projects and peer collaboration activities'
    }
  ];

  // Service sections with diagram data
  const services = [
    {
      id: 1,
      title: "For Schools",
      subtitle: "Comprehensive School Management Solutions",
      description: "Cultive empowers schools by streamlining administrative tasks, improving communication, and enhancing overall educational outcomes through a suite of integrated services designed for modern educational institutions.",
      segments: schoolSegments,
      centerTitle: "School Management System",
      ref: sectionRef1,
      mainGradient: "from-orange-400 to-red-600",
      bgColor: "bg-orange-500"
    },
    {
      id: 2,
      title: "For Teachers",
      subtitle: "Empowering Educators with Smart Tools",
      description: "Focus more on teaching and less on administrative tasks through our intuitive, user-friendly educational tools designed specifically for modern educators to enhance classroom efficiency and student engagement.",
      segments: teacherSegments,
      centerTitle: "Teacher Productivity Suite",
      ref: sectionRef2,
      mainGradient: "from-green-400 to-green-600",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      title: "For Parents",
      subtitle: "Stay Connected to Your Child's Journey",
      description: "Maintain active engagement with your child's educational progress and communicate effectively with teachers through comprehensive parent-focused features that keep you informed and involved in their academic success.",
      segments: parentSegments,
      centerTitle: "Parent Engagement Portal",
      ref: sectionRef3,
      mainGradient: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      id: 4,
      title: "For Students",
      subtitle: "Organize, Track, and Excel in Your Studies",
      description: "Stay organized, monitor academic progress, and access essential learning resources with student-focused tools designed to enhance your educational experience and academic achievement throughout your learning journey.",
      segments: studentSegments,
      centerTitle: "Student Learning Hub",
      ref: sectionRef4,
      mainGradient: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-500"
    }
  ]

  const DiagramSection = ({ service, index }) => {
    const isEven = index % 2 === 0
    
    return (
      <section
        ref={service.ref}
        className={`py-20 ${isEven ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-300 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
            
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className={`w-16 h-1 ${service.bgColor} rounded-full`}></div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {service.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                {service.subtitle}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List - Split into two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {service.segments.map((segment, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-5 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className={`p-3 rounded-lg flex-shrink-0`} style={{backgroundColor: segment.color}}>
                      <segment.icon size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-base">{segment.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{segment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Diagram */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end items-center min-h-[650px]">
              <div className="flex items-center justify-center">
                <ModernNetworkDiagram 
                  segments={index === 0 ? lifecycleSegments : service.segments}
                  title={service.title}
                  centerTitle={index === 0 ? "Student Lifecycle Management" : service.centerTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full opacity-10 blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wide">
              Our Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transforming Education
            <br />
            Through <span className="text-blue-600">Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-600 leading-relaxed">
            Comprehensive solutions designed for each stakeholder in the educational ecosystem, 
            empowering schools with innovative, technology-driven solutions.
          </p>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <DiagramSection 
          key={service.id} 
          service={service} 
          index={index}
        />
      ))}

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full opacity-5"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Educational Institution?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already benefiting from our comprehensive solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services