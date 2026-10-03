/* eslint-disable react/prop-types */
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const accents = {
  blue: {
    container: "bg-[#eaf2fb]",

    tab: "bg-[#2f6df6] shadow-[0_16px_34px_rgba(47,109,246,0.38)]",
    tabIconIdle: "bg-[#e8f0fe] text-[#2f6df6]",
    chip: "bg-[#2f6df6]",
    arrowHover: "group-hover:text-[#2f6df6]",
    pagerHover: "hover:border-[#2f6df6] hover:text-[#2f6df6]",
    noteBg: "bg-[#eef4fd]",
    noteIcon: "text-[#2f6df6]",
    deco: "bg-[#cfe1f7]/80",
  },
  teal: {
    container: "bg-[#e9f6f1]",

    tab: "bg-[#12a176] shadow-[0_16px_34px_rgba(18,161,118,0.35)]",
    tabIconIdle: "bg-[#e2f6ee] text-[#0f8a64]",
    chip: "bg-[#12a176]",
    arrowHover: "group-hover:text-[#0f8a64]",
    pagerHover: "hover:border-[#12a176] hover:text-[#0f8a64]",
    noteBg: "bg-[#ecf8f3]",
    noteIcon: "text-[#0f8a64]",
    deco: "bg-[#cdebe0]/80",
  },
  amber: {
    container: "bg-[#fdf4e3]",

    tab: "bg-[#e5a12a] shadow-[0_16px_34px_rgba(229,161,42,0.35)]",
    tabIconIdle: "bg-[#fdf1dc] text-[#c07f14]",
    chip: "bg-[#e5a12a]",
    arrowHover: "group-hover:text-[#c07f14]",
    pagerHover: "hover:border-[#e5a12a] hover:text-[#c07f14]",
    noteBg: "bg-[#fdf5e6]",
    noteIcon: "text-[#c07f14]",
    deco: "bg-[#f6e3c0]/80",
  },
  violet: {
    container: "bg-[#f4edfd]",

    tab: "bg-[#8b5cf6] shadow-[0_16px_34px_rgba(139,92,246,0.35)]",
    tabIconIdle: "bg-[#f1eafe] text-[#7548d8]",
    chip: "bg-[#8b5cf6]",
    arrowHover: "group-hover:text-[#7548d8]",
    pagerHover: "hover:border-[#8b5cf6] hover:text-[#7548d8]",
    noteBg: "bg-[#f4effe]",
    noteIcon: "text-[#7548d8]",
    deco: "bg-[#e4d8fa]/80",
  },
  terracotta: {
    container: "bg-[#fdeee7]",

    tab: "bg-[#e0683f] shadow-[0_16px_34px_rgba(224,104,63,0.35)]",
    tabIconIdle: "bg-[#fdeee7] text-[#c15a35]",
    chip: "bg-[#e0683f]",
    arrowHover: "group-hover:text-[#c15a35]",
    pagerHover: "hover:border-[#e0683f] hover:text-[#c15a35]",
    noteBg: "bg-[#fdf1ec]",
    noteIcon: "text-[#c15a35]",
    deco: "bg-[#f8d9c9]/80",
  },
};

const noteSpans = {
  0: "xl:col-span-4",
  1: "xl:col-span-3",
  2: "xl:col-span-2",
  3: "xl:col-span-4",
};

