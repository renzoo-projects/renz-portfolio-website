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

      <div className="max-w-3xl space-y-4">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:border-sky-400/40 md:p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-2 text-xs tracking-[0.2em] text-sky-300/80">{experience.period}</p>
                <h3 className="text-xl font-medium tracking-normal text-white transition-colors group-hover:text-sky-300 md:text-2xl">
                  {experience.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.18em] text-slate-400">
                  {experience.organization}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              {experience.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.techs.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 px-2 py-1 text-xs text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
