import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BarChart3,
  MessagesSquare,
  BookOpen,
  Heart,
  Clock,
  Target,
  Lightbulb,
  Puzzle,
  ShieldCheck,
  Globe2,
  Mic,
  Compass,
  Scale,
  Brain,
  Rocket,
  Flag,
  Sparkles,
  PenTool,
  Bot,
  BadgeCheck,
  MonitorSmartphone,
  Route,
  FileText,
  UserCheck,
  Presentation,
  Crown,
  Briefcase,
  Cpu,
  Landmark,
  Linkedin,
  Handshake,
  Microscope,
  Factory,
  TrendingUp,
  Layers,
  ClipboardCheck,
  HeartHandshake,
  Eye,
  Search,
  CalendarCheck,
  UserPlus,
  RefreshCw,
  Shirt,
  Building2,
} from "lucide-react";
import AudienceExplorer from "./AudienceExplorer";
import { itemTints } from "./explorerTints";

const collegeStages = [
  {
    id: "year-1",
    tabLabel: "Year I",
    tabSub: "Foundation & Transition",
    tabIcon: GraduationCap,
    chip: "Year I",
    title: "Foundation & Transition",
    description:
      "Helping students settle into college life with the core skills, habits and confidence needed to learn and grow.",
    note: "A confident start to campus life—skills and habits that set the tone for the years ahead.",
    items: [
      { label: "College Readiness", icon: GraduationCap, tint: itemTints.blue },
      { label: "Communication Skills", icon: MessagesSquare, tint: itemTints.violet },
      { label: "Study Skills", icon: BookOpen, tint: itemTints.pink },
      { label: "Time Management", icon: Clock, tint: itemTints.amber },
      { label: "Emotional Intelligence", icon: Heart, tint: itemTints.rose },
      { label: "Learning Strategies", icon: Brain, tint: itemTints.green },
      { label: "Campus Etiquette", icon: Handshake, tint: itemTints.amber },
      { label: "Goal Setting", icon: Target, tint: itemTints.violet },
      { label: "Team Building", icon: Users, tint: itemTints.sky },
      { label: "Self-Awareness", icon: Eye, tint: itemTints.blue },
      { label: "Confidence Building", icon: TrendingUp, tint: itemTints.emerald },
    ],
  },
  {
    id: "year-2",
    tabLabel: "Year II",
    tabSub: "Professional Development",
    tabIcon: BookOpen,
    chip: "Year II",
    title: "Professional Development",
    description:
      "Building advanced communication, critical thinking and leadership capabilities that prepare students for the professional world.",
    note: "Sharpening the thinking, communication and leadership skills employers look for.",
    items: [
      { label: "Advanced Communication", icon: Mic, tint: itemTints.blue },
      { label: "Business Communication", icon: Briefcase, tint: itemTints.violet },
      { label: "Critical Thinking", icon: Brain, tint: itemTints.pink },
      { label: "Leadership Skills", icon: Flag, tint: itemTints.amber },
      { label: "Problem Solving", icon: Puzzle, tint: itemTints.rose },
      { label: "Innovation & Thinking", icon: Lightbulb, tint: itemTints.green },
      { label: "Design Thinking", icon: PenTool, tint: itemTints.amber },
      { label: "Creative Thinking", icon: Sparkles, tint: itemTints.violet },
      { label: "Emotional Intelligence", icon: Heart, tint: itemTints.sky },
      { label: "Conflict Management", icon: Handshake, tint: itemTints.blue },
      { label: "Decision Making", icon: Scale, tint: itemTints.emerald },
      { label: "AI for Learning", icon: Bot, tint: itemTints.green },
    ],
  },
  {
    id: "year-3",
    tabLabel: "Year III",
    tabSub: "Career Excellence",
    tabIcon: Briefcase,
    chip: "Year III",
    title: "Career Excellence",
    description:
      "Placement-focused preparation covering resumes, interviews, corporate communication and workplace readiness.",
    note: "From campus to career—everything students need to step into the workplace with confidence.",
    items: [
      { label: "Resume Development", icon: FileText, tint: itemTints.blue },
      { label: "LinkedIn Profile Development", icon: Linkedin, tint: itemTints.violet },
      { label: "Interview Skills", icon: UserCheck, tint: itemTints.pink },
      { label: "Group Discussion", icon: Users, tint: itemTints.amber },
      { label: "Corporate Communication", icon: Briefcase, tint: itemTints.rose },
      { label: "Workplace Etiquette", icon: Handshake, tint: itemTints.green },
      { label: "Corporate Grooming", icon: Shirt, tint: itemTints.amber },
      { label: "Career Planning", icon: Route, tint: itemTints.violet },
      { label: "Personal Branding", icon: BadgeCheck, tint: itemTints.sky },
      { label: "Entrepreneurship", icon: Rocket, tint: itemTints.blue },
      { label: "Project Presentation", icon: Presentation, tint: itemTints.emerald },
      { label: "AI Productivity Tools", icon: Cpu, tint: itemTints.green },
      { label: "Placement Readiness", icon: Building2, tint: itemTints.amber },
    ],
  },
];

