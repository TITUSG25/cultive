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
  Trophy,
  Lightbulb,
  Puzzle,
  ShieldCheck,
  Coins,
  Sprout,
  Star,
  Globe2,
  Mic,
  Compass,
  Scale,
  Brain,
  Rocket,
  HeartPulse,
  NotebookPen,
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
  Wallet,
  Briefcase,
  Cpu,
} from "lucide-react";
import AudienceExplorer from "./AudienceExplorer";
import { itemTints } from "./explorerTints";

const schoolStages = [
  {
    id: "grades-6-8",
    tabLabel: "Grades 6–8",
    tabSub: "Foundation for Future Success",
    tabIcon: GraduationCap,
    chip: "Grades 6–8",
    title: "Foundation for Future Success",
    description:
      "A strong foundation in essential life skills to help students grow into confident, curious and responsible individuals.",
    note: "Empowering young learners with the skills, values, and mindset to thrive in a changing world.",
    items: [
      { label: "Communication Skills", icon: MessagesSquare, tint: itemTints.blue },
      { label: "Study Skills & Learning Strategies", icon: BookOpen, tint: itemTints.violet },
      { label: "Emotional Intelligence", icon: Heart, tint: itemTints.pink },
      { label: "Time Management", icon: Clock, tint: itemTints.amber },
      { label: "Goal Setting", icon: Target, tint: itemTints.rose },
      { label: "Team Building", icon: Users, tint: itemTints.green },
      { label: "Leadership Basics", icon: Trophy, tint: itemTints.amber },
      { label: "Creative Thinking", icon: Lightbulb, tint: itemTints.violet },
      { label: "Problem Solving", icon: Puzzle, tint: itemTints.sky },
      { label: "Digital Citizenship", icon: ShieldCheck, tint: itemTints.blue },
      { label: "Financial Literacy Basics", icon: Coins, tint: itemTints.emerald },
      { label: "Growth Mindset", icon: Sprout, tint: itemTints.green },
      { label: "Character Education", icon: Star, tint: itemTints.amber },
      { label: "Social Responsibility", icon: Globe2, tint: itemTints.violet },
    ],
  },
  {
    id: "grades-9-10",
    tabLabel: "Grades 9–10",
    tabSub: "Preparation for Academic & Career Success",
    tabIcon: BookOpen,
    chip: "Grades 9–10",
    title: "Preparation for Academic & Career Success",
    description:
      "Focused preparation that builds academic confidence, career awareness and the future-ready skills students need to stand out.",
    note: "Helping students discover their strengths, sharpen their thinking and step confidently toward their future.",
    items: [
      { label: "Public Speaking", icon: Mic, tint: itemTints.blue },
      { label: "Career Awareness", icon: Compass, tint: itemTints.violet },
      { label: "Decision Making", icon: Scale, tint: itemTints.pink },
      { label: "Critical Thinking", icon: Brain, tint: itemTints.amber },
      { label: "Entrepreneurship Basics", icon: Rocket, tint: itemTints.rose },
      { label: "Stress Management", icon: HeartPulse, tint: itemTints.green },
      { label: "Exam Preparation", icon: NotebookPen, tint: itemTints.amber },
      { label: "Leadership Development", icon: Flag, tint: itemTints.violet },
      { label: "Financial Literacy", icon: Coins, tint: itemTints.sky },
      { label: "Innovation & Creativity", icon: Sparkles, tint: itemTints.blue },
      { label: "Design Thinking", icon: PenTool, tint: itemTints.emerald },
      { label: "AI Awareness", icon: Bot, tint: itemTints.green },
      { label: "Personal Branding", icon: BadgeCheck, tint: itemTints.amber },
      { label: "Responsible Technology Usage", icon: MonitorSmartphone, tint: itemTints.violet },
    ],
  },
  {
    id: "grades-11-12",
    tabLabel: "Grades 11–12",
    tabSub: "Career, College & Workplace Readiness",
    tabIcon: BarChart3,
    chip: "Grades 11–12",
    title: "Career, College & Workplace Readiness",
    description:
      "Focused guidance for careers, higher education and the transition into the professional world—so students leave school ready for what's next.",
    note: "From career clarity to workplace confidence—a guided pathway into college, career and beyond.",
    items: [
      { label: "Career Planning", icon: Route, tint: itemTints.blue },
      { label: "Higher Education Guidance", icon: GraduationCap, tint: itemTints.violet },
      { label: "Resume Writing", icon: FileText, tint: itemTints.pink },
      { label: "Interview Skills", icon: UserCheck, tint: itemTints.amber },
      { label: "Group Discussion", icon: Users, tint: itemTints.rose },
      { label: "Presentation Skills", icon: Presentation, tint: itemTints.green },
      { label: "Emotional Resilience", icon: HeartPulse, tint: itemTints.amber },
      { label: "Leadership Excellence", icon: Crown, tint: itemTints.violet },
      { label: "Entrepreneurship", icon: Rocket, tint: itemTints.sky },
      { label: "Personal Finance", icon: Wallet, tint: itemTints.blue },
      { label: "Workplace Readiness", icon: Briefcase, tint: itemTints.emerald },
      { label: "Professional Ethics", icon: Scale, tint: itemTints.green },
      { label: "AI Productivity", icon: Cpu, tint: itemTints.amber },
      { label: "Personal Branding", icon: BadgeCheck, tint: itemTints.violet },
    ],
  },
];

const SchoolsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-white pb-14 pt-16 sm:pb-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_8%,rgba(255,243,219,0.65),transparent_38%),radial-gradient(ellipse_at_6%_55%,rgba(232,242,255,0.85),transparent_40%)]" />
        <div className="absolute -left-10 top-[38%] h-56 w-36 bg-[#eaf4ff]/70 [clip-path:ellipse(70%_50%_at_0%_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[92rem] px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mt-4 font-serif text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-[#1c3d8f] sm:text-6xl">
            For Schools
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#536987] sm:text-lg sm:leading-8">
            Building strong foundations for confident, capable and compassionate learners.
          </p>
        </motion.div>

        <div id="school-programs" className="mt-12 scroll-mt-28 sm:mt-14">
          <AudienceExplorer stages={schoolStages} accent="blue" />
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
