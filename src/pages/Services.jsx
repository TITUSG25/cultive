import { ArrowRight, Layers, Shield, Headphones, Award, BarChart3, BookOpen, Lock, Lightbulb, FileText, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import FlagshipSection from "../components/FlagshipSection";
import SchoolsSection from "../components/SchoolsSection";
import AudienceSections from "../components/AudienceSections";
import { cardEntrance } from "../components/entrance";
import cultiveBook from '../assets/cultive_book.png';
import cultiveWorld from '../assets/cultive_world.png';
import cultivePlant from '../assets/cultive_plant.png';
import cultivePen from '../assets/cultive_pen.png';


const heroTextVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};


const revealOnScroll = (shouldReduceMotion, delay = 0) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const modernEducationFeatures = [
  {
    icon: Layers,
    watermark: BookOpen,
    title: "Comprehensive Solution",
    description: "Complete ecosystem covering all educational stakeholders with integrated tools and seamless communication.",
    chip: "bg-[#2f6df6]",
    accent: "#2f6df6",
    arrow: "bg-[#e8f0fe] text-[#2f6df6]",
    wmColor: "text-[#2f6df6]",
    pattern: "bg-[#e8f0fe]",
    glow: "rgba(47,109,246,0.25)",
  },
  {
    icon: Shield,
    watermark: Lock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with regular backups and 99.9% uptime guarantee for peace of mind.",
    chip: "bg-[#f43f5e]",
    accent: "#f43f5e",
    arrow: "bg-[#ffe9ee] text-[#f43f5e]",
    wmColor: "text-[#f43f5e]",
    pattern: "bg-[#ffe9ee]",
    glow: "rgba(244,63,94,0.22)",
  },
  {
    icon: Headphones,
    watermark: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and customer service to ensure smooth operations always.",
    chip: "bg-[#22b573]",
    accent: "#22b573",
    arrow: "bg-[#e6f7ef] text-[#22b573]",
    wmColor: "text-[#22b573]",
    pattern: "bg-[#e6f7ef]",
    glow: "rgba(34,181,115,0.22)",
  },
  {
    icon: Lightbulb,
    watermark: FileText,
    title: "User-Friendly Design",
    description: "Intuitive interfaces designed for educators, students, and parents with minimal learning curve required.",
    chip: "bg-[#f59e0b]",
    accent: "#f59e0b",
    arrow: "bg-[#fff3dd] text-[#f59e0b]",
    wmColor: "text-[#f59e0b]",
    pattern: "bg-[#fff3dd]",
    glow: "rgba(245,158,11,0.25)",
  },
  {
    icon: Award,
    watermark: Award,
    title: "Proven Track Record",
    description: "Trusted by 500+ institutions worldwide with 98% satisfaction rate among our educational partners.",
    chip: "bg-[#8b5cf6]",
    accent: "#8b5cf6",
    arrow: "bg-[#f1eafe] text-[#8b5cf6]",
    wmColor: "text-[#8b5cf6]",
    pattern: "bg-[#f1eafe]",
    glow: "rgba(139,92,246,0.22)",
  },
  {
    icon: BarChart3,
    watermark: TrendingUp,
    title: "Data-Driven Insights",
    description: "Advanced analytics and reporting tools to make informed decisions and drive better educational outcomes.",
    chip: "bg-[#0ea5e9]",
    accent: "#0ea5e9",
    arrow: "bg-[#e8f6fe] text-[#0ea5e9]",
    wmColor: "text-[#0ea5e9]",
    pattern: "bg-[#e8f6fe]",
    glow: "rgba(14,165,233,0.22)",
  },
];

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-white font-sans mt-12">
      {/* Hero Section */}

      <section className="relative isolate w-full overflow-hidden bg-white pb-12 pt-20 sm:pb-14 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_28%,rgba(255,247,232,0.52),transparent_34%),radial-gradient(ellipse_at_18%_48%,rgba(238,246,255,0.72),transparent_32%)]" />
          <div className="absolute -left-6 top-[28%] h-64 w-40 bg-[#eaf4ff]/75 [clip-path:ellipse(70%_50%_at_0%_50%)]" />
          <div className="absolute -right-16 top-[16%] h-64 w-48 bg-[#fff4df]/60 [clip-path:ellipse(70%_50%_at_100%_50%)]" />
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-32 w-full sm:h-36 lg:h-40">
            <path d="M0 78 C150 0 245 168 430 131 C590 99 716 52 895 67 C1080 83 1214 168 1440 74 L1440 220 L0 220 Z" fill="#eaf4ff" fillOpacity="0.9" />
            <path d="M0 136 C175 103 266 193 450 171 C637 148 774 109 955 127 C1149 147 1300 72 1440 113 L1440 220 L0 220 Z" fill="#fff4df" fillOpacity="0.72" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-12">
          <motion.div
            className="relative z-10 text-left"
            variants={heroTextVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
          >
            <h1 className="mb-5 max-w-xl text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[#183a82] sm:text-6xl lg:text-[3.25rem] xl:text-[3.65rem]">
              Smarter Solutions
              <br />
              for a Brighter
              <br />
              <span className="text-[#f6a623]">Tomorrow</span>
            </h1>

            <p className="max-w-lg text-base leading-7 text-[#536987] sm:text-lg sm:leading-7">
              Cultive offers a comprehensive suite of digital solutions designed for schools, students, teachers, and service providers to simplify operations, enhance learning, and create a more connected education ecosystem.
            </p>

            <div className="relative mt-6 w-fit text-[#183a82] [font-family:'Segoe_Script',cursive]">
              <span className="whitespace-nowrap text-base italic sm:text-lg">Education without limits</span>
              <span className="absolute -bottom-1 left-[34%] h-px w-16 bg-[#f6a623]" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="relative min-w-0 translate-y-[3px] text-left lg:min-h-[34rem] lg:-translate-x-3 xl:-translate-x-5">
            <div className="relative mx-auto aspect-[1.12/1] w-full max-w-[32rem] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:max-w-none">
              <img
                src={cultiveWorld}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-0 w-[94%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.18]"
              />
              <div className="absolute left-1/2 top-1/2 z-0 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#b9d4f3]/40" aria-hidden="true" />
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#6baeff]/65" aria-hidden="true" />
                <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#70c9ac]/65" aria-hidden="true" />
                <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#a895df]/65" aria-hidden="true" />
                <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#f6a623]/65" aria-hidden="true" />
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 w-[86%] -translate-x-1/2 -translate-y-1/2 lg:w-[78%]">
                <motion.img
                  src={cultiveBook}
                  alt="Cultive education ecosystem"
                  className="w-full object-contain drop-shadow-[0_18px_24px_rgba(24,58,130,0.12)]"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>



            <div className="relative z-0 mx-auto mt-2 flex w-full max-w-[32rem] items-end justify-between px-4 lg:absolute lg:bottom-[5%] lg:left-0 lg:mt-0 lg:max-w-none lg:px-0">
              <img src={cultivePlant} alt="" aria-hidden="true" className="w-20 object-contain sm:w-24 lg:-ml-[8%] lg:w-[23%]" />
              <img src={cultivePen} alt="" aria-hidden="true" className="w-32 object-contain sm:w-40 lg:mr-[2%] lg:w-[24%]" />
            </div>

            <div className="relative z-10 ml-auto mt-5 mr-4 w-fit rotate-[-5deg] text-right text-[#183a82] [font-family:'Segoe_Script',cursive] lg:absolute lg:right-[-9%] lg:top-[20%] lg:mt-0 lg:mr-0">
              <span className="block text-sm leading-tight xl:text-base">People</span>
              <span className="block text-sm leading-tight xl:text-base">Platforms</span>
              <span className="block text-sm leading-tight xl:text-base">Possibilities</span>
              <span className="ml-auto mt-1 block h-1 w-16 -rotate-6 rounded-full bg-[#f6a623]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <FlagshipSection />

      <SchoolsSection />

      <AudienceSections />

      {/* Why Choose Us */}
      <section className="relative isolate overflow-hidden bg-[#f7f9fd] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(238,244,255,0.7),transparent_36%),radial-gradient(ellipse_at_5%_85%,rgba(255,246,232,0.6),transparent_34%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[92rem] px-6">
          <motion.div {...revealOnScroll(shouldReduceMotion)} className="mx-auto max-w-3xl text-center">
            <span className="mx-auto block h-1 w-14 rounded-full bg-[#f6a623]" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#1c3d8f] sm:text-5xl">
              Designed for <span className="text-[#2f6df6]">Modern Education</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#536987] sm:text-lg">
              Experience the difference with our comprehensive, user-friendly solutions designed specifically for modern
              educational institutions.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modernEducationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...cardEntrance(shouldReduceMotion, index)}
                className="min-w-0"
              >
                <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[#eef2f9] bg-white p-6 shadow-[0_10px_30px_rgba(24,58,130,0.06)] sm:p-7">
                  {/* Bottom-right rounded pattern */}
                  <span
                    className={`absolute -bottom-12 -right-12 h-40 w-40 rotate-12 rounded-[3rem] opacity-70 ${feature.pattern}`}
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute -bottom-8 right-10 h-20 w-20 rounded-full opacity-50 ${feature.pattern}`}
                    aria-hidden="true"
                  />
                  <feature.watermark
                    className={`absolute -bottom-4 -right-4 h-28 w-28 -rotate-6 opacity-[0.15] ${feature.wmColor}`}
                    strokeWidth={1.1}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute right-7 top-7 h-12 w-14"
                    style={{ backgroundImage: "radial-gradient(rgba(28,61,143,0.16) 1.4px, transparent 1.4px)", backgroundSize: "10px 10px" }}
                    aria-hidden="true"
                  />
                  <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md ${feature.chip}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-[#1c3d8f]">{feature.title}</h3>
                  <p className="mt-2 max-w-[80%] text-[0.85rem] leading-6 text-[#7b8aa0]">{feature.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold" style={{ color: feature.accent }}>
                    Learn more
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full transition duration-300 group-hover:translate-x-0.5 ${feature.arrow}`}>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
