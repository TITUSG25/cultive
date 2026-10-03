/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, X } from "lucide-react";

const SectionTitle = ({ children, accent }) => (
  <div>
    <h4 className="font-serif text-xl font-semibold text-[#1c3d8f] sm:text-[1.4rem]">{children}</h4>
    <span className={`mt-2 block h-1 w-10 rounded-full ${accent}`} aria-hidden="true" />
  </div>
);

/* Horizontal numbered stepper — wraps to multiple rows on narrow widths */
const StepperBlock = ({ card, tone }) => (
  <section>
    <div className="flex flex-wrap items-end justify-between gap-3">
      <SectionTitle accent={tone.chip}>{card.title}</SectionTitle>
      {card.chip && (
        <span className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold ${tone.chipLight}`}>{card.chip}</span>
      )}
    </div>
    <ol className="mt-7 flex flex-wrap items-start gap-y-7">
      {card.steps.map((step, i) => (
        <li key={step.title} className="flex items-start">
          <div className="flex w-[4.6rem] flex-col items-center text-center sm:w-20">
            <span className={`flex h-11 w-11 items-center justify-center rounded-full shadow-sm ring-1 ring-black/5 ${step.tint}`}>
              <step.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            {step.time && (
              <p className="mt-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-[#d98b15]">{step.time}</p>
            )}
            <p className="mt-1 text-[0.68rem] font-bold leading-3 text-[#94a3b8]">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-0.5 text-[0.72rem] font-semibold leading-4 text-[#3d5578]">{step.title}</p>
          </div>
          {i < card.steps.length - 1 && (
            <ChevronRight className="mx-1 mt-3.5 h-4 w-4 shrink-0 text-[#c3cede]" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  </section>
);

const ListBlock = ({ card, tone }) => (
  <section>
    <SectionTitle accent={tone.chip}>{card.title}</SectionTitle>
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {card.items.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-3 rounded-xl border border-[#eef2f9] bg-[#fafbfe] px-3.5 py-3 transition hover:border-[#d8e4f5] hover:bg-white"
        >
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.tint}`}>
            <item.icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[0.85rem] font-semibold leading-5 text-[#3d5578]">{item.label}</span>
        </li>
      ))}
    </ul>
  </section>
);

const ChipsBlock = ({ card, tone }) => (
  <section>
    <SectionTitle accent={tone.chip}>{card.title}</SectionTitle>
    <ul className="mt-5 flex flex-wrap gap-2">
      {card.items.map((item) => (
        <li key={item} className={`rounded-full px-3.5 py-2 text-[0.8rem] font-medium leading-4 ${tone.chipLight}`}>
          {item}
        </li>
      ))}
    </ul>
  </section>
);

const DetailBlock = ({ card, tone }) => (
  <section>
    <SectionTitle accent={tone.chip}>{card.title}</SectionTitle>
    <ul className="mt-5 grid gap-5 sm:grid-cols-2">
      {card.items.map((item) => (
        <li key={item.title} className="flex items-start gap-3">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.tint}`}>
            <item.icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.9rem] font-semibold leading-6 text-[#1c3d8f]">{item.title}</span>
            <span className="mt-0.5 block text-[0.82rem] leading-5 text-[#7b8aa0]">{item.description}</span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);

const blockRenderers = {
  timeline: StepperBlock,
  list: ListBlock,
  chips: ChipsBlock,
  detail: DetailBlock,
};

const ProgramDrawer = ({ program, onClose, shouldReduceMotion }) => {
  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!program) return undefined;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [program, onClose]);

  return (
    <AnimatePresence>
      {program && (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label={program.title}>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Panel — full screen sheet on mobile, wide right sidebar on sm+ */}
          <motion.aside
            className="absolute inset-y-0 right-0 flex w-full flex-col bg-white shadow-2xl sm:max-w-3xl sm:rounded-l-[2rem] lg:max-w-4xl"
            initial={shouldReduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? undefined : { x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              autoFocus
              aria-label="Close program details"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3d5578] shadow-md transition hover:bg-slate-100 sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 pb-10 pt-6 sm:px-10 sm:pt-8">
              {/* Top row — audience chip + icon badge */}
              <div className="flex items-center justify-between gap-4 pr-12">
                <span className="inline-flex items-center rounded-full border border-[#dfe7f2] bg-[#f4f7fc] px-4 py-1.5 text-xs font-semibold text-[#3d5578]">
                  {program.audience}
                </span>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${program.tone.iconBox}`}>
                  <program.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              {/* Header — copy left, photo right */}
              <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_19rem] lg:gap-8">
                <div className="min-w-0">
                  <h3 className="font-serif text-3xl font-semibold leading-[1.15] text-[#1c3d8f] sm:text-4xl">
                    {program.title}
                  </h3>
                  <p className={`mt-2 text-sm font-semibold leading-snug sm:text-base ${program.tone.accent}`}>
                    {program.subtitle}
                  </p>
                  <p className="mt-4 text-[0.92rem] leading-7 text-[#536987]">{program.description}</p>
                </div>
                {program.photo && (
                  <img
                    src={program.photo}
                    alt={program.title}
                    className={`w-full rounded-2xl border border-[#eef2f9] object-cover shadow-[0_16px_40px_rgba(24,58,130,0.14)] ${
                      program.photo ? "h-48 sm:h-56 lg:h-64" : ""
                    }`}
                  />
                )}
              </div>

              {/* Metrics */}
              {program.metrics && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {program.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex min-w-[8rem] items-center gap-3 rounded-xl border border-[#eef2f9] bg-[#f8fafd] px-4 py-3"
                      >
                        <metric.icon className={`h-5 w-5 shrink-0 ${program.tone.accent}`} aria-hidden="true" />
                        <div className="min-w-0">
                          <p className="font-serif text-lg font-bold leading-6 text-[#1c3d8f]">{metric.value}</p>
                          <p className="mt-0.5 text-[0.7rem] font-medium leading-4 text-[#7b8aa0]">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content sections */}
                <div className="mt-10 space-y-10">
                  {program.cards.map((card) => {
                    const Renderer = blockRenderers[card.type];
                    return (
                      <div key={card.title} className="border-t border-[#eef2f9] pt-8 first:border-t-0 first:pt-0">
                        <Renderer card={card} tone={program.tone} />
                      </div>
                    );
                  })}

                  {program.support && (
                    <section className="rounded-2xl bg-[#f4f7fc] p-6 sm:p-7">
                      <SectionTitle accent={program.tone.chip}>{program.support.title}</SectionTitle>
                      <ul className="mt-5 space-y-5">
                        {program.support.items.map((item) => (
                          <li key={item.title} className="flex items-start gap-3.5">
                            <span
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ${item.tint}`}
                            >
                              <item.icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[0.92rem] font-semibold leading-6 text-[#1c3d8f]">
                                {item.title}
                              </span>
                              <span className="mt-0.5 block text-[0.82rem] leading-5 text-[#7b8aa0]">
                                {item.description}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
            </div>

            {/* Sticky CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#eef2f9] bg-white px-6 py-4 sm:px-10">
              <div className="min-w-0">
                <p className="text-[0.95rem] font-bold text-[#1c3d8f]">Interested in this program?</p>
                <p className="mt-0.5 text-xs leading-5 text-[#7b8aa0]">
                  Get in touch for detailed information, schedules and customization options.
                </p>
              </div>
              <Link
                to="/contact"
                className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:gap-3 ${program.tone.btnGrad} ${program.tone.btnGlow}`}
              >
                Enquire About Program
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProgramDrawer;
