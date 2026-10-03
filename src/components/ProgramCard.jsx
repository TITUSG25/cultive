/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cardEntrance } from "./entrance";

const ProgramCard = ({ program, index, onSelect, shouldReduceMotion }) => (
  <motion.div {...cardEntrance(shouldReduceMotion, index)} className="h-full">
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#e9eef6] bg-white p-6 shadow-[0_10px_35px_rgba(24,58,130,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(24,58,130,0.15)]">
      {/* Decorative soft blob */}
      <div
        className={`pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full ${program.tone.blob}`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full opacity-60 ${program.tone.blob}`}
        aria-hidden="true"
      />

      {/* Icon + number */}
      <div className="relative flex items-start justify-between gap-3">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_6px_16px_rgba(24,58,130,0.1)] ring-1 ring-[#eef2f9] ${program.tone.accent}`}
        >
          <program.icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className={`font-serif text-3xl font-bold leading-none ${program.tone.accentLight}`} aria-hidden="true">
          {program.number}
        </span>
      </div>

      {/* Title + subtitle */}
      <h3 className="relative mt-5 text-[1.15rem] font-bold leading-snug tracking-[-0.01em] text-[#1c3d8f]">
        {program.title}
      </h3>
      <p className="relative mt-1.5 min-h-10 text-[0.8rem] leading-5 text-[#7b8aa0]">{program.subtitle}</p>

      {/* Highlights */}
      <ul className="relative mt-5 space-y-2.5">
        {program.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5">
            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${program.tone.accent}`} aria-hidden="true" />
            <span className="text-[0.82rem] font-medium leading-5 text-[#3d5578]">{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Explore button — gradient pill with accent glow */}
      <div className="relative mt-auto pt-7">
        <button
          type="button"
          onClick={() => onSelect(program)}
          aria-label={`Explore ${program.title}`}
          className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:gap-3.5 ${program.tone.btnGrad} ${program.tone.btnGlow}`}
        >
          Explore Program
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default ProgramCard;
