import { useState } from "react";
import {
  Users,
  UserCheck,
  BookOpen,
  Target,
  Database,
  Calendar,
  CheckCircle,
  FileText,
  BarChart3,
  MessageCircle,
  Award,
  PenTool,
  DollarSign,
  Home,
  Bus,
  CreditCard,
  User,
  Clock,
} from "lucide-react";
import school_tree from "../assets/school_tree.png";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";

const ModernNetworkDiagram = ({ segments, centerTitle }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const centerX = 200;
  const centerY = 200;
  const radius = 130;
  const nodeRadius = 28;
  const centerRadius = 50;

  const nodes = segments.map((segment, index) => {
    const angle = (index * 2 * Math.PI) / segments.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return {
      ...segment,
      x,
      y,
      angle,
    };
  });

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto max-w-sm">
        {nodes.map((node, index) => (
          <g key={`connection-${index}`}>
            <line x1={centerX} y1={centerY} x2={node.x} y2={node.y} stroke="#e5e7eb" strokeWidth="2" />

            <circle r="3" fill={node.color} className="opacity-60">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin={`${index * 0.5}s`}
                path={`M ${centerX} ${centerY} L ${node.x} ${node.y}`}
              />
            </circle>
          </g>
        ))}

        <circle cx={centerX} cy={centerY} r={centerRadius} fill="#1e40af" className="drop-shadow-lg" />

        {nodes.map((node, index) => {
          const IconComponent = node.icon;
          const isHovered = hoveredNode === index;

          return (
            <g
              key={`node-${index}`}
              onMouseEnter={() => setHoveredNode(index)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {isHovered && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeRadius + 8}
                  fill={node.color}
                  opacity="0.2"
                  className="animate-pulse"
                />
              )}

              <circle
                cx={node.x}
                cy={node.y}
                r={nodeRadius}
                fill={node.color}
                stroke="white"
                strokeWidth="2"
                className="drop-shadow-md"
              />

              <foreignObject x={node.x - 12} y={node.y - 12} width={24} height={24} className="pointer-events-none">
                <IconComponent size={24} color="white" />
              </foreignObject>

              <text
                x={node.x}
                y={node.y + nodeRadius + 16}
                textAnchor="middle"
                className="fill-gray-700 font-medium text-xs"
              >
                {node.title}
              </text>

              {isHovered && (
                <foreignObject
                  x={node.x - 50}
                  y={node.y - nodeRadius - 45}
                  width={100}
                  height={40}
                  className="pointer-events-none"
                >
                  <div className="bg-white p-2 rounded-lg shadow-lg border">
                    <div className="text-xs font-medium text-gray-800 text-center">{node.description}</div>
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}

        <foreignObject x={centerX - 40} y={centerY - 12} width={80} height={24} className="pointer-events-none">
          <div className="text-center">
            <div className="text-white font-bold text-xs leading-tight">{centerTitle}</div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

const Services = () => {
  const schoolSegments = [
    {
      id: 1,
      title: "Examination",
      icon: FileText,
      color: "#dc2626",
      description: "Comprehensive exam management and assessment tools",
    },
    {
      id: 2,
      title: "Expenses",
      icon: DollarSign,
      color: "#f59e0b",
      description: "Financial tracking and expense management",
    },
    {
      id: 3,
      title: "Hostel",
      icon: Home,
      color: "#3b82f6",
      description: "Student accommodation and hostel management",
    },
    {
      id: 4,
      title: "Parent",
      icon: Users,
      color: "#10b981",
      description: "Parent communication and engagement platform",
    },
    {
      id: 5,
      title: "Certificate",
      icon: Award,
      color: "#84cc16",
      description: "Digital certificate generation and management",
    },
    {
      id: 6,
      title: "Student",
      icon: User,
      color: "#f97316",
      description: "Student information and academic tracking",
    },
    {
      id: 7,
      title: "Transport",
      icon: Bus,
      color: "#f59e0b",
      description: "School transport and route management",
    },
    {
      id: 8,
      title: "Fees",
      icon: CreditCard,
      color: "#1e40af",
      description: "Fee collection and payment processing",
    },
    {
      id: 9,
      title: "Communicate",
      icon: MessageCircle,
      color: "#0f172a",
      description: "Internal communication and messaging system",
    },
  ];

  const teacherSegments = [
    {
      id: 1,
      title: "Attendance",
      icon: CheckCircle,
      color: "#059669",
      description: "Digital attendance tracking and management",
    },
    {
      id: 2,
      title: "Assignments",
      icon: FileText,
      color: "#1e40af",
      description: "Assignment creation and submission portal",
    },
    {
      id: 3,
      title: "Grading",
      icon: Award,
      color: "#7c3aed",
      description: "Automated grading and assessment tools",
    },
    {
      id: 4,
      title: "Progress",
      icon: BarChart3,
      color: "#be185d",
      description: "Student progress tracking and analytics",
    },
    {
      id: 5,
      title: "Resources",
      icon: Database,
      color: "#0891b2",
      description: "Educational resources and material library",
    },
    {
      id: 6,
      title: "Communication",
      icon: MessageCircle,
      color: "#dc2626",
      description: "Parent-teacher communication platform",
    },
  ];

  const parentSegments = [
    {
      id: 1,
      title: "Attendance",
      icon: CheckCircle,
      color: "#7c3aed",
      description: "Real-time attendance notifications",
    },
    {
      id: 2,
      title: "Grades",
      icon: Award,
      color: "#0891b2",
      description: "Academic performance and grade updates",
    },
    {
      id: 3,
      title: "Messages",
      icon: MessageCircle,
      color: "#e11d48",
      description: "Direct messaging with teachers and school",
    },
    {
      id: 4,
      title: "Events",
      icon: Calendar,
      color: "#d97706",
      description: "School events and activity calendar",
    },
    {
      id: 5,
      title: "Reports",
      icon: FileText,
      color: "#4338ca",
      description: "Comprehensive academic progress reports",
    },
    {
      id: 6,
      title: "Fees",
      icon: CreditCard,
      color: "#059669",
      description: "Fee payment and transaction history",
    },
    {
      id: 7,
      title: "Transport",
      icon: Bus,
      color: "#f59e0b",
      description: "School transport tracking and updates",
    },
  ];

  const studentSegments = [
    {
      id: 1,
      title: "Assignments",
      icon: PenTool,
      color: "#d97706",
      description: "Assignment submission and tracking portal",
    },
    {
      id: 2,
      title: "Schedule",
      icon: Calendar,
      color: "#1e40af",
      description: "Class schedule and exam timetable",
    },
    {
      id: 3,
      title: "Grades",
      icon: BarChart3,
      color: "#059669",
      description: "Academic performance and grade tracking",
    },
    {
      id: 4,
      title: "Library",
      icon: BookOpen,
      color: "#7c3aed",
      description: "Digital library and learning resources",
    },
    {
      id: 5,
      title: "Projects",
      icon: Users,
      color: "#dc2626",
      description: "Collaborative projects and group work",
    },
    {
      id: 6,
      title: "Attendance",
      icon: CheckCircle,
      color: "#10b981",
      description: "Personal attendance record and history",
    },
    {
      id: 7,
      title: "Activities",
      icon: Target,
      color: "#f97316",
      description: "Extracurricular activities and clubs",
    },
  ];

  const services = [
    {
      id: 1,
      title: "For Schools",
      subtitle: "Comprehensive School Management Solutions",
      description:
        "Cultive empowers schools by streamlining administrative tasks, improving communication, and enhancing overall educational outcomes through a suite of integrated services designed for modern educational institutions.",
      segments: schoolSegments,
      centerTitle: "School Management",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "For Teachers",
      subtitle: "Empowering Educators with Smart Tools",
      description:
        "Focus more on teaching and less on administrative tasks through our intuitive, user-friendly educational tools designed specifically for modern educators to enhance classroom efficiency and student engagement.",
      segments: teacherSegments,
      centerTitle: "Teacher Dashboard",
      bgColor: "bg-green-50",
      accentColor: "bg-green-500",
    },
    {
      id: 3,
      title: "For Parents",
      subtitle: "Stay Connected to Your Child's Journey",
      description:
        "Maintain active engagement with your child's educational progress and communicate effectively with teachers through comprehensive parent-focused features that keep you informed and involved in their academic success.",
      segments: parentSegments,
      centerTitle: "Parent Portal",
      bgColor: "bg-purple-50",
      accentColor: "bg-purple-500",
    },
    {
      id: 4,
      title: "For Students",
      subtitle: "Organize, Track, and Excel in Your Studies",
      description:
        "Stay organized, monitor academic progress, and access essential learning resources with student-focused tools designed to enhance your educational experience and academic achievement throughout your learning journey.",
      segments: studentSegments,
      centerTitle: "Student Hub",
      bgColor: "bg-orange-50",
      accentColor: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transforming Education
            <br />
            Through Innovation
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600">
            Comprehensive solutions designed for each stakeholder in the educational ecosystem, empowering schools with
            innovative, technology-driven solutions.
          </p>
        </div>
      </section>

      <div className="space-y-0">
        {services.map((service, index) => (
          <section key={service.id} className={`py-16 ${service.bgColor}`}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`w-12 h-1 ${service.accentColor} rounded-full`}></div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{service.title}</h2>

                  <h3 className="text-xl font-semibold text-blue-600">{service.subtitle}</h3>

                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {service.segments.slice(0, 6).map((segment, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 border border-gray-100"
                      >
                        <div className={`p-2 rounded-lg flex-shrink-0`} style={{ backgroundColor: segment.color }}>
                          <segment.icon size={16} color="white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{segment.title}</h4>
                          <p className="text-xs text-gray-600">
                            {segment.description.split(" ").slice(0, 6).join(" ")}...
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.id === 1 && (
                    <img
                      src={school_tree}
                      alt="School Management System"
                      style={{
                        height: "580px",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        marginTop: "25px",
                      }}
                    />
                  )}
                  {service.id === 2 && (
                    <img
                      src={teacher}
                      alt="Teacher Dashboard"
                      style={{
                        height: "250px",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        marginTop: "25px",
                      }}
                    />
                  )}
                  {service.id === 3 && (
                    <ModernNetworkDiagram segments={service.segments} centerTitle={service.centerTitle} />
                  )}
                  {service.id === 4 && (
                    <img
                      src={student}
                      alt="Student Hub"
                      style={{
                        height: "400px",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        marginTop: "25px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Educational Institution?
          </h2>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already benefiting from our comprehensive solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;