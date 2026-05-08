"use client";

import { motion } from "motion/react";
import { experiences } from "@/lib/experiences";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 max-w-3xl"
      >
        <p className="mb-4 text-sm tracking-[0.24em] text-sky-300/80">EXPERIENCES</p>
      </motion.div>

      <ul className="group/list flex max-w-3xl flex-col gap-12">
        {experiences.map((experience, index) => (
          <motion.li
            key={experience.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {experience.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                {experience.title}
              </h3>
              <p className="text-sm text-slate-400 italic">{experience.organization}</p>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                {experience.description}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {experience.techs.map((tech) => (
                  <li key={tech}>
                    <span className="rounded-full bg-sky-400/10 px-2 py-0.5 text-xs text-sky-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
