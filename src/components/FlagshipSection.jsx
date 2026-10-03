import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import ProgramCard from "./ProgramCard";
import ProgramDrawer from "./ProgramDrawer";
import { flagshipPrograms, flagshipTicker } from "../data/flagshipPrograms";

const FlagshipSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeProgram, setActiveProgram] = useState(null);

  return (
    <div>
      <section className="overflow-hidden bg-[#f7f9fd] pb-16 sm:pb-20">
        {/* Scrolling ticker — right to left, sits right after the services hero */}
        <div
          className="border-y border-[#e7a334] bg-[#fbb040] py-4 text-[#183a82]"
          aria-label="Cultive training and education programmes"
        >
          {shouldReduceMotion ? (
            <ul className="mx-auto grid max-w-7xl gap-3 px-6 sm:grid-cols-2 lg:grid-cols-3">
              {flagshipTicker.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/40 px-4 py-3 text-sm leading-6 text-[#183a82]"
                >
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#183a82]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="overflow-hidden">
              <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              >
                {[...flagshipTicker, ...flagshipTicker].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    aria-hidden={index >= flagshipTicker.length}
                    className="flex w-[19rem] shrink-0 items-center gap-3 px-6 text-sm font-medium leading-6 text-[#183a82] sm:w-[24rem] sm:px-8"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#183a82]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-3 px-6 text-center text-sm font-medium text-[#536987]">
          <Award className="h-5 w-5 shrink-0 text-[#e5a12a]" aria-hidden="true" />
          <p>Global Green Belt Certified Trainers from University of California, Los Angeles (UCLA Extension)</p>
        </div>

        <div className="mx-auto max-w-[92rem] px-6">
          {/* Header */}
          <header className="mx-auto mt-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#d98b15]">
              <span className="h-px w-8 bg-[#e7a334]" aria-hidden="true" />
              Our Flagship Programs
              <Sparkles className="h-4 w-4 text-[#fbb040]" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#1c3d8f] sm:text-5xl lg:text-6xl">
              A program for every next step.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#536987] sm:text-lg">
              Cultive offers a wide range of training, workshops &amp; seminars, and other intensive, life-changing
              programs and courses.
            </p>
          </header>

          {/* Compact program cards — click to open the detail drawer */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {flagshipPrograms.map((program, index) => (
              <ProgramCard
                key={program.id}
                program={program}
                index={index}
                onSelect={setActiveProgram}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      <ProgramDrawer
        program={activeProgram}
        onClose={() => setActiveProgram(null)}
        shouldReduceMotion={shouldReduceMotion}
      />
    </div>
  );
};

export default FlagshipSection;