const universityStage = [
  {
    id: "universities",
    tabLabel: "For Universities",
    tabSub: "Future Ready Campus",
    tabIcon: Landmark,
    chip: "For Universities",
    title: "Future Ready Campus",
    description:
      "A campus-wide program spanning leadership, research, innovation and employability—building institutions where students thrive globally.",
    note: "Building campuses where research, innovation and global citizenship flourish together.",
    items: [
      { label: "Leadership Academy", icon: Crown, tint: itemTints.blue },
      { label: "Research Excellence", icon: Microscope, tint: itemTints.violet },
      { label: "Innovation & Entrepreneurship", icon: Rocket, tint: itemTints.pink },
      { label: "Employability Enhancement", icon: Briefcase, tint: itemTints.amber },
      { label: "Industry Readiness", icon: Factory, tint: itemTints.rose },
      { label: "Global Citizenship", icon: Globe2, tint: itemTints.green },
      { label: "Communication Excellence", icon: MessagesSquare, tint: itemTints.amber },
      { label: "Career Development", icon: TrendingUp, tint: itemTints.violet },
      { label: "Personal Effectiveness", icon: UserCheck, tint: itemTints.sky },
      { label: "Digital Leadership", icon: MonitorSmartphone, tint: itemTints.blue },
    ],
  },
];

const facultyStage = [
  {
    id: "faculty-development",
    tabLabel: "Faculty Development",
    tabSub: "Empowering educators and academic leaders",
    tabIcon: Lightbulb,
    chip: "Faculty Development Programs",
    title: "Empowering Educators & Academic Leaders",
    description:
      "Professional development that equips educators with modern pedagogy, assessment design and technology-integrated teaching practices.",
    note: "When educators grow, every classroom and every learner grows with them.",
    items: [
      { label: "Innovation Pedagogy", icon: Lightbulb, tint: itemTints.blue },
      { label: "Outcome-based Education", icon: Target, tint: itemTints.violet },
      { label: "Bloom's Taxonomy", icon: Layers, tint: itemTints.pink },
      { label: "Assessment Design", icon: ClipboardCheck, tint: itemTints.amber },
      { label: "Classroom Management", icon: Users, tint: itemTints.rose },
      { label: "Student Engagement", icon: HeartHandshake, tint: itemTints.green },
      { label: "AI for Education", icon: Bot, tint: itemTints.amber },
      { label: "Technology Integration", icon: MonitorSmartphone, tint: itemTints.violet },
      { label: "Monitoring & Coaching", icon: Eye, tint: itemTints.sky },
      { label: "Research Skills", icon: Search, tint: itemTints.blue },
      { label: "Academic Leadership", icon: Crown, tint: itemTints.emerald },
      { label: "Professional Ethics", icon: Scale, tint: itemTints.green },
    ],
  },
];

const leadershipStage = [
  {
    id: "school-leadership",
    tabLabel: "School Leadership",
    tabSub: "Building strategic, future-ready schools",
    tabIcon: Users,
    chip: "School Leadership Programs",
    title: "Building Strategic, Future-Ready Schools",
    description:
      "Strategic programs that help school leaders strengthen academic planning, quality, branding and team culture.",
    note: "Strong leadership builds strong schools—strategy, culture and quality working together.",
    items: [
      { label: "Strategic School Leadership", icon: Compass, tint: itemTints.blue },
      { label: "Academic Planning", icon: CalendarCheck, tint: itemTints.violet },
      { label: "Teaching Performance Management", icon: BarChart3, tint: itemTints.pink },
      { label: "School Quality Improvement", icon: TrendingUp, tint: itemTints.amber },
      { label: "Parent Engagement", icon: HeartHandshake, tint: itemTints.rose },
      { label: "School Branding", icon: BadgeCheck, tint: itemTints.green },
      { label: "Admission Strategies", icon: UserPlus, tint: itemTints.amber },
      { label: "CBSE / State Board Readiness", icon: ShieldCheck, tint: itemTints.violet },
      { label: "Team Building", icon: Users, tint: itemTints.sky },
      { label: "Change Management", icon: RefreshCw, tint: itemTints.blue },
    ],
  },
];

const audienceSections = [
  {
    id: "colleges",
    title: "For Colleges",
    subtitle: "A three-year pathway from transition to career excellence.",
    stages: collegeStages,
    accent: "teal",
  },
  {
    id: "universities",
    title: "For Universities",
    subtitle: "Future Ready Campus—leadership, research, innovation and employability.",
    stages: universityStage,
    accent: "amber",
  },
  {
    id: "faculty",
    title: "For Faculty",
    subtitle: "Development programs that empower educators and academic leaders.",
    stages: facultyStage,
    accent: "violet",
  },
  {
    id: "leadership",
    title: "For School Leaders",
    subtitle: "Building strategic, future-ready schools.",
    stages: leadershipStage,
    accent: "terracotta",
  },
];

const AudienceSections = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {audienceSections.map((section) => (
        <section key={section.id} className="relative isolate overflow-hidden bg-white py-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_92%_0%,rgba(238,244,255,0.6),transparent_36%),radial-gradient(ellipse_at_4%_80%,rgba(255,246,232,0.5),transparent_34%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[92rem] px-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mt-4 font-serif text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-[#1c3d8f] sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#536987] sm:text-lg sm:leading-8">
                {section.subtitle}
              </p>
            </motion.div>

            <div className="mt-10 sm:mt-12">
              <AudienceExplorer stages={section.stages} accent={section.accent} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AudienceSections;