const AudienceExplorer = ({ stages, accent = "blue" }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];
  const activeAccent = accents[stage.accent || accent] || accents.blue;
  const hasTabs = stages.length > 1;

  const goToStage = (index) => setActiveStage((index + stages.length) % stages.length);

  return (
    <div className={`rounded-[2rem] p-4 transition-colors duration-500 sm:p-6 lg:p-8 ${activeAccent.container}`}>
      <div className={`grid gap-5 ${hasTabs ? "lg:grid-cols-[18.5rem_1fr]" : ""}`}>
        {hasTabs && (
          <div className="flex flex-col gap-3" role="tablist" aria-label="Program stages">
            {stages.map((item, index) => {
              const isActive = index === activeStage;
              const itemAccent = accents[item.accent || accent] || accents.blue;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goToStage(index)}
                  className={`group flex items-center gap-3.5 rounded-2xl p-4 text-left transition duration-300 ${
                    isActive
                      ? itemAccent.tab
                      : "bg-white hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(24,58,130,0.1)]"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? "bg-white/20 text-white" : itemAccent.tabIconIdle
                    }`}
                  >
                    <item.tabIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[0.95rem] font-bold ${isActive ? "text-white" : "text-[#1c3d8f]"}`}>
                      {item.tabLabel}
                    </span>
                    <span className={`mt-0.5 block text-xs leading-4 ${isActive ? "text-white/80" : "text-[#7b8aa0]"}`}>
                      {item.tabSub}
                    </span>
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                      isActive ? "bg-white/25 text-white" : `bg-[#eef3fa] text-[#94a3b8] ${itemAccent.arrowHover}`
                    }`}
                  >
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>
              );
            })}

            <div className="relative mt-auto hidden min-h-24 overflow-hidden rounded-2xl lg:block" aria-hidden="true">
              <div className={`absolute -bottom-10 -left-8 h-32 w-40 rounded-full transition-colors duration-500 ${activeAccent.deco}`} />
              <div className="absolute -bottom-6 left-16 h-20 w-24 rounded-full bg-white/50" />
              <Sparkles className="absolute bottom-4 left-6 h-9 w-9 text-white/80" />
            </div>
          </div>
        )}

        <div className="rounded-[1.75rem] bg-white p-4 shadow-[0_14px_40px_rgba(24,58,130,0.07)] sm:p-9">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stage.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 max-w-2xl">
                  <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white ${activeAccent.chip}`}>
                    {stage.chip}
                  </span>
                  <h3 className="mt-4 font-serif text-[1.7rem] font-semibold leading-tight text-[#1c3d8f] sm:text-[2.15rem]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#536987] sm:text-base sm:leading-8">
                    {stage.description}
                  </p>
                </div>

                {hasTabs && (
                  <div className="flex flex-col items-end gap-3">
                    <p className="font-serif leading-none" aria-label={`Slide ${activeStage + 1} of ${stages.length}`}>
                      <span className="text-4xl font-bold text-[#dce4f2]">{String(activeStage + 1).padStart(2, "0")}</span>
                      <span className="ml-1 text-sm font-semibold text-[#94a3b8]">/ {String(stages.length).padStart(2, "0")}</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => goToStage(activeStage - 1)}
                        aria-label="Previous stage"
                        className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe7f2] text-[#5b7191] transition ${activeAccent.pagerHover}`}
                      >
                        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => goToStage(activeStage + 1)}
                        aria-label="Next stage"
                        className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#dfe7f2] text-[#5b7191] transition ${activeAccent.pagerHover}`}
                      >
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <h4 className="mt-8 font-serif text-[1.35rem] font-semibold text-[#1c3d8f]">Key Learning Areas</h4>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">
                {stage.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-[#eef2f9] bg-white px-3.5 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#d8e4f5] hover:shadow-[0_10px_24px_rgba(24,58,130,0.09)]"
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.tint}`}>
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-[0.82rem] font-semibold leading-[1.15rem] text-[#3d5578]">{item.label}</span>
                  </li>
                ))}
                {stage.note && (
                  <li className={`flex items-center gap-3 rounded-xl px-4 py-3.5 sm:col-span-2 ${activeAccent.noteBg} ${noteSpans[stage.items.length % 4]}`}>
                    <Sparkles className={`h-5 w-5 shrink-0 ${activeAccent.noteIcon}`} aria-hidden="true" />
                    <p className="text-[0.8rem] font-medium leading-5 text-[#536987]">{stage.note}</p>
                  </li>
                )}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AudienceExplorer;
