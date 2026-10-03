/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Shield,
  Lightbulb,
  School,
  Zap,
  Star,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import TeamSection from "../components/TeamSection";
import { itemTints } from "../components/explorerTints";
import { cardEntrance } from "../components/entrance";

const revealOnScroll = (shouldReduceMotion, delay = 0) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
});

const Eyebrow = ({ children, light = false, center = false }) => (
  <span
    className={`inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] ${
      light ? "text-[#ffd79a]" : "text-[#d98b15]"
    }`}
  >
    <span className={`h-px w-8 ${light ? "bg-[#ffd79a]/60" : "bg-[#e7a334]"}`} aria-hidden="true" />
    {children}
    {center ? (
      <span className={`h-px w-8 ${light ? "bg-[#ffd79a]/60" : "bg-[#e7a334]"}`} aria-hidden="true" />
    ) : (
      <Sparkles className="h-4 w-4 text-[#fbb040]" aria-hidden="true" />
    )}
  </span>
);

const MethodCard = ({ method }) => (
  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_16px_40px_rgba(8,18,48,0.35)]">
    <div className="flex items-start justify-between gap-3">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${method.tint}`}>
        <method.icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className={`font-serif text-4xl font-bold leading-none ${method.numColor}`} aria-hidden="true">
        {method.number}
      </span>
    </div>
    <span className="mt-3 h-0.5 w-8 rounded-full bg-[#f6a623]" aria-hidden="true" />
    <h3 className="mt-2 font-serif text-[1.05rem] font-bold leading-6 text-[#1c3d8f]">{method.title}</h3>
    <p className="mt-2 text-[0.85rem] leading-6 text-[#7b8aa0]">{method.description}</p>
  </div>
);

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  // Core Principles data — content unchanged
  const principles = [
    {
      id: "01",
      title: "Excellence",
      subtitle: "Beyond Standards",
      description:
        "Crafting educational experiences that transcend conventional boundaries through meticulous attention to detail and innovative pedagogical approaches.",
      icon: Award,
      tint: itemTints.violet,
      blob: "bg-[#f1eafe]",
      numColor: "text-[#d3c4f6]",
    },
    {
      id: "02",
      title: "Innovation",
      subtitle: "Future Forward",
      description:
        "Pioneering tomorrow's learning solutions today with cutting-edge technology integration and forward-thinking educational methodologies.",
      icon: Lightbulb,
      tint: itemTints.green,
      blob: "bg-[#e6f5ee]",
      numColor: "text-[#b5e3cf]",
    },
    {
      id: "03",
      title: "Integrity",
      subtitle: "Trust Foundation",
      description:
        "Building lasting partnerships through transparent practices, ethical innovation, and unwavering commitment to educational excellence.",
      icon: Shield,
      tint: itemTints.amber,
      blob: "bg-[#fbf1dd]",
      numColor: "text-[#f0d5a5]",
    },
    {
      id: "04",
      title: "Impact",
      subtitle: "Measurable Change",
      description:
        "Creating transformative educational outcomes that resonate beyond classrooms, shaping minds and building tomorrow's leaders.",
      icon: Target,
      tint: itemTints.rose,
      blob: "bg-[#fdeef1]",
      numColor: "text-[#f6c3cd]",
    },
  ];

  // Methodology data — content unchanged
  const methodology = [
    {
      id: 1,
      number: "01",
      title: "Assessment & Analysis",
      description:
        "Comprehensive evaluation of current educational needs and learning objectives to create targeted solutions.",
      icon: Target,
      tint: itemTints.blue,
      dot: "bg-[#2f6df6]",
      numColor: "text-[#cfe0fd]",
    },
    {
      id: 2,
      number: "02",
      title: "Collaborative Planning",
      description:
        "Working closely with educators and stakeholders to design customized learning pathways and strategies.",
      icon: Users,
      tint: itemTints.violet,
      dot: "bg-[#8b5cf6]",
      numColor: "text-[#e2d6fb]",
    },
    {
      id: 3,
      number: "03",
      title: "Content Development",
      description:
        "Creating engaging, interactive educational materials tailored to diverse learning styles and preferences.",
      icon: BookOpen,
      tint: itemTints.pink,
      dot: "bg-[#ec4899]",
      numColor: "text-[#fad1e6]",
    },
    {
      id: 4,
      number: "04",
      title: "Implementation",
      description:
        "Seamless deployment of educational solutions with ongoing support and guidance throughout the process.",
      icon: Lightbulb,
      tint: itemTints.amber,
      dot: "bg-[#f59e0b]",
      numColor: "text-[#fbe3b5]",
    },
    {
      id: 5,
      number: "05",
      title: "Quality Assurance",
      description:
        "Rigorous testing and validation to ensure all educational materials meet the highest standards of excellence.",
      icon: Award,
      tint: itemTints.rose,
      dot: "bg-[#f43f5e]",
      numColor: "text-[#fdd0d8]",
    },
    {
      id: 6,
      number: "06",
      title: "Continuous Improvement",
      description:
        "Regular monitoring and optimization based on feedback and performance metrics for sustained success.",
      icon: TrendingUp,
      tint: itemTints.green,
      dot: "bg-[#22b573]",
      numColor: "text-[#c9ecd9]",
    },
  ];

  // Company values — content unchanged
  const values = [
    {
      id: 1,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in educational technology, creating cutting-edge solutions that transform learning experiences.",
      icon: Zap,
      card: "bg-[#f7faff] border-[#dce9fd] shadow-[0_14px_35px_rgba(47,109,246,0.10)]",
      chip: "bg-[#e8f0fe] text-[#2f6df6]",
      bar: "bg-[#2f6df6]",
    },
    {
      id: 2,
      title: "Accessibility",
      description:
        "We believe quality education tools should be accessible to all schools and students, regardless of their economic situation or geographic location.",
      icon: Shield,
      card: "bg-[#fffaf2] border-[#f3e5c8] shadow-[0_14px_35px_rgba(245,158,11,0.10)]",
      chip: "bg-[#fff3dd] text-[#f59e0b]",
      bar: "bg-[#f59e0b]",
    },
    {
      id: 3,
      title: "Empowerment",
      description:
        "We create tools that empower educators to teach more effectively and students to learn more deeply, fostering growth and achievement.",
      icon: TrendingUp,
      card: "bg-[#f4fcf8] border-[#d5efdf] shadow-[0_14px_35px_rgba(34,181,115,0.10)]",
      chip: "bg-[#e6f7ef] text-[#22b573]",
      bar: "bg-[#22b573]",
    },
    {
      id: 4,
      title: "Growth",
      description:
        "We foster continuous growth and improvement for our platform and for the educators who use it, always striving for excellence.",
      icon: Star,
      card: "bg-[#faf7ff] border-[#e8dffc] shadow-[0_14px_35px_rgba(139,92,246,0.10)]",
      chip: "bg-[#f1eafe] text-[#8b5cf6]",
      bar: "bg-[#8b5cf6]",
    },
  ];

  const stats = [
    { number: "500+", label: "Educational Institutions", icon: School },
    { number: "10K+", label: "Active Teachers", icon: Users },
    { number: "50K+", label: "Students Served", icon: GraduationCap },
    { number: "99%", label: "Satisfaction Rate", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-white font-sans mt-12">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate w-full overflow-hidden bg-white pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_28%,rgba(255,247,232,0.55),transparent_34%),radial-gradient(ellipse_at_18%_48%,rgba(238,246,255,0.75),transparent_32%)]" />
          <div className="absolute -left-6 top-[28%] h-64 w-40 bg-[#eaf4ff]/75 [clip-path:ellipse(70%_50%_at_0%_50%)]" />
          <div className="absolute -right-16 top-[16%] h-64 w-48 bg-[#fff4df]/60 [clip-path:ellipse(70%_50%_at_100%_50%)]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          {/* Left — copy */}
          <motion.div {...revealOnScroll(shouldReduceMotion)}>
            <Eyebrow>About Cultive</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#1c3d8f] sm:text-5xl lg:text-[3.4rem]">
              Transforming Education with <span className="text-[#f6a623]">Digital Excellence</span>
            </h1>
            <div className="mt-6 space-y-4 text-base leading-7 text-[#536987] sm:text-lg sm:leading-8">
              <p>
                Cultive is a leading solution service provider dedicated to empowering schools with innovative,
                technology-driven solutions that enhance the educational experience for students, teachers, and
                administrators.
              </p>
              <p>
                Our mission is to support educational institutions in creating dynamic, efficient, and engaging
                learning environments by offering a comprehensive range of products and services tailored to meet the
                unique needs of each school.
              </p>
              <p>
                Cultive serves schools, teachers, parents, and students across the globe, making education more
                accessible, efficient, and effective.
              </p>
            </div>
          </motion.div>

          {/* Right — image with soft decorations */}
          <motion.div
            {...revealOnScroll(shouldReduceMotion, 0.15)}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#eaf1fb]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-[#fbf1dd]"
              aria-hidden="true"
            />
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Educational Innovation"
              className="relative z-10 w-full rounded-[2rem] border border-[#e9eef6] object-cover shadow-[0_24px_60px_rgba(24,58,130,0.16)]"
            />
            <div className="absolute -bottom-5 left-6 z-20 flex items-center gap-3 rounded-2xl border border-[#eef2f9] bg-white px-5 py-3.5 shadow-[0_16px_40px_rgba(24,58,130,0.14)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fbf1dd] text-[#d98b15]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-[#1c3d8f]">The solution ocean</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Principles ──────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#f7f9fd] py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-[82rem] px-6">
          <motion.header {...revealOnScroll(shouldReduceMotion)} className="mx-auto max-w-3xl text-center">
            <Eyebrow>What Drives Us</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#1c3d8f] sm:text-5xl">
              Our Core Principles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#536987] sm:text-lg">
              The driving forces behind our educational revolution – where innovation meets excellence in
              transformative learning experiences.
            </p>
          </motion.header>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                {...cardEntrance(shouldReduceMotion, index)}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#e9eef6] bg-white p-7 shadow-[0_10px_35px_rgba(24,58,130,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(24,58,130,0.14)] sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full ${principle.blob}`}
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${principle.tint}`}>
                    <principle.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={`font-serif text-4xl font-bold leading-none ${principle.numColor}`} aria-hidden="true">
                    {principle.id}
                  </span>
                </div>
                <h3 className="relative mt-5 font-serif text-2xl font-semibold text-[#1c3d8f]">{principle.title}</h3>
                <p className="relative mt-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#d98b15]">
                  {principle.subtitle}
                </p>
                <p className="relative mt-3 text-[0.92rem] leading-7 text-[#7b8aa0]">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_92%_0%,rgba(238,244,255,0.6),transparent_36%),radial-gradient(ellipse_at_4%_80%,rgba(255,246,232,0.5),transparent_34%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[82rem] px-6">
          <motion.header {...revealOnScroll(shouldReduceMotion)} className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Excellence &amp; Innovation</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#1c3d8f] sm:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#536987] sm:text-lg">
              The driving forces behind our commitment to transforming educational experiences worldwide.
            </p>
          </motion.header>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                {...cardEntrance(shouldReduceMotion, index)}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1.5 ${value.card}`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-[0.8rem] font-bold ${value.chip}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#1c3d8f]">{value.title}</h3>
                <p className="mt-2.5 flex-1 text-[0.85rem] leading-6 text-[#7b8aa0]">{value.description}</p>
                <span className={`mt-4 h-1 w-12 rounded-full ${value.bar}`} aria-hidden="true" />
                {/* Colored bottom edge */}
                <span className={`absolute inset-x-0 bottom-0 h-1.5 ${value.bar}`} aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ──────────────────────────────────── */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-[96rem] px-6">
          <motion.div
            {...revealOnScroll(shouldReduceMotion)}
            className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0c1a45] via-[#12245c] to-[#1e3a8f] p-8 shadow-[0_24px_70px_rgba(24,58,130,0.22)] sm:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 right-[10%] h-64 w-64 rounded-full bg-[#fbb040]/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full border border-dashed border-[#fbb040]/25" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-dashed border-white/15" aria-hidden="true" />

            <header className="relative z-10 mx-auto max-w-3xl text-center">
              <Eyebrow light>How We Work</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Our Methodology
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
                Our systematic approach to delivering exceptional educational solutions.
              </p>
            </header>

            {/* Desktop — zigzag timeline: cards alternate above/below a dashed line of numbered dots */}
            <div className="relative z-10 mt-14 hidden lg:block">
              <div className="grid grid-cols-6 gap-x-6">
                {methodology.map((method, index) =>
                  index % 2 === 0 ? (
                    <motion.div key={method.id} {...cardEntrance(shouldReduceMotion, index)} className="flex h-full flex-col">
                      <MethodCard method={method} />
                      <span className="mx-auto h-10 w-px border-l border-dashed border-white/35" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <div key={method.id} aria-hidden="true" />
                  )
                )}
              </div>
              <div className="relative">
                <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/30" aria-hidden="true" />
                <div className="relative grid grid-cols-6 gap-x-6">
                  {methodology.map((method) => (
                    <span
                      key={method.id}
                      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white shadow-[0_8px_20px_rgba(8,18,48,0.5)] ring-4 ring-white/10 ${method.dot}`}
                    >
                      {method.number}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-6 gap-x-6">
                {methodology.map((method, index) =>
                  index % 2 === 1 ? (
                    <motion.div key={method.id} {...cardEntrance(shouldReduceMotion, index)} className="flex h-full flex-col">
                      <span className="mx-auto h-10 w-px border-l border-dashed border-white/35" aria-hidden="true" />
                      <MethodCard method={method} />
                    </motion.div>
                  ) : (
                    <div key={method.id} aria-hidden="true" />
                  )
                )}
              </div>
            </div>

            {/* Mobile/tablet — vertical timeline */}
            <div className="relative z-10 mt-10 lg:hidden">
              <span className="absolute bottom-4 left-[1.1rem] top-4 w-px border-l border-dashed border-white/30" aria-hidden="true" />
              <div className="space-y-8">
                {methodology.map((method, index) => (
                  <motion.div key={method.id} {...cardEntrance(shouldReduceMotion, index)} className="relative pl-12 sm:pl-14">
                    <span
                      className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full text-[0.7rem] font-bold text-white shadow-lg ring-4 ring-[#12245c] ${method.dot}`}
                    >
                      {method.number}
                    </span>
                    <MethodCard method={method} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <TeamSection />

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[82rem] px-6">
          <motion.div
            {...revealOnScroll(shouldReduceMotion)}
            className="grid grid-cols-2 gap-6 rounded-[2.5rem] border border-[#e9eef6] bg-[#f7f9fd] px-8 py-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1c3d8f] text-white shadow-[0_10px_24px_rgba(28,61,143,0.28)]">
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-4 font-serif text-3xl font-bold text-[#1c3d8f] sm:text-4xl">{stat.number}</p>
                <p className="mt-1 text-sm font-semibold text-[#7b8aa0]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
